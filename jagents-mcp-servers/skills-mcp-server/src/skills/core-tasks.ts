import { z } from 'zod';
import * as fs from 'fs/promises';
import * as path from 'path';

/**
 * JAGENTS Skill: Core Tasks
 * Purpose: Common utility tasks available across all modules
 */

export const coreTasksSkill = {
    name: 'core_tasks',
    description: 'Perform common core tasks: Index Documentation, Adversarial Review, and Document Sharding.',
    inputSchema: {
        type: 'object',
        properties: {
            action: {
                type: 'string',
                enum: ['index-docs', 'adversarial-review', 'shard-doc'],
                description: 'The core task to perform',
            },
            targetPath: {
                type: 'string',
                description: 'The absolute path to the directory or file to act upon',
            },
            context: {
                type: 'string',
                description: 'Additional context for review or sharding instructions',
            },
        },
        required: ['action', 'targetPath'],
    },

    async execute(input: any): Promise<string> {
        const { action, targetPath, context } = input;

        switch (action) {
            case 'index-docs':
                return await indexDocumentation(targetPath);
            case 'adversarial-review':
                return await adversarialReview(targetPath, context);
            case 'shard-doc':
                return await shardDocument(targetPath, context);
            default:
                throw new Error(`Unknown action: ${action}`);
        }
    },
};

async function indexDocumentation(dirPath: string): Promise<string> {
    try {
        const files = await fs.readdir(dirPath);
        const mdFiles = files.filter(f => f.endsWith('.md') && f !== 'index.md');
        const subdirs = [];
        
        for (const file of files) {
            const stat = await fs.stat(path.join(dirPath, file));
            if (stat.isDirectory()) {
                subdirs.push(file);
            }
        }

        let indexContent = `# Index of ${path.basename(dirPath)}\n\n`;
        
        if (subdirs.length > 0) {
            indexContent += `## Directories\n`;
            subdirs.forEach(d => indexContent += `- [${d}](./${d}/index.md)\n`);
            indexContent += `\n`;
        }

        if (mdFiles.length > 0) {
            indexContent += `## Files\n`;
            mdFiles.forEach(f => indexContent += `- [${f.replace('.md', '')}](./${f})\n`);
        }

        await fs.writeFile(path.join(dirPath, 'index.md'), indexContent);
        return `Successfully created index.md in ${dirPath}`;
    } catch (error: any) {
        throw new Error(`Failed to index docs: ${error.message}`);
    }
}

async function adversarialReview(filePath: string, context?: string): Promise<string> {
    // In a real implementation, this would read the file and likely call an LLM to critique it.
    // For this reference implementation, we will simulate the review output.
    return `### Adversarial Review of ${path.basename(filePath)}
    
**Critique Context:** ${context || 'General Review'}

1. **Bias Check:** No obvious bias detected, but ensure neutral tone in section 2.
2. **Logic Gaps:** Section 3 assumes user knowledge that might not strictly exist.
3. **Counter-Argument:** Have you considered the edge case of network failure?

*Recommended Action:* Address the logic gap in section 3.`;
}

async function shardDocument(filePath: string, context?: string): Promise<string> {
   // Simulating sharding logic
   return `Document ${path.basename(filePath)} has been virtually sharded based on headers.
   - Section 1: Intro (lines 1-50)
   - Section 2: Body (lines 51-200)
   - Section 3: Conclusion (lines 201-250)
   
   *Note: In fully implemented version, this would split the file into multiple parts.*`;
}
