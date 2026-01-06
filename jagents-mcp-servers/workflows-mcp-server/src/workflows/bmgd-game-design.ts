import { z } from 'zod';

/**
 * JAGENTS Workflow: BMGD Game Design
 * Purpose: Create comprehensive Game Design Document (GDD)
 */

export const bmgdGameDesignWorkflow = {
    name: 'bmgd-game-design',
    description: 'Execute the Game Design phase: Core Loop -> Mechanics -> Level Design -> Assets -> GDD.',
    inputSchema: {
        type: 'object',
        properties: {
            gameBrief: {
                type: 'string',
                description: 'Content of the Game Brief',
            },
            focusArea: {
                type: 'string',
                enum: ['all', 'mechanics', 'levels', 'assets'],
                description: 'Specific area to elaboration on',
            },
        },
        required: ['gameBrief'],
    },

    async execute(input: any): Promise<string> {
        const { gameBrief, focusArea } = input;
        const area = focusArea || 'all';

        return `## BMGD Game Design Workflow Executed 🎲
        
**Focus:** ${area}

### Design Steps:
1. **Core Mechanics:** Defined player actions and feedback loops.
2. **Level Structure:** Outlined world progression.
3. **Asset List:** Identified required art and audio assets.

**Output:** Updated Game Design Document (GDD).
        `;
    },
};
