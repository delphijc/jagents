/**
 * JAGENTS Skill: Download Images
 * Purpose: Download images from URLs or extract and download images from Markdown/HTML files.
 * Used by: Developer, Content Creator
 */

import * as fs from 'fs';
import * as path from 'path';
import * as crypto from 'crypto';
import { URL } from 'url';

export interface DownloadImagesInput {
    fpc?: boolean;
    io?: boolean;
    tuof: string;
}

export const downloadImagesSkill = {
    toolDefinition: {
        name: 'jagents_skill_download_images',
        description: 'Downloads images from URLs or extracts and downloads images from Markdown/HTML files locally.',
        inputSchema: {
            type: 'object',
            properties: {
                fpc: {
                    type: 'boolean',
                    description: 'Full Page Copying: Download page content and all images, updating references.',
                },
                io: {
                    type: 'boolean',
                    description: 'Image Only: Download images only from the source.',
                },
                tuof: {
                    type: 'string',
                    description: 'Target URL or File: The source file path or URL to process.',
                },
            },
            required: ['tuof'],
        },
    },

    async execute(input: DownloadImagesInput): Promise<string> {
        const { fpc, io, tuof } = input;

        if (!fpc && !io) {
            return "Error: Please specify either --fpc (Full Page Copying) or --io (Image Only).";
        }

        // Validate target
        if (fpc && !fs.existsSync(tuof)) {
            // Basic check if it's a file path. If URL, we would need to fetch generic text first.
            // For this implementation, we assume FPC target is a local file (Markdown/HTML).
            return `Error: Target file not found: ${tuof}. Full Page Copying currently supports local files.`;
        }

        const targetDir = path.dirname(tuof);
        const imagesDir = path.join(targetDir, 'images');

        // Ensure images dir exists
        if (!fs.existsSync(imagesDir)) {
            try {
                fs.mkdirSync(imagesDir, { recursive: true });
            } catch (e) {
                return `Error creating images directory: ${e}`;
            }
        }

        let summary = "";

        if (fpc) {
            summary = await processFileFullPage(tuof, imagesDir);
        } else if (io) {
            // For Image Only, we assume inputs might be a file containing URLs or we parse the file for images but don't rewrite it.
            summary = await processFileImagesOnly(tuof, imagesDir);
        }

        return summary;
    },
};

async function downloadImage(url: string, imageDir: string): Promise<{ filename: string; success: boolean }> {
    try {
        const hash = crypto.createHash('md5').update(url).digest('hex');
        let ext = path.extname(new URL(url).pathname);
        if (!ext) ext = '.jpg';

        const filename = `img_${hash.substring(0, 10)}${ext}`;
        const filepath = path.join(imageDir, filename);

        if (fs.existsSync(filepath)) {
            return { filename, success: true };
        }

        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.47 Safari/537.36'
            }
        });

        if (!response.ok) {
            return { filename, success: false };
        }

        const buffer = await response.arrayBuffer();
        fs.writeFileSync(filepath, Buffer.from(buffer));
        return { filename, success: true };

    } catch (e) {
        return { filename: '', success: false };
    }
}

async function processFileFullPage(filepath: string, imagesDir: string): Promise<string> {
    const content = fs.readFileSync(filepath, 'utf-8');
    let newContent = content;
    let imagesDownloaded = 0;

    // Regex for Markdown ![alt](url)
    const mdPattern = /!\[(.*?)\]\((http[s]?:\/\/[^\s\)]+)(?:\s+"(.*?)")?\)/g;
    // Regex for HTML <img src="url">
    const htmlPattern = /<img\s+[^>]*src=["'](http[s]?:\/\/[^"']+)["'][^>]*>/g;

    // Find all matches first to avoid async issues in strict replace
    // We'll replace sequentially
    let match;

    // Markdown replacement
    // Since str.replace with async replacer isn't standard in basic JS/TS without tricks,
    // we'll loop finding matches and replacing them one by one or matching all then downloading.
    // Matching all then downloading is cleaner.
    const replacements: { original: string, replacement: string }[] = [];

    // Helper for MD
    const mdMatches = [...content.matchAll(mdPattern)];
    for (const m of mdMatches) {
        const original = m[0];
        const alt = m[1];
        const url = m[2];
        const title = m[3];

        const { filename, success } = await downloadImage(url, imagesDir);
        if (success) {
            imagesDownloaded++;
            const newPath = `images/${filename}`;
            const replacement = title
                ? `![${alt}](${newPath} "${title}")`
                : `![${alt}](${newPath})`;
            replacements.push({ original, replacement });
        }
    }

    // Helper for HTML
    const htmlMatches = [...content.matchAll(htmlPattern)];
    for (const m of htmlMatches) {
        const fullTag = m[0];
        const url = m[1];

        const { filename, success } = await downloadImage(url, imagesDir);
        if (success) {
            imagesDownloaded++;
            const newPath = `images/${filename}`;
            const replacement = fullTag.replace(url, newPath);
            replacements.push({ original: fullTag, replacement });
        }
    }

    // Apply replacements
    // Use a simple replacement strategy. Beware of overlapping strings if any (unlikely for unique image tags)
    for (const r of replacements) {
        // Use replaceAll if available or replace (global regex if needed)
        // Since we matched exact strings, we can replace them.
        // Special chars in `original` need escaping for regex if using regex replace
        // Ideally just string split/join or replaceAll
        newContent = newContent.split(r.original).join(r.replacement);
    }

    if (imagesDownloaded > 0) {
        fs.writeFileSync(filepath, newContent, 'utf-8');
    }

    return `Processed (FPC): ${filepath}\nImages Downloaded: ${imagesDownloaded}\nImages saved to: ${imagesDir}`;
}

async function processFileImagesOnly(filepath: string, imagesDir: string): Promise<string> {
    const content = fs.readFileSync(filepath, 'utf-8');
    let imagesDownloaded = 0;

    const mdPattern = /!\[(.*?)\]\((http[s]?:\/\/[^\s\)]+)(?:\s+"(.*?)")?\)/g;
    const htmlPattern = /<img\s+[^>]*src=["'](http[s]?:\/\/[^"']+)["'][^>]*>/g;

    const urls = new Set<string>();

    const mdMatches = [...content.matchAll(mdPattern)];
    mdMatches.forEach(m => urls.add(m[2]));

    const htmlMatches = [...content.matchAll(htmlPattern)];
    htmlMatches.forEach(m => urls.add(m[1]));

    for (const url of urls) {
        const { success } = await downloadImage(url, imagesDir);
        if (success) imagesDownloaded++;
    }

    return `Processed (IO): ${filepath}\nImages Downloaded: ${imagesDownloaded}\nImages saved to: ${imagesDir}`;
}
