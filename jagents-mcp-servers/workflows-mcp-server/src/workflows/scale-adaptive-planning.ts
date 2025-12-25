/**
 * JAGENTS Workflow: Scale-Adaptive Planning
 * Purpose: Complexity-based planning track selection
 * Used by: Product Manager
 */

export interface ScaleAdaptivePlanningInput {
    projectGoal: string;
    estimatedDuration?: string;
    teamSize?: number;
    complexity?: 'low' | 'medium' | 'high';
}

export const scaleAdaptivePlanningWorkflow = {
    toolDefinition: {
        name: 'jagents_workflow_scale_adaptive_planning',
        description: 'Automatically selects the appropriate planning track (Quick Flow, Agile Standard, or Enterprise) based on project complexity, duration, and team size.',
        inputSchema: {
            type: 'object',
            properties: {
                projectGoal: {
                    type: 'string',
                    description: 'High-level project goal or objective',
                },
                estimatedDuration: {
                    type: 'string',
                    description: 'Estimated duration (e.g., "1 week", "3 months", "1 year")',
                },
                teamSize: {
                    type: 'number',
                    description: 'Number of team members',
                },
                complexity: {
                    type: 'string',
                    enum: ['low', 'medium', 'high'],
                    description: 'Perceived complexity level',
                },
            },
            required: ['projectGoal'],
        },
    },

    async execute(input: ScaleAdaptivePlanningInput): Promise<string> {
        // Calculate complexity score
        const score = calculateComplexityScore(input);
        const track = selectPlanningTrack(score);

        let output = `# Scale-Adaptive Planning Analysis\n\n`;
        output += `**Project Goal:** ${input.projectGoal}\n`;
        if (input.estimatedDuration) {
            output += `**Estimated Duration:** ${input.estimatedDuration}\n`;
        }
        if (input.teamSize) {
            output += `**Team Size:** ${input.teamSize} members\n`;
        }
        output += `\n`;

        output += `## Complexity Assessment\n\n`;
        output += `**Complexity Score:** ${score}/100\n\n`;
        output += `**Factors Analyzed:**\n`;
        output += `- Duration: ${input.estimatedDuration || 'Not specified'}\n`;
        output += `- Team size: ${input.teamSize || 'Solo/Small'}\n`;
        output += `- Stated complexity: ${input.complexity || 'Medium'}\n\n`;

        output += `## 🎯 Recommended Track: ${track.toUpperCase()}\n\n`;

        if (track === 'quick-flow') {
            output += generateQuickFlowGuidance();
        } else if (track === 'agile-standard') {
            output += generateAgileStandardGuidance();
        } else {
            output += generateEnterpriseGuidance();
        }

        output += `\n## Planning Workflow\n\n`;
        output += generatePlanningWorkflow(track);

        return output;
    },
};

function calculateComplexityScore(input: ScaleAdaptivePlanningInput): number {
    let score = 0;

    // Duration scoring
    if (input.estimatedDuration) {
        const duration = input.estimatedDuration.toLowerCase();
        if (duration.includes('day') || duration.includes('week')) {
            score += 10;
        } else if (duration.includes('month')) {
            const months = parseInt(duration) || 3;
            score += Math.min(months * 5, 40);
        } else if (duration.includes('year')) {
            score += 60;
        }
    } else {
        score += 30; // Default medium
    }

    // Team size scoring
    if (input.teamSize) {
        if (input.teamSize <= 3) score += 10;
        else if (input.teamSize <= 10) score += 25;
        else score += 40;
    } else {
        score += 15;
    }

    // Complexity scoring
    if (input.complexity === 'low') score += 10;
    else if (input.complexity === 'medium') score += 25;
    else if (input.complexity === 'high') score += 40;
    else score += 20;

    return Math.min(score, 100);
}

function selectPlanningTrack(score: number): string {
    if (score < 35) return 'quick-flow';
    if (score < 70) return 'agile-standard';
    return 'enterprise';
}

function generateQuickFlowGuidance(): string {
    return `### Quick Flow (< 2 weeks)

**Characteristics:**
- Simple, well-defined scope
- Small team (1-3 people)
- Minimal dependencies
- Clear requirements

**Documentation:**
- ⚡ Quick PRD (1-2 pages)
- ⚡ Basic architecture sketch
- ⚡ Simple user stories

**Process:**
- Daily standups (optional)
- Continuous deployment
- Minimal ceremony

**Timeframe:** 1-10 days
`;
}

function generateAgileStandardGuidance(): string {
    return `### Agile Standard (2-12 weeks)

**Characteristics:**
- Moderate complexity
- Medium team (4-10 people)
- Some dependencies
- Evolving requirements

**Documentation:**
- 📋 Full PRD with user stories
- 📋 Architecture document
- 📋 Sprint planning
- 📋 Test strategy

**Process:**
- 2-week sprints
- Sprint planning, review, retro
- Daily standups
- CI/CD pipeline

**Timeframe:** 2-12 weeks
`;
}

function generateEnterpriseGuidance(): string {
    return `### Enterprise (12+ weeks)

**Characteristics:**
- High complexity
- Large team (10+ people)
- Many dependencies
- Extensive requirements

**Documentation:**
- 📚 Comprehensive GDD (Game Design Doc)
- 📚 Detailed architecture
- 📚 Multi-sprint roadmap
- 📚 Compliance documentation
- 📚 Security assessment

**Process:**
- 3-4 week sprints
- Multiple tracks (frontend, backend, infra)
- Program management
- Quarterly planning

**Timeframe:** 3-18 months
`;
}

function generatePlanningWorkflow(track: string): string {
    if (track === 'quick-flow') {
        return `1. **Day 1:** Define scope & create PRD
2. **Day 1-2:** Design & architecture
3. **Day 3-7:** Development
4. **Day 8-9:** Testing
5. **Day 10:** Deploy`;
    } else if (track === 'agile-standard') {
        return `1. **Week 1:** Discovery & PRD
2. **Week 1-2:** Architecture & design
3. **Week 2-8:** Development sprints
4. **Week 9-10:** Testing & QA
5. **Week 11-12:** Deployment & stabilization`;
    } else {
        return `1. **Month 1:** Requirements & planning
2. **Month 2-3:** Architecture & design
3. **Month 4-12:** Phased development
4. **Month 13-15:** Integration & testing
5. **Month 16-18:** Deployment & optimization`;
    }
}
