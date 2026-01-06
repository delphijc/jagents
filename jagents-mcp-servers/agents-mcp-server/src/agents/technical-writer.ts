import { z } from 'zod';

/**
 * JAGENTS Agent: Technical Writer (Paige)
 * Role: Documentation Specialist
 * Domain: Clarity, Structure, and Knowledge Transfer
 */

export interface TechnicalWriterInput {
    topic: string;
    type: 'documentation' | 'tutorial' | 'api-reference' | 'blog-post';
    audience?: string;
    sourceMaterial?: string;
}

export const technicalWriterAgent = {
    toolDefinition: {
        name: 'jagents_technical_writer',
        description: 'Paige: Creates clear, structured documentation, tutorials, and technical content.',
        inputSchema: {
            type: 'object',
            properties: {
                topic: {
                    type: 'string',
                    description: 'Topic or subject to document',
                },
                type: {
                    type: 'string',
                    enum: ['documentation', 'tutorial', 'api-reference', 'blog-post'],
                    description: 'Type of content to create',
                },
                audience: {
                    type: 'string',
                    description: 'Target audience (e.g., developers, end-users)',
                },
                sourceMaterial: {
                    type: 'string',
                    description: 'Raw information or code to base the documentation on',
                },
            },
            required: ['topic', 'type'],
        },
    },

    async execute(input: TechnicalWriterInput): Promise<string> {
        let prompt = `# Documentation Request for Paige 📝\n\n`;
        prompt += `**Topic:** ${input.topic}\n`;
        prompt += `**Type:** ${input.type}\n`;
        prompt += `**Audience:** ${input.audience || 'General'}\n\n`;

        if (input.sourceMaterial) {
            prompt += `## Source Material\n\`\`\`\n${input.sourceMaterial}\n\`\`\`\n\n`;
        }

        prompt += `## Structure Guidelines\n`;

        switch (input.type) {
            case 'documentation':
                prompt += `Please create standard documentation including:\n`;
                prompt += `- Overview\n- Prerequisites\n- detailed Steps\n- Troubleshooting\n`;
                break;
            case 'tutorial':
                prompt += `Please create a step-by-step tutorial:\n`;
                prompt += `- Learning Objective\n- Step 1..N with code blocks\n- Summary\n`;
                break;
            case 'api-reference':
                prompt += `Please create API documentation:\n`;
                prompt += `- Endpoint / Method\n- Parameters\n- Response Format\n- Example Request/Response\n`;
                break;
            case 'blog-post':
                prompt += `Please create an engaging technical blog post:\n`;
                prompt += `- Catchy Title\n- Introduction (Hook)\n- Body Paragraphs\n- Conclusion\n`;
                break;
        }

        return prompt;
    },
};
