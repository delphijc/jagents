/**
 * JAGENTS Skill: Brainstorming
 * Purpose: Creative ideation and idea generation
 * Used by: Analyst, Product Manager
 */

export interface BrainstormingInput {
    topic: string;
    method?: 'free-form' | 'structured' | 'brainwriting';
    constraints?: string;
}

export const brainstormingSkill = {
    toolDefinition: {
        name: 'jagents_skill_brainstorming',
        description: 'Creative brainstorming skill for generating ideas. Supports free-form, structured, and brainwriting methods.',
        inputSchema: {
            type: 'object',
            properties: {
                topic: {
                    type: 'string',
                    description: 'Topic or problem to brainstorm',
                },
                method: {
                    type: 'string',
                    enum: ['free-form', 'structured', 'brainwriting'],
                    description: 'Brainstorming method. Default: structured',
                },
                constraints: {
                    type: 'string',
                    description: 'Any constraints or guidelines',
                },
            },
            required: ['topic'],
        },
    },

    async execute(input: BrainstormingInput): Promise<string> {
        const method = input.method || 'structured';

        let output = `# Brainstorming Session\n\n`;
        output += `**Topic:** ${input.topic}\n`;
        output += `**Method:** ${method}\n\n`;

        if (input.constraints) {
            output += `**Constraints:** ${input.constraints}\n\n`;
        }

        output += `## Ideas Generated\n\n`;

        if (method === 'free-form') {
            output += generateFreeFormIdeas(input.topic);
        } else if (method === 'structured') {
            output += generateStructuredIdeas(input.topic);
        } else {
            output += generateBrainwritingIdeas(input.topic);
        }

        return output;
    },
};

function generateFreeFormIdeas(topic: string): string {
    let ideas = `### Free-Form Ideation\n\n`;
    ideas += `💡 **Idea 1:** [Creative approach to ${topic}]\n`;
    ideas += `💡 **Idea 2:** [Alternative perspective on ${topic}]\n`;
    ideas += `💡 **Idea 3:** [Unconventional solution for ${topic}]\n`;
    ideas += `💡 **Idea 4:** [Hybrid approach combining multiple concepts]\n`;
    ideas += `💡 **Idea 5:** [Disruptive innovation idea]\n\n`;
    ideas += `**Wild Ideas:**\n`;
    ideas += `- [Crazy but potentially brilliant idea]\n`;
    ideas += `- [Out-of-the-box thinking]\n`;
    return ideas;
}

function generateStructuredIdeas(topic: string): string {
    let ideas = `### Structured Ideation\n\n`;
    ideas += `**Category 1: Direct Solutions**\n`;
    ideas += `1. [Straightforward approach]\n`;
    ideas += `2. [Standard industry practice]\n\n`;
    ideas += `**Category 2: Innovative Approaches**\n`;
    ideas += `1. [Novel technology application]\n`;
    ideas += `2. [Creative process improvement]\n\n`;
    ideas += `**Category 3: Cost-Effective Options**\n`;
    ideas += `1. [Budget-friendly solution]\n`;
    ideas += `2. [Resource-efficient approach]\n\n`;
    ideas += `**Category 4: Scalable Solutions**\n`;
    ideas += `1. [Growth-oriented design]\n`;
    ideas += `2. [Enterprise-grade architecture]\n`;
    return ideas;
}

function generateBrainwritingIdeas(topic: string): string {
    let ideas = `### Brainwriting (6-3-5 Method)\n\n`;
    ideas += `**Round 1:**\n`;
    ideas += `- Participant 1: [Initial idea for ${topic}]\n`;
    ideas += `- Participant 2: [Different angle]\n`; ideas += `- Participant 3: [Another perspective]\n\n`;
    ideas += `**Round 2 (Building on Round 1):**\n`;
    ideas += `- Enhanced Idea 1: [Refinement]\n`;
    ideas += `- Enhanced Idea 2: [Extension]\n`;
    ideas += `- Enhanced Idea 3: [Combination]\n\n`;
    ideas += `**Round 3 (Synthesis):**\n`;
    ideas += `- Final Concept 1: [Polished version]\n`;
    ideas += `- Final Concept 2: [Alternative direction]\n`;
    ideas += `- Final Concept 3: [Optimal solution]\n`;
    return ideas;
}
