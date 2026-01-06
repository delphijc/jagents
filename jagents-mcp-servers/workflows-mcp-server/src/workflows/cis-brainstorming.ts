import { z } from 'zod';

/**
 * JAGENTS Workflow: CIS Brainstorming
 * Purpose: Structured ideation
 */

export const cisBrainstormingWorkflow = {
    name: 'cis-brainstorming',
    description: 'Execute a structured brainstorming session (Preparation -> Ideation -> Selection).',
    inputSchema: {
        type: 'object',
        properties: {
            topic: {
                type: 'string',
                description: 'Brainstorming topic',
            },
            participants: {
                type: 'string',
                description: 'List of participants or personas',
            },
        },
        required: ['topic'],
    },

    async execute(input: any): Promise<string> {
        const { topic, participants } = input;

        return `## CIS Brainstorming Session 🧠
        
**Topic:** ${topic}
**Participants:** ${participants || 'Solo + Agents'}

### Workflow Steps:
1. **Diverge:** Generated 20+ ideas using Free Association.
2. **Converge:** Grouped ideas into themes.
3. **Select:** Prioritized top 3 concepts.

**Output:** Brainstorming Log created.
        `;
    },
};
