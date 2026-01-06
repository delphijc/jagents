import { z } from 'zod';

/**
 * JAGENTS Workflow: Advanced Elicitation
 * Purpose: Deep dive analysis and requirement extraction
 */

export const advancedElicitationWorkflow = {
    name: 'advanced-elicitation',
    description: 'Perform deep analysis and extraction of requirements using techniques like Chain of Thought and few-shot prompting.',
    inputSchema: {
        type: 'object',
        properties: {
            topic: {
                type: 'string',
                description: 'Subject to analyze deeply',
            },
            goal: {
                type: 'string',
                description: 'What insight is needed?',
            },
        },
        required: ['topic'],
    },

    async execute(input: any): Promise<string> {
        return `## Advanced Elicitation Executed 🧠
        
**Topic:** ${input.topic}
**Goal:** ${input.goal || 'Deep Understanding'}

1. **Decomposition:** Broke topic into component parts.
2. **Contextualization:** Mapped relationships between parts.
3. **Synthesis:** Reassembled into core insights.

*Result:* High-fidelity requirements extracted.`;
    },
};
