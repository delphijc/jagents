/**
 * JAGENTS Rule: Mandatory Context Loading
 * Purpose: Ensure proper context is loaded before task execution
 * Category: Process
 */

export interface MandatoryContextLoadingInput {
    task: string;
    contextProvided?: boolean;
    contextItems?: string[];
}

export const mandatoryContextLoadingRule = {
    toolDefinition: {
        name: 'jagents_rule_mandatory_context_loading',
        description: 'Validates that all necessary context is loaded before executing a task. Ensures developers have architecture, standards, and requirements.',
        inputSchema: {
            type: 'object',
            properties: {
                task: {
                    type: 'string',
                    description: 'Task or story to validate',
                },
                contextProvided: {
                    type: 'boolean',
                    description: 'Whether context was provided',
                },
                contextItems: {
                    type: 'array',
                    items: { type: 'string' },
                    description: 'List of context items loaded',
                },
            },
            required: ['task'],
        },
    },

    async execute(input: MandatoryContextLoadingInput): Promise<string> {
        const hasContext = input.contextProvided || false;
        const items = input.contextItems || [];

        let output = `# Mandatory Context Loading Validation\n\n`;
        output += `**Rule:** Mandatory Context Loading Protocol (MCLP)\n`;
        output += `**Task:** ${input.task.substring(0, 100)}...\n`;
        output += `**Context Status:** ${hasContext ? '✅ Provided' : '❌ Missing'}\n\n`;

        output += `## Required Context Items\n\n`;
        output += `### Essential Context\n`;
        output += `- [ ] Architecture document\n`;
        output += `- [ ] Coding standards\n`;
        output += `- [ ] Technology stack\n`;
        output += `- [ ] User story/requirements\n`;
        output += `- [ ] Acceptance criteria\n\n`;

        output += `### Technical Context\n`;
        output += `- [ ] API contracts\n`;
        output += `- [ ] Database schema\n`;
        output += `- [ ] Dependencies\n`;
        output += `- [ ] Environment configuration\n\n`;

        output += `### Quality Context\n`;
        output += `- [ ] Testing requirements\n`;
        output += `- [ ] Performance criteria\n`;
        output += `- [ ] Security guidelines\n`;
        output += `- [ ] Accessibility standards\n\n`;

        if (items.length > 0) {
            output += `## Context Items Loaded\n\n`;
            items.forEach(item => {
                output += `- ✅ ${item}\n`;
            });
            output += `\n`;
        }

        output += `## Context Loading Protocol\n\n`;
        output += `**Before starting any development task:**\n\n`;
        output += `1. **Load Architecture Context**\n`;
        output += `   - System architecture diagram\n`;
        output += `   - Component relationships\n`;
        output += `   - Design patterns in use\n\n`;

        output += `2. **Load Standards Context**\n`;
        output += `   - Coding style guide\n`;
        output += `   - Naming conventions\n`;
        output += `   - File structure\n`;
        output += `   - Best practices\n\n`;

        output += `3. **Load Requirements Context**\n`;
        output += `   - User story\n`;
        output += `   - Acceptance criteria\n`;
        output += `   - Business rules\n`;
        output += `   - Edge cases\n\n`;

        output += `4. **Load Technical Context**\n`;
        output += `   - Tech stack documentation\n`;
        output += `   - API specifications\n`;
        output += `   - Database models\n`;
        output += `   - Third-party integrations\n\n`;

        output += `## Compliance Status\n\n`;
        if (hasContext && items.length >= 4) {
            output += `✅ **COMPLIANT** - Sufficient context loaded\n\n`;
            output += `Context items loaded: ${items.length}/4 minimum\n`;
        } else {
            output += `❌ **NON-COMPLIANT** - Insufficient context\n\n`;
            output += `**Action Required:**\n`;
            output += `1. Load architecture documentation\n`;
            output += `2. Review coding standards\n`;
            output += `3. Understand requirements fully\n`;
            output += `4. Gather technical specifications\n`;
        }

        return output;
    },
};
