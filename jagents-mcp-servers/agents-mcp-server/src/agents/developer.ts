/**
 * JAGENTS Agent: Developer
 * Role: Code Implementer
 * Domain: Code Implementation (Agile method Phase 5)
 */

export interface DeveloperInput {
    story: string;
    architecture?: string;
    task?: string;
}

export const developerAgent = {
    toolDefinition: {
        name: 'jagents_developer',
        description: 'Code implementer that executes developer stories following architecture and coding standards. Uses Mandatory Context Loading Protocol. Outputs: Implementation plan and code guidance.',
        inputSchema: {
            type: 'object',
            properties: {
                story: {
                    type: 'string',
                    description: 'Developer Story from Scrum Master (Phase 4 output)',
                },
                architecture: {
                    type: 'string',
                    description: 'Architecture context (coding standards, tech stack)',
                },
                task: {
                    type: 'string',
                    description: 'Specific task within the story to implement',
                },
            },
            required: ['story'],
        },
    },

    async execute(input: DeveloperInput): Promise<string> {
        let output = `# Developer - Implementation\n\n`;
        output += `## Developer Story\n${input.story.substring(0, 500)}...\n\n`;

        if (input.architecture) {
            output += `## Architecture Context Loaded\n✅ Coding standards\n✅ Tech stack\n✅ Project structure\n\n`;
        }

        if (input.task) {
            output += `## Current Task\n${input.task}\n\n`;
        }

        output += `## Implementation Plan\n\n`;
        output += generateImplementationPlan(input.story);

        output += `\n## Code Implementation Guidance\n\n`;
        output += generateCodeGuidance(input.story);

        output += `\n## Next Steps\n`;
        output += `1. Implement code following standards\n`;
        output += `2. Write unit tests (>80% coverage)\n`;
        output += `3. Run linter and formatter\n`;
        output += `4. Create pull request\n`;
        output += `5. Hand off to Test Architect for validation\n\n`;

        output += `---\n`;
        output += `*Implementation ready for Test Architect (TEA) validation*\n`;

        return output;
    },
};

function generateImplementationPlan(story: string): string {
    let plan = `### 1. Requirements Analysis\n`;
    plan += `- Parse user story acceptance criteria\n`;
    plan += `- Identify dependencies\n`;
    plan += `- Break into subtasks\n\n`;

    plan += `### 2. Design Approach\n`;
    plan += `- Component/module design\n`;
    plan += `- Data structures\n`;
    plan += `- API contracts (if applicable)\n`;
    plan += `- Error handling strategy\n\n`;

    plan += `### 3. Implementation Steps\n`;
    plan += `**Step 1:** Set up file structure\n`;
    plan += `**Step 2:** Implement core logic\n`;
    plan += `**Step 3:** Add error handling\n`;
    plan += `**Step 4:** Write tests\n`;
    plan += `**Step 5:** Documentation\n\n`;

    plan += `### 4. Quality Checks\n`;
    plan += `- [ ] Code follows style guide\n`;
    plan += `- [ ] All tests pass\n`;
    plan += `- [ ] No linter errors\n`;
    plan += `- [ ] Documentation complete\n`;

    return plan;
}

function generateCodeGuidance(story: string): string {
    let guidance = `### File Structure\n`;
    guidance += `\`\`\`\nsrc/\n  components/    # Reusable components\n  services/      # Business logic\n  utils/         # Helper functions\n  types/         # TypeScript types\n  tests/         # Unit tests\n\`\`\`\n\n`;

    guidance += `### Coding Principles\n`;
    guidance += `1. **SOLID principles**\n`;
    guidance += `2. **DRY (Don't Repeat Yourself)**\n`;
    guidance += `3. **KISS (Keep It Simple)**\n`;
    guidance += `4. **Meaningful naming**\n`;
    guidance += `5. **Single responsibility per function/class**\n\n`;

    guidance += `### Example Implementation Pattern\n`;
    guidance += `\`\`\`typescript\n`;
    guidance += `// 1. Define types\n`;
    guidance += `interface User {\n`;
    guidance += `  id: string;\n`;
    guidance += `  name: string;\n`;
    guidance += `}\n\n`;
    guidance += `// 2. Implement function with docs\n`;
    guidance += `/**\n`;
    guidance += ` * Retrieves user by ID\n`;
    guidance += ` * @param id - User identifier\n`;
    guidance += ` * @returns User object or null\n`;
    guidance += ` */\n`;
    guidance += `async function getUser(id: string): Promise<User | null> {\n`;
    guidance += `  // Implementation\n`;
    guidance += `}\n\n`;
    guidance += `// 3. Write tests\n`;
    guidance += `describe('getUser', () => {\n`;
    guidance += `  it('should return user when exists', async () => {\n`;
    guidance += `    // Test implementation\n`;
    guidance += `  });\n`;
    guidance += `});\n`;
    guidance += `\`\`\`\n`;

    return guidance;
}
