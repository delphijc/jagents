/**
 * JAGENTS Skill: Story Development
 * Purpose: Create and refine user stories
 * Used by: Product Manager, Scrum Master, Developer
 */

export interface StoryDevelopmentInput {
    feature: string;
    userType?: string;
    acceptanceCriteria?: boolean;
}

export const storyDevelopmentSkill = {
    toolDefinition: {
        name: 'jagents_skill_story_development',
        description: 'Creates well-formed user stories with acceptance criteria in Given-When-Then format.',
        inputSchema: {
            type: 'object',
            properties: {
                feature: {
                    type: 'string',
                    description: 'Feature or functionality to create story for',
                },
                userType: {
                    type: 'string',
                    description: 'Type of user (e.g., "end user", "admin", "developer")',
                },
                acceptanceCriteria: {
                    type: 'boolean',
                    description: 'Generate detailed acceptance criteria. Default: true',
                },
            },
            required: ['feature'],
        },
    },

    async execute(input: StoryDevelopmentInput): Promise<string> {
        const userType = input.userType || 'user';
        const includeAC = input.acceptanceCriteria !== false;

        let output = `# User Story\n\n`;
        output += `## Story Format\n\n`;
        output += `**As a** ${userType},  \n`;
        output += `**I want** ${input.feature},  \n`;
        output += `**So that** [benefit/value]\n\n`;

        if (includeAC) {
            output += `## Acceptance Criteria\n\n`;
            output += generateAcceptanceCriteria(input.feature);
        }

        output += `\n## Story Metadata\n`;
        output += `- **Priority:** [High/Medium/Low]\n`;
        output += `- **Story Points:** [Fibonacci estimate]\n`;
        output += `- **Sprint:** [Sprint number]\n\n`;

        output += `## Definition of Done\n`;
        output += `- [ ] Code implemented\n`;
        output += `- [ ] Unit tests written (>80% coverage)\n`;
        output += `- [ ] Integration tests passing\n`;
        output += `- [ ] Code reviewed\n`;
        output += `- [ ] Documentation updated\n`;
        output += `- [ ] Acceptance criteria validated\n`;

        return output;
    },
};

function generateAcceptanceCriteria(feature: string): string {
    let ac = `### Scenario 1: Happy Path\n`;
    ac += `**Given** [initial state/context]  \n`;
    ac += `**When** [action performed]  \n`;
    ac += `**Then** [expected outcome]\n\n`;

    ac += `### Scenario 2: Error Handling\n`;
    ac += `**Given** [error condition]  \n`;
    ac += `**When** [action attempted]  \n`;
    ac += `**Then** [error handled gracefully]\n\n`;

    ac += `### Scenario 3: Edge Case\n`;
    ac += `**Given** [edge condition]  \n`;
    ac += `**When** [boundary action]  \n`;
    ac += `**Then** [correct behavior]\n\n`;

    return ac;
}
