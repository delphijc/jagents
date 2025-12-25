/**
 * JAGENTS Agent: Product Manager
 * Role: Scale-Adaptive Planner / Project Orchestrator
 * Domain: Requirements Definition, Scope Control, and Story Breakdown (Agile method Phase 2)
 */

export interface ProductManagerInput {
    projectBrief: string;
    planningTrack?: 'quick-flow' | 'agile-standard' | 'enterprise';
    scope?: string;
}

export const productManagerAgent = {
    toolDefinition: {
        name: 'jagents_product_manager',
        description: 'Scale-adaptive planner that converts Project Briefs into PRDs/GDDs with user stories. Uses Scale-Adaptive Planning workflow. Outputs: PRD or GDD.',
        inputSchema: {
            type: 'object',
            properties: {
                projectBrief: {
                    type: 'string',
                    description: 'Project Brief from Analyst agent (Phase 1 output)',
                },
                planningTrack: {
                    type: 'string',
                    enum: ['quick-flow', 'agile-standard', 'enterprise'],
                    description: 'Planning depth: quick-flow (< 2 weeks), agile-standard (2-12 weeks), enterprise (12+ weeks). Default: auto-detect',
                },
                scope: {
                    type: 'string',
                    description: 'Specific scope constraints or focus areas',
                },
            },
            required: ['projectBrief'],
        },
    },

    async execute(input: ProductManagerInput): Promise<string> {
        // Determine planning track
        const track = input.planningTrack || detectPlanningTrack(input.projectBrief);

        let output = `# Product Manager - Requirements Definition\n\n`;
        output += `## Input: Project Brief\n${input.projectBrief.substring(0, 500)}...\n\n`;
        output += `## Selected Planning Track: ${track.toUpperCase()}\n\n`;

        if (input.scope) {
            output += `## Scope Constraints\n${input.scope}\n\n`;
        }

        output += `## Scale-Adaptive Intelligence\n`;
        output += `Based on project complexity analysis, selected **${track}** track:\n\n`;
        output += getTrackDescription(track);

        output += `\n\n## Product Requirements Document (PRD)\n\n`;
        output += generatePRD(input.projectBrief, track);

        return output;
    },
};

function detectPlanningTrack(projectBrief: string): string {
    // Simple heuristic - in production, use more sophisticated analysis
    const wordCount = projectBrief.split(/\s+/).length;
    const hasComplexTerms = /enterprise|compliance|security|multi|integration/i.test(projectBrief);

    if (hasComplexTerms || wordCount > 1000) {
        return 'enterprise';
    } else if (wordCount > 300) {
        return 'agile-standard';
    } else {
        return 'quick-flow';
    }
}

function getTrackDescription(track: string): string {
    const descriptions: Record<string, string> = {
        'quick-flow': `
**Quick Flow** (Simple, well-understood projects)
- Duration: Days to 1-2 weeks
- Documentation: Minimal
- Ideal for: MVPs, prototypes, simple features`,

        'agile-standard': `
**Agile method** (Standard projects with moderate complexity)
- Duration: 2-12 weeks
- Documentation: Full (PRD, Architecture, Stories)
- Ideal for: New applications, major features, refactoring`,

        'enterprise': `
**Enterprise Track** (Large, complex, multi-team projects)
- Duration: 12+ weeks
- Documentation: Comprehensive + governance
- Ideal for: Enterprise systems, compliance-heavy, high-risk projects`,
    };

    return descriptions[track] || descriptions['agile-standard'];
}

function generatePRD(projectBrief: string, track: string): string {
    const timestamp = new Date().toISOString().split('T')[0];

    let prd = `**Document Type:** Product Requirements Document (PRD)\n`;
    prd += `**Planning Track:** ${track}\n`;
    prd += `**Generated:** ${timestamp}\n`;
    prd += `**Phase:** Agile method Phase 2\n\n`;

    prd += `### 1. Executive Summary\n`;
    prd += `[Synthesize project purpose and goals from Project Brief]\n\n`;

    prd += `### 2. Goals and Objectives\n`;
    prd += `**Primary Goal:** [Main objective]\n\n`;
    prd += `**Success Metrics:**\n`;
    prd += `- [Metric 1]\n`;
    prd += `- [Metric 2]\n`;
    prd += `- [Metric 3]\n\n`;

    prd += `### 3. User Stories (Epics)\n\n`;
    prd += `#### Epic 1: [Category]\n`;
    prd += `**As a** [user type], **I want** [goal], **so that** [benefit].\n\n`;
    prd += `**Acceptance Criteria:**\n`;
    prd += `- [ ] [Criteria 1]\n`;
    prd += `- [ ] [Criteria 2]\n\n`;

    if (track !== 'quick-flow') {
        prd += `### 4. Functional Requirements\n`;
        prd += `1. [Requirement 1]\n`;
        prd += `2. [Requirement 2]\n`;
        prd += `3. [Requirement 3]\n\n`;

        prd += `### 5. Non-Functional Requirements\n`;
        prd += `- **Performance:** [Specifications]\n`;
        prd += `- **Security:** [Requirements]\n`;
        prd += `- **Scalability:** [Targets]\n\n`;
    }

    if (track === 'enterprise') {
        prd += `### 6. Compliance Requirements\n`;
        prd += `- [Framework 1: e.g., HIPAA, PCI DSS]\n`;
        prd += `- [Framework 2]\n\n`;

        prd += `### 7. Risk Assessment\n`;
        prd += `| Risk | Impact | Mitigation |\n`;
        prd += `|------|--------|------------|\n`;
        prd += `| [Risk 1] | High | [Strategy] |\n\n`;
    }

    prd += `### ${track === 'enterprise' ? '8' : track === 'quick-flow' ? '4' : '6'}. Next Steps\n`;
    prd += `1. **Architect:** Create technical architecture\n`;
    prd += `2. **UX Designer:** Design user experience (if applicable)\n`;
    prd += `3. **Scrum Master:** Break down into Developer Stories\n\n`;

    prd += `---\n`;
    prd += `*This PRD serves as input to the Architect (Agile method Phase 3)*\n`;

    return prd;
}
