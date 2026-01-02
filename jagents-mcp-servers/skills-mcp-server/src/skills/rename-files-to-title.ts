/**
 * JAGENTS Skill: Rename Files to Title
 * Purpose: Rename Markdown files based on their H1 title, with shortening and slugification.
 * Used by: Content Manager, Developer
 */

import * as fs from 'fs';
import * as path from 'path';

export interface RenameFilesInput {
    directory: string;
    maxLength?: number;
}

export const renameFilesToTitleSkill = {
    toolDefinition: {
        name: 'jagents_skill_rename_files_to_title',
        description: 'Renames Markdown files in a directory based on their first line title, creating a shortened slug.',
        inputSchema: {
            type: 'object',
            properties: {
                directory: {
                    type: 'string',
                    description: 'The directory containing markdown files to rename.',
                },
                maxLength: {
                    type: 'number',
                    description: 'Maximum length of the new filename including extension (default: 30).',
                },
            },
            required: ['directory'],
        },
    },

    async execute(input: RenameFilesInput): Promise<string> {
        const directory = input.directory;
        const maxLength = input.maxLength || 30;
        const extension = '.md';

        if (!fs.existsSync(directory)) {
            return `Error: Directory not found: ${directory}`;
        }

        const files = fs.readdirSync(directory)
            .filter(f => f.endsWith(extension) && f !== 'README.md')
            .sort();

        let log = `# Renaming Log\n\n| Original | Title | New Name |\n| --- | --- | --- |\n`;
        let count = 0;

        for (const filename of files) {
            const filepath = path.join(directory, filename);
            let title = filename;

            try {
                // Read first line for title
                const fd = fs.openSync(filepath, 'r');
                const buffer = Buffer.alloc(1024);
                const bytesRead = fs.readSync(fd, buffer, 0, 1024, 0);
                fs.closeSync(fd);

                const content = buffer.toString('utf-8', 0, bytesRead);
                const firstLine = content.split('\n')[0].trim();

                if (firstLine.startsWith('#')) {
                    title = firstLine.replace(/^#+\s*/, '').trim();
                }
            } catch (e) {
                console.error(`Error reading ${filename}: ${e}`);
                continue;
            }

            // Slugify
            // Remove non-alphanumeric (keep spaces), then replace spaces with dashes
            let slug = title.replace(/[^a-zA-Z0-9\s-]/g, '').replace(/\s+/g, '-');

            // Truncate
            const maxNameLen = maxLength - extension.length;
            if (slug.length > maxNameLen) {
                slug = slug.substring(0, maxNameLen);
            }

            // Remove trailing dash
            slug = slug.replace(/-+$/, '');

            // Ensure we have something
            if (slug.length === 0) slug = 'untitled';

            let newFilename = `${slug}${extension}`;
            let newFilepath = path.join(directory, newFilename);

            // Collision handling (simple 1-level check or iterative)
            if (fs.existsSync(newFilepath) && newFilename !== filename) {
                const base = slug.substring(0, maxNameLen - 2);
                newFilename = `${base}-1${extension}`;
                newFilepath = path.join(directory, newFilename);
            }

            if (newFilename !== filename) {
                try {
                    fs.renameSync(filepath, newFilepath);
                    log += `| ${filename} | ${title} | ${newFilename} |\n`;
                    count++;
                } catch (e) {
                    log += `| ${filename} | ${title} | ERROR: ${e} |\n`;
                }
            } else {
                log += `| ${filename} | ${title} | (No Change) |\n`;
            }
        }

        return `Renamed ${count} files in ${directory}.\n\n${log}`;
    },
};
