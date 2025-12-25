#!/usr/bin/env node
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
    CallToolRequestSchema,
    ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import { analystAgent } from './agents/analyst.js';
import { productManagerAgent } from './agents/product-manager.js';
import { architectAgent } from './agents/architect.js';
import { uxDesignerAgent } from './agents/ux-designer.js';
import { scrumMasterAgent } from './agents/scrum-master.js';
import { developerAgent } from './agents/developer.js';
import { testArchitectAgent } from './agents/test-architect.js';
import { securityArchitectAgent } from './agents/security-architect.js';
import { csoAgent } from './agents/cso.js';
import { securityTestAnalystAgent } from './agents/security-test-analyst.js';

// Agent registry - ALL 10 JAGENTS agents (9 core + 1 security testing)
const agents = {
    analyst: analystAgent,
    productManager: productManagerAgent,
    architect: architectAgent,
    uxDesigner: uxDesignerAgent,
    scrumMaster: scrumMasterAgent,
    developer: developerAgent,
    testArchitect: testArchitectAgent,
    securityArchitect: securityArchitectAgent,
    cso: csoAgent,
    securityTestAnalyst: securityTestAnalystAgent,
};

// Create MCP server
const server = new Server(
    {
        name: 'jagents-agents-server',
        version: '1.0.0',
    },
    {
        capabilities: {
            tools: {},
        },
    }
);

// List available tools (agents)
server.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
        tools: Object.values(agents).map(agent => agent.toolDefinition),
    };
});

// Handle tool calls (agent execution)
server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;

    // Find the agent
    const agent = Object.values(agents).find(a => a.toolDefinition.name === name);

    if (!agent) {
        throw new Error(`Unknown agent: ${name}`);
    }

    try {
        // Type guard - args should be an object
        const input = args || {};
        const result = await agent.execute(input as any);
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
        throw new Error(`Agent execution failed: ${errorMessage}`);
    }
});

// Start server
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error('🚀 JAGENTS Agents MCP Server v1.1.0');
    console.error(`📦 Available agents: ${Object.keys(agents).length}`);
    console.error('   └─ 9 core Agile method agents');
    console.error('   └─ 1 specialized security testing agent');
    console.error('');
    console.error('Available tools:');
    Object.values(agents).forEach(agent => {
        console.error(`  ✓ ${agent.toolDefinition.name}`);
    });
    console.error('');
    console.error('Server ready on stdio');
}

main().catch((error) => {
    console.error('Server error:', error);
    process.exit(1);
});
