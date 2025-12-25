/**
 * JAGENTS Agent: Scrum Master
 * Role: Agile Facilitator / Story Architect
 * Domain: Sprint Planning, Story Breakdown, Team Coordination (Agile method Phase 4)
 */

export interface ScrumMasterInput {
    prd: string;
    uxDesign?: string;
    sprintDuration?: number; // in weeks
}

export const scrumMasterAgent = {
    toolDefinition: {
        name: 'jagents_scrum_master',
        description: 'Scrum Master that breaks down PRDs and UX designs into developer stories. Creates sprint-ready backlog. Outputs: Developer Stories with acceptance criteria.',
        inputSchema: {
            type: 'object',
            properties: {
                prd: {
                    type: 'string',
                    description: 'Product Requirements Document from Product Manager',
                },
                uxDesign: {
                    type: 'string',
                    description: 'UX Design Document (optional, enhances story detail)',
                },
                sprintDuration: {
                    type: 'number',
                    description: 'Sprint duration in weeks (default: 2)',
                },
            },
            required: ['prd'],
        },
    },

    async execute(input: ScrumMasterInput): Promise<string> {
        const sprintDuration = input.sprintDuration || 2;

        let output = `# Scrum Master - Developer Stories\n\n`;
        output += `## Input\n`;
        output += `**PRD:** ${input.prd.substring(0, 300)}...\n`;
        if (input.uxDesign) {
            output += `**UX Design:** Provided ✅\n`;
        }
        output += `\n## Sprint Configuration\n`;
        output += `**Sprint Duration:** ${sprintDuration} weeks\n`;
        output += `**Story Point Scale:** Fibonacci (1, 2, 3, 5, 8, 13)\n\n`;

        output += `## Story Development Process\n\n`;
        output += applyStoryDevelopment(input.prd);

        output += `\n## Developer Stories\n\n`;
        output += generateDeveloperStories(input.prd, input.uxDesign);

        return output;
    },
};

function applyStoryDevelopment(prd: string): string {
    let process = `### 1. Epic Breakdown\n`;
    process += `**Identify Epics:**\n`;
    process += `- Extract high-level features from PRD\n`;
    process += `- Group related functionality\n`;
    process += `- Prioritize by business value\n\n`;

    process += `### 2. Story Slicing\n`;
    process += `**Break Epics into Stories:**\n`;
    process += `- Each story = one vertical slice of functionality\n`;
    process += `- Stories are independently deliverable\n`;
    process += `- Size: completable in 1 sprint\n\n`;

    process += `### 3. Acceptance Criteria\n`;
    process += `**Define "Done":**\n`;
    process += `- Given-When-Then format\n`;
    process += `- Testable conditions\n`;
    process += `- Clear success metrics\n\n`;

    process += `### 4. Story Pointing\n`;
    process += `**Estimate Effort:**\n`;
    process += `- Complexity assessment\n`;
    process += `- Uncertainty factors\n`;
    process += `- Team capacity consideration\n`;

    return process;
}

function generateDeveloperStories(prd: string, uxDesign?: string): string {
    const timestamp = new Date().toISOString().split('T')[0];

    let stories = `**Generated:** ${timestamp}\n`;
    stories += `**Format:** User Story with Acceptance Criteria\n`;
    stories += `**Phase:** Agile method Phase 4\n\n`;

    stories += `---\n\n`;
    stories += `### Epic 1: Core Functionality\n\n`;

    // Story 1
    stories += `#### Story 1.1: [Feature Name]\n`;
    stories += `**Priority:** High  \n`;
    stories += `**Story Points:** 5  \n`;
    stories += `**Sprint:** 1\n\n`;

    stories += `**User Story:**\n`;
    stories += `> As a [user type],  \n`;
    stories += `> I want [goal/desire],  \n`;
    stories += `> So that [benefit/value].\n\n`;

    stories += `**Acceptance Criteria:**\n`;
    stories += `- [ ] **Given** [context/precondition]\n`;
    stories += `      **When** [action/event]\n`;
    stories += `      **Then** [outcome/result]\n\n`;
    stories += `- [ ] **Given** [context]\n`;
    stories += `      **When** [action]\n`;
    stories += `      **Then** [outcome]\n\n`;

    stories += `**Technical Notes:**\n`;
    stories += `- Implementation approach\n`;
    stories += `- Dependencies (if any)\n`;
    stories += `- API endpoints needed\n\n`;

    stories += `**Definition of Done:**\n`;
    stories += `- [ ] Code written and reviewed\n`;
    stories += `- [ ] Unit tests passing (>80% coverage)\n`;
    stories += `- [ ] Integration tests passing\n`;
    stories += `- [ ] Documentation updated\n`;
    stories += `- [ ] Deployed to staging\n\n`;

    if (uxDesign) {
        stories += `**UX Reference:**\n`;
        stories += `- See wireframe: [Component Name]\n`;
        stories += `- Interaction pattern: [Pattern Type]\n\n`;
    }

    stories += `---\n\n`;

    // Story 2
    stories += `#### Story 1.2: [Related Feature]\n`;
    stories += `**Priority:** High  \n`;
    stories += `**Story Points:** 3  \n`;
    stories += `**Sprint:** 1\n\n`;

    stories += `**User Story:**\n`;
    stories += `> As a [user type],  \n`;
    stories += `> I want [goal],  \n`;
    stories += `> So that [benefit].\n\n`;

    stories += `**Acceptance Criteria:**\n`;
    stories += `- [ ] [Criteria 1]\n`;
    stories += `- [ ] [Criteria 2]\n`;
    stories += `- [ ] [Criteria 3]\n\n`;

    stories += `---\n\n`;

    stories += `### Epic 2: Secondary Features\n\n`;
    stories += `#### Story 2.1: [Feature Name]\n`;
    stories += `**Priority:** Medium  \n`;
    stories += `**Story Points:** 8  \n`;
    stories += `**Sprint:** 2\n\n`;
    stories += `[Detailed story structure as above...]\n\n`;

    stories += `---\n\n`;
    stories += `## Sprint Planning\n\n`;
    stories += `### Sprint 1 (High Priority)\n`;
    stories += `- Story 1.1 (5 points)\n`;
    stories += `- Story 1.2 (3 points)\n`;
    stories += `- Story 1.3 (5 points)\n`;
    stories += `**Total:** 13 points\n\n`;

    stories += `### Sprint 2 (Medium Priority)\n`;
    stories += `- Story 2.1 (8 points)\n`;
    stories += `- Story 2.2 (5 points)\n`;
    stories += `**Total:** 13 points\n\n`;

    stories += `## Backlog Grooming Notes\n`;
    stories += `- Stories ready for Sprint 1\n`;
    stories += `- Stories 2.x need refinement\n`;
    stories += `- Dependency: UX design finalization for Story 3.x\n\n`;

    stories += `---\n`;
    stories += `*Developer Stories ready for implementation (Phase 5)*\n`;

    return stories;
}
