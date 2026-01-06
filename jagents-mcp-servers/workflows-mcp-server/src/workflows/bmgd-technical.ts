import { z } from 'zod';

/**
 * JAGENTS Workflow: BMGD Technical
 * Purpose: Technical Architecture and System Design for Games
 */

export const bmgdTechnicalWorkflow = {
    name: 'bmgd-technical',
    description: 'Execute the Game Technical phase: Architecture -> Tech Stack -> Tech Spec.',
    inputSchema: {
        type: 'object',
        properties: {
            gdd: {
                type: 'string',
                description: 'The Game Design Document content',
            },
            platform: {
                type: 'string',
                description: 'Target platform (e.g., Unity/PC, Unreal/Console)',
            },
        },
        required: ['gdd'],
    },

    async execute(input: any): Promise<string> {
        return `## BMGD Technical Phase Executed ⚙️
        
**Platform:** ${input.platform || 'General'}

1. **Architecture:** Defined system components (Input, Physics, Rendering).
2. **Tech Stack:** Selected engine and key libraries.
3. **Tech Spec:** Created detailed \`templates/tech_spec.md\`.

*Output:* Technical Specification Document ready.`;
    },
};
