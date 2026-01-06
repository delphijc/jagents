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
// New Core/CIS Skills
import { coreTasksSkill } from './skills/core-tasks.js';
import { innovationStrategySkill } from './skills/cis-innovation-strategy.js';
import { problemSolvingSkill } from './skills/cis-problem-solving.js';

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
    // New Core/CIS Skills
    coreTasks: coreTasksSkill,
    cisInnovationStrategy: innovationStrategySkill,
    cisProblemSolving: problemSolvingSkill,
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
        tools: Object.values(skills).map(skill => (skill as any).action ? (skill as any) : {
            name: (skill as any).name || (skill as any).toolDefinition?.name,
            description: (skill as any).description || (skill as any).toolDefinition?.description,
            inputSchema: (skill as any).inputSchema || (skill as any).toolDefinition?.inputSchema
        }),
    };
});

// Handle tool calls (skill execution)
server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;

    // Find the skill
    const skill = Object.values(skills).find(s => {
        const skillName = (s as any).name || (s as any).toolDefinition?.name;
        return skillName === name;
    });

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
