/**
 * JAGENTS Workflow: Extensive Research
 * Purpose: Multi-source deep research process
 * Used by: Architect, Analyst, Product Manager
 * Note: This workflow would orchestrate the Research skill
 */

export interface ExtensiveResearchInput {
    topic: string;
    sources?: string[];
    deliverable?: 'report' | 'presentation' | 'documentation';
}

export const extensiveResearchWorkflow = {
    toolDefinition: {
        name: 'jagents_workflow_extensive_research',
        description: 'Comprehensive multi-phase research workflow. Coordinates research skill across multiple sources and synthesizes findings.',
        inputSchema: {
            type: 'object',
            properties: {
                topic: {
                    type: 'string',
                    description: 'Research topic or question',
                },
                sources: {
                    type: 'array',
                    items: { type: 'string' },
                    description: 'Source types to research (academic, industry, technical, market)',
                },
                deliverable: {
                    type: 'string',
                    enum: ['report', 'presentation', 'documentation'],
                    description: 'Output format. Default: report',
                },
            },
            required: ['topic'],
        },
    },

    async execute(input: ExtensiveResearchInput): Promise<string> {
        const sources = input.sources || ['academic', 'industry', 'technical', 'market'];
        const deliverable = input.deliverable || 'report';

        let output = `# Extensive Research Workflow\n\n`;
        output += `**Topic:** ${input.topic}\n`;
        output += `**Sources:** ${sources.join(', ')}\n`;
        output += `**Deliverable:** ${deliverable}\n\n`;

        // Phase 1: Research Planning
        output += `## Phase 1: Research Planning\n\n`;
        output += `**Objective:** Define research scope and methodology\n\n`;
        output += `**Tasks:**\n`;
        output += `- [ ] Define research questions\n`;
        output += `- [ ] Identify key sources\n`;
        output += `- [ ] Set success criteria\n`;
        output += `- [ ] Allocate time/resources\n\n`;
        output += `**Research Questions:**\n`;
        output += `1. What is ${input.topic}?\n`;
        output += `2. How does it work?\n`;
        output += `3. What are the alternatives?\n`;
        output += `4. What are the pros/cons?\n`;
        output += `5. What are the trends?\n\n`;

        // Phase 2: Data Collection
        output += `## Phase 2: Data Collection\n\n`;
        output += `**Sources to Research:**\n\n`;

        sources.forEach(source => {
            output += `### ${source.charAt(0).toUpperCase() + source.slice(1)} Sources\n`;
            if (source === 'academic') {
                output += `- Google Scholar\n`;
                output += `- IEEE Xplore\n`;
                output += `- ACM Digital Library\n`;
                output += `- arXiv\n\n`;
            } else if (source === 'industry') {
                output += `- Gartner reports\n`;
                output += `- Forrester research\n`;
                output += `- Industry blogs\n`;
                output += `- Case studies\n\n`;
            } else if (source === 'technical') {
                output += `- Technical documentation\n`;
                output += `- API references\n`;
                output += `- GitHub repositories\n`;
                output += `- Stack Overflow\n\n`;
            } else if (source === 'market') {
                output += `- Market analysis reports\n`;
                output += `- Competitor analysis\n`;
                output += `- User reviews\n`;
                output += `- Pricing data\n\n`;
            }
        });

        // Phase 3: Analysis & Synthesis
        output += `## Phase 3: Analysis & Synthesis\n\n`;
        output += `**Analysis Framework:**\n`;
        output += `- Comparative analysis\n`;
        output += `- SWOT analysis\n`;
        output += `- Trend analysis\n`;
        output += `- Cost-benefit analysis\n\n`;

        output += `### Key Findings\n`;
        output += `[To be populated with research results]\n\n`;

        output += `### Insights\n`;
        output += `[Synthesized insights from multiple sources]\n\n`;

        // Phase 4: Report Generation
        output += `## Phase 4: Report Generation\n\n`;

        if (deliverable === 'report') {
            output += `**Research Report Structure:**\n`;
            output += `1. Executive Summary\n`;
            output += `2. Introduction & Methodology\n`;
            output += `3. Findings by Source\n`;
            output += `4. Comparative Analysis\n`;
            output += `5. Recommendations\n`;
            output += `6. References\n\n`;
        } else if (deliverable === 'presentation') {
            output += `**Presentation Outline:**\n`;
            output += `- Slide 1: Topic Overview\n`;
            output += `- Slide 2-3: Key Findings\n`;
            output += `- Slide 4: Comparative Analysis\n`;
            output += `- Slide 5: Recommendations\n`;
            output += `- Slide 6: Next Steps\n\n`;
        } else {
            output += `**Documentation Structure:**\n`;
            output += `- Overview\n`;
            output += `- Technical Details\n`;
            output += `- Implementation Guide\n`;
            output += `- Best Practices\n`;
            output += `- Examples\n\n`;
        }

        // Timeline
        output += `## Timeline\n\n`;
        output += `- **Week 1:** Research planning\n`;
        output += `- **Week 2-3:** Data collection\n`;
        output += `- **Week 4:** Analysis & synthesis\n`;
        output += `- **Week 5:** Report generation & review\n\n`;

        output += `---\n\n`;
        output += `**Note:** This workflow would invoke the \`jagents_skill_research\` skillfor each source type and synthesize the results.\n`;

        return output;
    },
};
