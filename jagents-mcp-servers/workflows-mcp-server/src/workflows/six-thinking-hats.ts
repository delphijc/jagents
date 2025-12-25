/**
 * JAGENTS Workflow: Six Thinking Hats
 * Purpose: Multi-perspective creative analysis
 * Used by: Analyst, Product Manager
 */

export interface SixThinkingHatsInput {
    topic: string;
    context?: string;
}

export const sixThinkingHatsWorkflow = {
    toolDefinition: {
        name: 'jagents_workflow_six_thinking_hats',
        description: 'Edward de Bono\'s Six Thinking Hats methodology for structured multi-perspective thinking. Analyzes topics from 6 different viewpoints.',
        inputSchema: {
            type: 'object',
            properties: {
                topic: {
                    type: 'string',
                    description: 'Topic or idea to analyze',
                },
                context: {
                    type: 'string',
                    description: 'Additional context or background',
                },
            },
            required: ['topic'],
        },
    },

    async execute(input: SixThinkingHatsInput): Promise<string> {
        let output = `# Six Thinking Hats Analysis\n\n`;
        output += `**Topic:** ${input.topic}\n`;
        if (input.context) {
            output += `**Context:** ${input.context}\n`;
        }
        output += `\n`;

        // White Hat: Facts & Information
        output += `## 🤍 White Hat: Facts & Information\n\n`;
        output += `**Objective Assessment:**\n`;
        output += `- What facts do we have about "${input.topic}"?\n`;
        output += `- What information is missing?\n`;
        output += `- What data would support this concept?\n`;
        output += `- What are the measurable aspects?\n\n`;

        // Red Hat: Emotions & Feelings
        output += `## ❤️ Red Hat: Emotions & Feelings\n\n`;
        output += `**Gut Reactions:**\n`;
        output += `- How do stakeholders feel about this?\n`;
        output += `- What's the initial emotional response?\n`;
        output += `- What excites people? What concerns them?\n`;
        output += `- What are the intuitions and hunches?\n\n`;

        // Black Hat: Critical Judgment
        output += `## 🖤 Black Hat: Critical Judgment\n\n`;
        output += `**Risk Analysis:**\n`;
        output += `- What could go wrong?\n`;
        output += `- What are the weaknesses and vulnerabilities?\n`;
        output += `- What obstacles might we face?\n`;
        output += `- Why might this fail?\n`;
        output += `- What are the risks and downsides?\n\n`;

        // Yellow Hat: Positive Aspects
        output += `## 💛 Yellow Hat: Positive Aspects\n\n`;
        output += `**Benefits & Value:**\n`;
        output += `- What are the benefits of this idea?\n`;
        output += `- Why would this work?\n`;
        output += `- What value does it create?\n`;
        output += `- What are the opportunities?\n`;
        output += `- What's the best-case scenario?\n\n`;

        // Green Hat: Creativity & Alternatives
        output += `## 💚 Green Hat: Creativity & Alternatives\n\n`;
        output += `**Innovation:**\n`;
        output += `- What other options exist?\n`;
        output += `- How could we innovate here?\n`;
        output += `- What creative variations are possible?\n`;
        output += `- What if we approached this differently?\n`;
        output += `- What are the alternative solutions?\n\n`;

        // Blue Hat: Process Control
        output += `## 🔵 Blue Hat: Process Control\n\n`;
        output += `**Meta-Thinking:**\n`;
        output += `- What have we learned from this exercise?\n`;
        output += `- What's the summary of our thinking?\n`;
        output += `- What's the next step?\n`;
        output += `- How should we proceed?\n`;
        output += `- What decisions need to be made?\n\n`;

        output += `---\n\n`;
        output += `## Synthesis\n\n`;
        output += `**Balanced Perspective:**\n`;
        output += `After examining "${input.topic}" from six different perspectives, we can now make a more informed decision that considers:\n`;
        output += `- Facts and data (White)\n`;
        output += `- Emotions and intuition (Red)\n`;
        output += `- Risks and challenges (Black)\n`;
        output += `- Benefits and opportunities (Yellow)\n`;
        output += `- Creative alternatives (Green)\n`;
        output += `- Overall process and next steps (Blue)\n\n`;

        output += `**Recommended Next Steps:**\n`;
        output += `1. Address critical risks identified in Black Hat thinking\n`;
        output += `2. Pursue opportunities highlighted in Yellow Hat analysis\n`;
        output += `3. Explore creative alternatives from Green Hat session\n`;
        output += `4. Gather additional data identified in White Hat review\n`;

        return output;
    },
};
