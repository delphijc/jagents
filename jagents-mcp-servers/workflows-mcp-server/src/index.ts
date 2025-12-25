#!/usr/bin/env node
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
    CallToolRequestSchema,
    ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';

// Import all workflows
import { sixThinkingHatsWorkflow } from './workflows/six-thinking-hats.js';
import { fiveWsWorkflow } from './workflows/five-ws.js';
import { scaleAdaptivePlanningWorkflow } from './workflows/scale-adaptive-planning.js';
import { extensiveResearchWorkflow } from './workflows/extensive-research.js';
import { enterpriseSecurityAssessmentWorkflow } from './workflows/enterprise-security-assessment.js';

// Workflow registry - ALL 5 JAGENTS workflows
const workflows = {
    sixThinkingHats: sixThinkingHatsWorkflow,
    fiveWs: fiveWsWorkflow,
    scaleAdaptivePlanning: scaleAdaptivePlanningWorkflow,
    extensiveResearch: extensiveResearchWorkflow,
    enterpriseSecurityAssessment: enterpriseSecurityAssessmentWorkflow,
};

// Create MCP server
const server = new Server(
    {
        name: 'jagents-workflows-server',
        version: '1.0.0',
    },
    {
        capabilities: {
            tools: {},
        },
    }
);

// List available tools (workflows)
server.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
        tools: Object.values(workflows).map(workflow => workflow.toolDefinition),
    };
});

// Handle tool calls (workflow execution)
server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;

    // Find the workflow
    const workflow = Object.values(workflows).find(w => w.toolDefinition.name === name);

    if (!workflow) {
        throw new Error(`Unknown workflow: ${name}`);
    }

    try {
        const input = args || {};
        const result = await workflow.execute(input as any);
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
        throw new Error(`Workflow execution failed: ${errorMessage}`);
    }
});

// Start server
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    // Server is ready -  silent mode for MCP protocol compliance
}

main().catch((error) => {
    console.error('Server error:', error);
    process.exit(1);
});
