/**
 * JAGENTS Skill: Research
 * Purpose: Deep information gathering and analysis
 * Used by: Architect, Product Manager, Analyst
 */

export interface ResearchInput {
    topic: string;
    depth?: 'quick' | 'standard' | 'extensive';
    sources?: string[];
}

export const researchSkill = {
    toolDefinition: {
        name: 'jagents_skill_research',
        description: 'Deep research skill for gathering and analyzing information. Supports quick, standard, and extensive depth levels.',
        inputSchema: {
            type: 'object',
            properties: {
                topic: {
                    type: 'string',
                    description: 'Research topic or question',
                },
                depth: {
                    type: 'string',
                    enum: ['quick', 'standard', 'extensive'],
                    description: 'Research depth. Default: standard',
                },
                sources: {
                    type: 'array',
                    items: { type: 'string' },
                    description: 'Preferred source types (academic, industry, blogs, etc.)',
                },
            },
            required: ['topic'],
        },
    },

    async execute(input: ResearchInput): Promise<string> {
        const depth = input.depth || 'standard';
        const sources = input.sources || ['academic', 'industry', 'technical'];

        let output = `# Research Report\n\n`;
        output += `**Topic:** ${input.topic}\n`;
        output += `**Depth:** ${depth}\n`;
        output += `**Sources:** ${sources.join(', ')}\n\n`;

        output += `## Executive Summary\n\n`;
        output += `[Concise overview of findings on ${input.topic}]\n\n`;

        if (depth === 'quick') {
            output += generateQuickResearch(input.topic);
        } else if (depth === 'standard') {
            output += generateStandardResearch(input.topic, sources);
        } else {
            output += generateExtensiveResearch(input.topic, sources);
        }

        return output;
    },
};

function generateQuickResearch(topic: string): string {
    let research = `## Quick Research Findings\n\n`;
    research += `### Key Points\n`;
    research += `1. **Main Concept:** [Primary definition/explanation]\n`;
    research += `2. **Current State:** [Industry status]\n`;
    research += `3. **Common Use Cases:** [Where it's applied]\n\n`;
    research += `### Quick Recommendations\n`;
    research += `- [Action item 1]\n`;
    research += `- [Action item 2]\n`;
    return research;
}

function generateStandardResearch(topic: string, sources: string[]): string {
    let research = `## Standard Research Analysis\n\n`;
    research += `### Background\n`;
    research += `[Historical context and evolution of ${topic}]\n\n`;
    research += `### Current Landscape\n`;
    research += `**Market Leaders:**\n`;
    research += `- Company/Technology 1\n`;
    research += `- Company/Technology 2\n`;
    research += `- Company/Technology 3\n\n`;
    research += `### Technical Details\n`;
    research += `**Architecture/Approach:**\n`;
    research += `[Technical implementation details]\n\n`;
    research += `**Strengths:**\n`;
    research += `- Advantage 1\n`;
    research += `- Advantage 2\n\n`;
    research += `**Limitations:**\n`;
    research += `- Challenge 1\n`;
    research += `- Challenge 2\n\n`;
    research += `### Use Cases\n`;
    research += `1. **Industry A:** [Application]\n`;
    research += `2. **Industry B:** [Application]\n`;
    research += `3. **Industry C:** [Application]\n\n`;
    research += `### Recommendations\n`;
    research += `Based on research, consider:\n`;
    research += `- [Strategic recommendation]\n`;
    research += `- [Tactical recommendation]\n`;
    return research;
}

function generateExtensiveResearch(topic: string, sources: string[]): string {
    let research = generateStandardResearch(topic, sources);
    research += `\n### Deep Dive Analysis\n\n`;
    research += `**Comparative Analysis:**\n`;
    research += `| Solution | Pros | Cons | Best For |\n`;
    research += `|----------|------|------|----------|\n`;
    research += `| Option A | [++] | [--] | [Use case] |\n`;
    research += `| Option B | [++] | [--] | [Use case] |\n`;
    research += `| Option C | [++] | [--] | [Use case] |\n\n`;
    research += `**Future Trends:**\n`;
    research += `- Emerging technology 1\n`;
    research += `- Industry shift 2\n`;
    research += `- Innovation area 3\n\n`;
    research += `**Cost-Benefit Analysis:**\n`;
    research += `- Implementation cost: [Estimate]\n`;
    research += `- Maintenance cost: [Estimate]\n`;
    research += `- Expected ROI: [Projection]\n\n`;
    research += `**Risk Assessment:**\n`;
    research += `- Technical risks: [Analysis]\n`;
    research += `- Business risks: [Analysis]\n`;
    research += `- Mitigation strategies: [Recommendations]\n\n`;
    research += `### References\n`;
    research += `1. [Academic source]\n`;
    research += `2. [Industry report]\n`;
    research += `3. [Technical documentation]\n`;
    return research;
}
