#!/usr/bin/env node
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
    CallToolRequestSchema,
    ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';

// Import all skills
import { brainstormingSkill } from './skills/brainstorming.js';
import { designThinkingSkill } from './skills/design-thinking.js';
import { researchSkill } from './skills/research.js';
import { storyDevelopmentSkill } from './skills/story-development.js';
import { grcManagementSkill } from './skills/grc-management.js';
import { devSecOpsSkill } from './skills/devsecops.js';
import { contentCreationSkill } from './skills/content-creation.js';
import { imageCreationSkill } from './skills/image-creation.js';
import { lifeManagementSkill } from './skills/life-management.js';
import { downloadImagesSkill } from './skills/download-images.js';
import { renameFilesToTitleSkill } from './skills/rename-files-to-title.js';

// Skill registry - ALL 11 JAGENTS skills
const skills = {
    brainstorming: brainstormingSkill,
    designThinking: designThinkingSkill,
    research: researchSkill,
    storyDevelopment: storyDevelopmentSkill,
    grcManagement: grcManagementSkill,
    devSecOps: devSecOpsSkill,
    contentCreation: contentCreationSkill,
    imageCreation: imageCreationSkill,
    lifeManagement: lifeManagementSkill,
    downloadImages: downloadImagesSkill,
    renameFilesToTitle: renameFilesToTitleSkill,
};

// Create MCP server
const server = new Server(
    {
        name: 'jagents-skills-server',
        version: '1.0.0',
    },
    {
        capabilities: {
            tools: {},
        },
    }
);

// List available tools (skills)
server.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
        tools: Object.values(skills).map(skill => skill.toolDefinition),
    };
});

// Handle tool calls (skill execution)
server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;

    // Find the skill
    const skill = Object.values(skills).find(s => s.toolDefinition.name === name);

    if (!skill) {
        throw new Error(`Unknown skill: ${name}`);
    }

    try {
        const input = args || {};
        const result = await skill.execute(input as any);
        return {
            content: [
                {
                    type: 'text',
                    text: result,
                },
            ],
        };
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        throw new Error(`Skill execution failed: ${errorMessage}`);
    }
});

// Start server
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    // Server is ready - silent mode for MCP protocol compliance
}

main().catch((error) => {
    console.error('Server error:', error);
    process.exit(1);
});
