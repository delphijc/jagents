import { z } from 'zod';

/**
 * JAGENTS Workflow: Party Mode
 * Purpose: Multi-agent collaboration session
 */

export const partyModeWorkflow = {
    name: 'party-mode',
    description: 'Activate multiple agents for a collaborative session on a single topic.',
    inputSchema: {
        type: 'object',
        properties: {
            topic: {
                type: 'string',
                description: 'The shared topic for the party',
            },
            invitees: {
                type: 'array',
                items: { type: 'string' },
                description: 'List of agents to invite (e.g., ["analyst", "architect"])',
            },
        },
        required: ['topic', 'invitees'],
    },

    async execute(input: any): Promise<string> {
        return `## Party Mode Activated 🎉
        
**Topic:** ${input.topic}
**Guests:** ${input.invitees.join(', ')}

1. **Round 1:** Analyst breaks down the problem.
2. **Round 2:** ${input.invitees[0] || 'Agent'} proposes solutions.
3. **Round 3:** Group synthesize.

*Session Log:* Collaborative output generated.`;
    },
};
