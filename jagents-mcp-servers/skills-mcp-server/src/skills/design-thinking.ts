/**
 * JAGENTS Skill: Design Thinking
 * Purpose: User-centered design process
 * Used by: UX Designer, Product Manager
 */

export interface DesignThinkingInput {
    problem: string;
    userPersona?: string;
    phase?: 'empathize' | 'define' | 'ideate' | 'prototype' | 'test' | 'all';
}

export const designThinkingSkill = {
    toolDefinition: {
        name: 'jagents_skill_design_thinking',
        description: 'Applies Design Thinking methodology for user-centered problem solving. Covers all 5 phases: Empathize, Define, Ideate, Prototype, Test.',
        inputSchema: {
            type: 'object',
            properties: {
                problem: {
                    type: 'string',
                    description: 'Problem statement or design challenge',
                },
                userPersona: {
                    type: 'string',
                    description: 'Target user or persona description',
                },
                phase: {
                    type: 'string',
                    enum: ['empathize', 'define', 'ideate', 'prototype', 'test', 'all'],
                    description: 'Specific phase to execute. Default: all',
                },
            },
            required: ['problem'],
        },
    },

    async execute(input: DesignThinkingInput): Promise<string> {
        const phase = input.phase || 'all';
        const persona = input.userPersona || 'end user';

        let output = `# Design Thinking Process\n\n`;
        output += `**Problem:** ${input.problem}\n`;
        output += `**User Persona:** ${persona}\n`;
        output += `**Phase:** ${phase}\n\n`;

        if (phase === 'all' || phase === 'empathize') {
            output += `## 1️⃣ Empathize\n\n`;
            output += `**Goal:** Understand the user's needs, experiences, and motivations\n\n`;
            output += `**User Research:**\n`;
            output += `- Pain points: [What frustrates users?]\n`;
            output += `- Goals: [What do users want to achieve?]\n`;
            output += `- Context: [Where/when/how do users interact?]\n`;
            output += `- Emotions: [How do users feel?]\n\n`;
            output += `**Empathy Map:**\n`;
            output += `- Says: [User quotes]\n`;
            output += `- Thinks: [User thoughts]\n`;
            output += `- Does: [User actions]\n`;
            output += `- Feels: [User emotions]\n\n`;
        }

        if (phase === 'all' || phase === 'define') {
            output += `## 2️⃣ Define\n\n`;
            output += `**Goal:** Clearly articulate the problem to solve\n\n`;
            output += `**Problem Statement:**\n`;
            output += `[User persona] needs [need] because [insight]\n\n`;
            output += `**Point of View (POV):**\n`;
            output += `We met [persona]. We were amazed to realize [insight]. It would be game-changing if [solution direction].\n\n`;
        }

        if (phase === 'all' || phase === 'ideate') {
            output += `## 3️⃣ Ideate\n\n`;
            output += `**Goal:** Generate a wide range of creative solutions\n\n`;
            output += `**Ideas:**\n`;
            output += `1. [Conventional solution]\n`;
            output += `2. [Innovative approach]\n`;
            output += `3. [Technology-driven idea]\n`;
            output += `4. [Low-cost alternative]\n`;
            output += `5. [Disruptive concept]\n\n`;
        }

        if (phase === 'all' || phase === 'prototype') {
            output += `## 4️⃣ Prototype\n\n`;
            output += `**Goal:** Build quick, low-fidelity versions to explore ideas\n\n`;
            output += `**Prototype Types:**\n`;
            output += `- Paper sketches\n`;
            output += `- Wireframes\n`;
            output += `- Clickable mockups\n`;
            output += `- Minimum Viable Product (MVP)\n\n`;
            output += `**Key Features to Test:**\n`;
            output += `- Core functionality\n`;
            output += `- User flow\n`;
            output += `- Visual design\n\n`;
        }

        if (phase === 'all' || phase === 'test') {
            output += `## 5️⃣ Test\n\n`;
            output += `**Goal:** Gather feedback and refine the solution\n\n`;
            output += `**Testing Methods:**\n`;
            output += `- Usability testing\n`;
            output += `- A/B testing\n`;
            output += `- User interviews\n`;
            output += `- Analytics review\n\n`;
            output += `**Learnings:**\n`;
            output += `- What worked well: [Successes]\n`;
            output += `- What needs improvement: [Issues]\n`;
            output += `- Unexpected insights: [Surprises]\n\n`;
        }

        return output;
    },
};
