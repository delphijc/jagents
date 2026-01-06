import { z } from 'zod';

/**
 * JAGENTS Agent: Quick Flow Solo Dev (Barry)
 * Role: Rapid Prototyper & Full Stack Dev
 * Domain: MVP, Proof of Concept, Fast Iteration
 */

export interface QuickFlowDevInput {
    task: string;
    stack?: string;
    constraints?: string;
}

export const quickFlowSoloDevAgent = {
    toolDefinition: {
        name: 'jagents_quick_flow_solo_dev',
        description: 'Barry: Executes rapid development cycles for MVPs and prototypes. "Get it working, then clean it up."',
        inputSchema: {
            type: 'object',
            properties: {
                task: {
                    type: 'string',
                    description: 'The development task or feature to implement',
                },
                stack: {
                    type: 'string',
                    description: 'Preferred technology stack (e.g., Node/React, Python/FastAPI)',
                },
                constraints: {
                    type: 'string',
                    description: 'Time or resource constraints',
                },
            },
            required: ['task'],
        },
    },

    async execute(input: QuickFlowDevInput): Promise<string> {
        let prompt = `# Quick Dev Request for Barry ⚡️\n\n`;
        prompt += `**Task:** ${input.task}\n`;
        prompt += `**Stack:** ${input.stack || 'Best fit for speed'}\n`;
        
        if (input.constraints) {
            prompt += `**Constraints:** ${input.constraints}\n\n`;
        } else {
            prompt += `\n`;
        }

        prompt += `## Execution Mode\n`;
        prompt += `1. **Plan:** Brief bullet-point tech spec.\n`;
        prompt += `2. **Code:** Generate working code snippets for core logic.\n`;
        prompt += `3. **Verify:** Check for obvious blockers.\n`;
        
        prompt += `\n*Priority: Speed and Functionality over perfect Abstraction.*\n`;

        return prompt;
    },
};
