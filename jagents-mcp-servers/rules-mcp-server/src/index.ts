#!/usr/bin/env node
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
    CallToolRequestSchema,
    ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';

// Import all rules
import { platformPortabilityRule } from './rules/platform-portability.js';
import { modularArchitectureRule } from './rules/modular-architecture.js';
import { mandatoryContextLoadingRule } from './rules/mandatory-context-loading.js';
import { multiOrgIsolationRule } from './rules/multi-org-isolation.js';
import { cloudStorageSyncRule } from './rules/cloud-storage-sync.js';
import { zeroTrustArchitectureRule } from './rules/zero-trust-architecture.js';

// Rule registry - ALL 6 JAGENTS rules
const rules = {
    platformPortability: platformPortabilityRule,
    modularArchitecture: modularArchitectureRule,
    mandatoryContextLoading: mandatoryContextLoadingRule,
    multiOrgIsolation: multiOrgIsolationRule,
    cloudStorageSync: cloudStorageSyncRule,
    zeroTrustArchitecture: zeroTrustArchitectureRule,
};

// Create MCP server
const server = new Server(
    {
        name: 'jagents-rules-server',
        version: '1.0.0',
    },
    {
        capabilities: {
            tools: {},
        },
    }
);

// List available tools (rules)
server.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
        tools: Object.values(rules).map(rule => rule.toolDefinition),
    };
});

// Handle tool calls (rule validation)
server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;

    // Find the rule
    const rule = Object.values(rules).find(r => r.toolDefinition.name === name);

    if (!rule) {
        throw new Error(`Unknown rule: ${name}`);
    }

    try {
        const input = args || {};
        const result = await rule.execute(input as any);
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
        throw new Error(`Rule validation failed: ${errorMessage}`);
    }
});

// Start server
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error('⚖️  JAGENTS Rules MCP Server v1.0.0');
    console.error(`📏 Available rules: ${Object.keys(rules).length}/6`);
    console.error('');
    console.error('Available tools:');
    Object.values(rules).forEach(rule => {
        console.error(`  ✓ ${rule.toolDefinition.name}`);
    });
    console.error('');
    console.error('Server ready on stdio');
}

main().catch((error) => {
    console.error('Server error:', error);
    process.exit(1);
});
