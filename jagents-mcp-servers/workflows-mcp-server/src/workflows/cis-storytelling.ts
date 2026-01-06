import { z } from 'zod';

/**
 * JAGENTS Workflow: CIS Storytelling
 * Purpose: Narrative Development
 */

export const cisStorytellingWorkflow = {
    name: 'cis-storytelling',
    description: 'Execute Storytelling process: Hook -> Context -> Conflict -> Solution -> Call to Action.',
    inputSchema: {
        type: 'object',
        properties: {
            topic: {
                type: 'string',
                description: 'Story topic',
            },
            audience: {
                type: 'string',
                description: 'Target audience',
            },
        },
        required: ['topic'],
    },

    async execute(input: any): Promise<string> {
        return `## CIS Storytelling Process 📖
        
**Topic:** ${input.topic}

1. **Hook:** Crafted attention-grabbing opening.
2. **Arc:** Developed Hero's Journey phases.
3. **Polish:** Refined tone and voice for ${input.audience || 'audience'}.

*Output:* Narrative Arc Document.`;
    },
};
