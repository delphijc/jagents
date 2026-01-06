import { z } from 'zod';

/**
 * JAGENTS Agent: CIS Design Thinking Coach (Maya)
 * Role: Jazz-like Improviser & Empath
 * Domain: User-Centered Design
 */

export interface DesignThinkingInput {
    challenge: string;
    phase?: 'empathize' | 'define' | 'ideate' | 'prototype' | 'test' | 'all';
    userContext?: string;
}

export const designThinkingCoach = {
    toolDefinition: {
        name: 'jagents_cis_design_thinking_coach',
        description: 'Maya: Guides the 5-phase Design Thinking process (Empathize, Define, Ideate, Prototype, Test).',
        inputSchema: {
            type: 'object',
            properties: {
                challenge: {
                    type: 'string',
                    description: 'The design challenge or problem statement',
                },
                phase: {
                    type: 'string',
                    enum: ['empathize', 'define', 'ideate', 'prototype', 'test', 'all'],
                    description: 'Specific phase to focus on. Default: all',
                },
                userContext: {
                    type: 'string',
                    description: 'Information about the target user or persona',
                },
            },
            required: ['challenge'],
        },
    },

    async execute(input: DesignThinkingInput): Promise<string> {
        const phase = input.phase || 'all';

        let prompt = `# Design Thinking Session with Maya 🎷\n\n`;
        prompt += `**Challenge:** ${input.challenge}\n`;
        
        if (input.userContext) {
            prompt += `**User Context:** ${input.userContext}\n\n`;
        } else {
            prompt += `\n`;
        }

        prompt += `## Workflow: ${phase.charAt(0).toUpperCase() + phase.slice(1)}\n\n`;

        if (phase === 'empathize' || phase === 'all') {
            prompt += `### 1. Empathize ❤️\n`;
            prompt += `- Who is the user?\n`;
            prompt += `- What are their needs, motivations, and pain points?\n`;
            prompt += `- **Technique:** Create an Empathy Map (Says, Thinks, Does, Feels).\n\n`;
        }

        if (phase === 'define' || phase === 'all') {
            prompt += `### 2. Define 🎯\n`;
            prompt += `- Reframe the problem based on user needs.\n`;
            prompt += `- **Format:** [User] needs a way to [Action] because [Insight].\n`;
            prompt += `- Create a clear Point of View (POV).\n\n`;
        }

        if (phase === 'ideate' || phase === 'all') {
            prompt += `### 3. Ideate 💡\n`;
            prompt += `- Generate diverse solutions for the defined problem.\n`;
            prompt += `- **Technique:** "How Might We" questions.\n`;
            prompt += `- Suspend judgement and go wide.\n\n`;
        }

        if (phase === 'prototype' || phase === 'all') {
            prompt += `### 4. Prototype 🔨\n`;
            prompt += `- Build a tangible representation of the best idea.\n`;
            prompt += `- Keep it low-fidelity (sketches, paper, wireframes).\n`;
            prompt += `- Focus on testing validity, not perfection.\n\n`;
        }

        if (phase === 'test' || phase === 'all') {
            prompt += `### 5. Test 📝\n`;
            prompt += `- Solicit feedback from users.\n`;
            prompt += `- **Technique:** Feedback Grid (Likes, Criticisms, Questions, Ideas).\n`;
            prompt += `- Iterate based on what you learn.\n\n`;
        }

        prompt += `\n## Output Template\n`;
        prompt += `Structure the output using the template at: \`templates/cis/design_thinking_doc.md\`\n`;

        return prompt;
    },
};
