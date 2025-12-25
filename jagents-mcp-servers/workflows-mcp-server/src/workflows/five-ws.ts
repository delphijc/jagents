/**
 * JAGENTS Workflow: Five W's
 * Purpose: Structured questioning framework
 * Used by: Analyst, Product Manager
 */

export interface FiveWsInput {
    topic: string;
    focusArea?: 'who' | 'what' | 'where' | 'when' | 'why' | 'all';
}

export const fiveWsWorkflow = {
    toolDefinition: {
        name: 'jagents_workflow_five_ws',
        description: 'Five W\'s (Who, What, Where, When, Why) structured questioning framework for comprehensive analysis.',
        inputSchema: {
            type: 'object',
            properties: {
                topic: {
                    type: 'string',
                    description: 'Topic or problem to analyze',
                },
                focusArea: {
                    type: 'string',
                    enum: ['who', 'what', 'where', 'when', 'why', 'all'],
                    description: 'Specific W to focus on. Default: all',
                },
            },
            required: ['topic'],
        },
    },

    async execute(input: FiveWsInput): Promise<string> {
        const focus = input.focusArea || 'all';

        let output = `# Five W's Analysis\n\n`;
        output += `**Topic:** ${input.topic}\n`;
        output += `**Focus:** ${focus === 'all' ? 'Complete Analysis' : focus.toUpperCase()}\n\n`;

        if (focus === 'all' || focus === 'who') {
            output += `## 👥 Who\n\n`;
            output += `**Stakeholders:**\n`;
            output += `- Who will use this?\n`;
            output += `- Who will be affected?\n`;
            output += `- Who has authority or influence?\n`;
            output += `- Who are the decision makers?\n`;
            output += `- Who are the beneficiaries?\n`;
            output += `- Who might resist or oppose?\n\n`;
            output += `**Roles & Responsibilities:**\n`;
            output += `- Primary users: [Description]\n`;
            output += `- Secondary users: [Description]\n`;
            output += `- Administrators: [Description]\n`;
            output += `- Stakeholders: [Description]\n\n`;
        }

        if (focus === 'all' || focus === 'what') {
            output += `## 📋 What\n\n`;
            output += `**Problem & Solution:**\n`;
            output += `- What is the problem?\n`;
            output += `- What would success look like?\n`;
            output += `- What are the constraints?\n`;
            output += `- What are the requirements?\n`;
            output += `- What are the deliverables?\n`;
            output += `- What resources are needed?\n\n`;
            output += `**Scope:**\n`;
            output += `- In scope: [List]\n`;
            output += `- Out of scope: [List]\n`;
            output += `- Dependencies: [List]\n\n`;
        }

        if (focus === 'all' || focus === 'where') {
            output += `## 📍 Where\n\n`;
            output += `**Context:**\n`;
            output += `- Where will this be used?\n`;
            output += `- Where are the boundaries?\n`;
            output += `- Where does this fit in the larger system?\n`;
            output += `- Where will it be deployed?\n`;
            output += `- Where are the integration points?\n\n`;
            output += `**Environment:**\n`;
            output += `- Physical location: [Description]\n`;
            output += `- Digital environment: [Description]\n`;
            output += `- Organizational context: [Description]\n\n`;
        }

        if (focus === 'all' || focus === 'when') {
            output += `## ⏰ When\n\n`;
            output += `**Timeline:**\n`;
            output += `- When is this needed?\n`;
            output += `- When are the critical milestones?\n`;
            output += `- When will each phase happen?\n`;
            output += `- When should we start?\n`;
            output += `- When is the deadline?\n\n`;
            output += `**Schedule:**\n`;
            output += `- Phase 1: [Timeframe]\n`;
            output += `- Phase 2: [Timeframe]\n`;
            output += `- Phase 3: [Timeframe]\n`;
            output += `- Launch: [Target date]\n\n`;
        }

        if (focus === 'all' || focus === 'why') {
            output += `## 🎯 Why\n\n`;
            output += `**Root Cause:**\n`;
            output += `- Why is this important?\n`;
            output += `- Why now?\n`;
            output += `- Why this approach?\n`;
            output += `- Why not alternative solutions?\n`;
            output += `- Why are we the right team?\n\n`;
            output += `**Value Proposition:**\n`;
            output += `- Business value: [Description]\n`;
            output += `- User value: [Description]\n`;
            output += `- Strategic alignment: [Description]\n\n`;
        }

        output += `---\n\n`;
        output += `## Summary\n\n`;
        output += `By answering the Five W's for "${input.topic}", we have:\n`;
        output += `- ✅ Identified all stakeholders (Who)\n`;
        output += `- ✅ Defined the problem and solution (What)\n`;
        output += `- ✅ Established the context (Where)\n`;
        output += `- ✅ Created a timeline (When)\n`;
        output += `- ✅ Understood the purpose (Why)\n\n`;

        output += `**Next Actions:**\n`;
        output += `1. Validate findings with stakeholders\n`;
        output += `2. Refine requirements based on analysis\n`;
        output += `3. Develop detailed implementation plan\n`;
        output += `4. Proceed to solution design\n`;

        return output;
    },
};
