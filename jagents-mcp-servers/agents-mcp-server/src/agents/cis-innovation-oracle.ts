import { z } from 'zod';

/**
 * JAGENTS Agent: CIS Innovation Oracle (Victor)
 * Role: Bold Strategic Precision
 * Domain: Business Strategy & Innovation
 */

export interface InnovationInput {
    concept: string;
    framework?: 'blue-ocean' | 'business-model-canvas' | 'future-back';
    marketContext?: string;
}

export const innovationOracle = {
    toolDefinition: {
        name: 'jagents_cis_innovation_oracle',
        description: 'Victor: Applies strategic frameworks like Blue Ocean Strategy and Business Model Canvas to drive disruption.',
        inputSchema: {
            type: 'object',
            properties: {
                concept: {
                    type: 'string',
                    description: 'Business concept, product idea, or market to analyze',
                },
                framework: {
                    type: 'string',
                    enum: ['blue-ocean', 'business-model-canvas', 'future-back'],
                    description: 'Strategic framework to use. Default: blue-ocean',
                },
                marketContext: {
                    type: 'string',
                    description: 'Information about competitors or current market state',
                },
            },
            required: ['concept'],
        },
    },

    async execute(input: InnovationInput): Promise<string> {
        const framework = input.framework || 'blue-ocean';

        let prompt = `# Innovation Strategy with Victor 🏹\n\n`;
        prompt += `**Concept:** ${input.concept}\n`;
        
        if (input.marketContext) {
            prompt += `**Market Context:** ${input.marketContext}\n\n`;
        } else {
            prompt += `\n`;
        }

        prompt += `## Framework: ${framework}\n\n`;

        switch (framework) {
            case 'blue-ocean':
                prompt += `### Blue Ocean Shift (ERC Grid)\n`;
                prompt += `To create a new value curve, we must ask:\n`;
                prompt += `1. **Eliminate:** Which factors that the industry takes for granted should be eliminated?\n`;
                prompt += `2. **Reduce:** Which factors should be reduced well below the industry's standard?\n`;
                prompt += `3. **Raise:** Which factors should be raised well above the industry's standard?\n`;
                prompt += `4. **Create:** Which factors should be created that the industry has never offered?\n\n`;
                break;
            case 'business-model-canvas':
                prompt += `### Business Model Canvas\n`;
                prompt += `Let's map out the structural logic:\n`;
                prompt += `- **Value Proposition:** What value do we deliver?\n`;
                prompt += `- **Customer Segments:** Who are we creating value for?\n`;
                prompt += `- **Channels:** How do we reach them?\n`;
                prompt += `- **Customer Relationships:** How do we keep them?\n`;
                prompt += `- **Revenue Streams:** How do we make money?\n`;
                prompt += `- **Key Resources:** What helps us create value?\n`;
                prompt += `- **Key Activities:** What do we need to do?\n`;
                prompt += `- **Key Partnerships:** Who helps us?\n`;
                prompt += `- **Cost Structure:** What are the major costs?\n\n`;
                break;
            case 'future-back':
                prompt += `### Future-Back Thinking\n`;
                prompt += `Instead of planning forward, let's jump 5-10 years ahead.\n`;
                prompt += `1. **The Future:** Describe the ideal state in 10 years. What is true then?\n`;
                prompt += `2. **The Gap:** Where are we now versus that future?\n`;
                prompt += `3. **The Roadmap:** Working backward, what milestones must happen to reach that future?\n\n`;
                break;
        }

        prompt += `\n## Output Template\n`;
        prompt += `Structure the output using the template at: \`templates/cis/innovation_strategy.md\`\n`;

        return prompt;
    },
};
