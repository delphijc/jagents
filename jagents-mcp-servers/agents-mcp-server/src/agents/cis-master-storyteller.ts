import { z } from 'zod';

/**
 * JAGENTS Agent: CIS Master Storyteller (Sophia)
 * Role: Whimsical Narrator
 * Domain: Narrative & Communication
 */

export interface StorytellerInput {
    topic: string;
    format?: 'heros-journey' | 'pitch-deck' | 'user-scenario';
    audience?: string;
}

export const masterStoryteller = {
    toolDefinition: {
        name: 'jagents_cis_master_storyteller',
        description: 'Sophia: Crafts compelling narratives using frameworks like the Hero\'s Journey to communicate vision and user experiences.',
        inputSchema: {
            type: 'object',
            properties: {
                topic: {
                    type: 'string',
                    description: 'The subject, product, or vision to tell a story about',
                },
                format: {
                    type: 'string',
                    enum: ['heros-journey', 'pitch-deck', 'user-scenario'],
                    description: 'Narrative format to use. Default: heros-journey',
                },
                audience: {
                    type: 'string',
                    description: 'Who is this story for?',
                },
            },
            required: ['topic'],
        },
    },

    async execute(input: StorytellerInput): Promise<string> {
        const format = input.format || 'heros-journey';

        let prompt = `# Storytelling with Sophia 🎭\n\n`;
        prompt += `**Topic:** ${input.topic}\n`;
        
        if (input.audience) {
            prompt += `**Audience:** ${input.audience}\n\n`;
        } else {
            prompt += `\n`;
        }

        prompt += `## Narrative Framework: ${format}\n\n`;

        switch (format) {
            case 'heros-journey':
                prompt += `### The Hero's Journey (Monomyth)\n`;
                prompt += `1. **Ordinary World:** The user's status quo before our solution.\n`;
                prompt += `2. **Call to Adventure:** The trigger or problem that initiates change.\n`;
                prompt += `3. **Refusal of the Call:** Doubts, fears, or inertia.\n`;
                prompt += `4. **Meeting the Mentor:** Meeting our product/solution.\n`;
                prompt += `5. **Crossing the Threshold:** Committing to use the solution.\n`;
                prompt += `6. **Tests, Allies, Enemies:** The onboarding and initial usage experience.\n`;
                prompt += `7. **The Ordeal:** Solving the major pain point.\n`;
                prompt += `8. **The Reward:** The value gained.\n`;
                prompt += `9. **The Road Back:** Integrating the solution into daily life.\n`;
                prompt += `10. **Resurrection:** The user is transformed (more productive, happier).\n`;
                prompt += `11. **Return with Elixir:** Sharing the success with others.\n\n`;
                break;
            case 'pitch-deck':
                prompt += `### Strategic Pitch Narrative\n`;
                prompt += `1. **The Hook:** Grab attention immediately.\n`;
                prompt += `2. **The Problem:** Define the pain clearly.\n`;
                prompt += `3. **The Solution:** Introduce the concept.\n`;
                prompt += `4. **The Market:** Prove the opportunity size.\n`;
                prompt += `5. **The Product:** Show how it works (Magic).\n`;
                prompt += `6. **The Business:** How it makes money.\n`;
                prompt += `7. **The Team:** Why us?\n`;
                prompt += `8. **The Ask:** What do we need?\n\n`;
                break;
            case 'user-scenario':
                prompt += `### User Scenario / Day in the Life\n`;
                prompt += `Write a narrative description of a user interacting with this topic.\n`;
                prompt += `- Focus on sensory details and emotions.\n`;
                prompt += `- Describe the context of use.\n`;
                prompt += `- Highlight the "Before" vs. "After" contrast.\n\n`;
                break;
        }

        prompt += `\n## Output Template\n`;
        prompt += `Structure the output using the template at: \`templates/cis/narrative_arc.md\`\n`;

        return prompt;
    },
};
