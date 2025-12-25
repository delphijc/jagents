import * as fs from 'fs/promises';
import * as path from 'path';

/**
 * JAGENTS Agent: Analyst
 * Role: Reflective Coach & Brainstormer
 * Domain: Ideation, Concept Refinement, and Project Analysis (Agile method Phase 1)
 */

export interface AnalystInput {
    userIdea: string;
    workflow?: 'six-thinking-hats' | 'five-ws';
    context?: string;
}

export const analystAgent = {
    toolDefinition: {
        name: 'jagents_analyst',
        description: 'Reflective coach for ideation using Creative Intelligence Suite (CIS). Guides brainstorming with Six Thinking Hats or Five W\'s methodology. Outputs: Project Brief.',
        inputSchema: {
            type: 'object',
            properties: {
                userIdea: {
                    type: 'string',
                    description: 'Raw idea, aspiration, or project concept to refine',
                },
                workflow: {
                    type: 'string',
                    enum: ['six-thinking-hats', 'five-ws'],
                    description: 'Brainstorming workflow to use. Default: six-thinking-hats',
                },
                context: {
                    type: 'string',
                    description: 'Additional context or constraints for the ideation session',
                },
            },
            required: ['userIdea'],
        },
    },

    async execute(input: AnalystInput): Promise<string> {
        const workflow = input.workflow || 'six-thinking-hats';

        // Build the analysis prompt
        let prompt = `# Analyst - Ideation Session\n\n`;
        prompt += `## User Idea\n${input.userIdea}\n\n`;

        if (input.context) {
            prompt += `## Context\n${input.context}\n\n`;
        }

        prompt += `## Workflow: ${workflow === 'six-thinking-hats' ? 'Six Thinking Hats' : 'Five W\'s'}\n\n`;

        if (workflow === 'six-thinking-hats') {
            prompt += await executeSixThinkingHats(input.userIdea);
        } else {
            prompt += await executeFiveWs(input.userIdea);
        }

        prompt += `\n\n## Project Brief\n\n`;
        prompt += generateProjectBrief(input.userIdea, workflow);

        return prompt;
    },
};

async function executeSixThinkingHats(idea: string): Promise<string> {
    let output = `### 🤍 White Hat: Facts & Information\n`;
    output += `**Objective Assessment:**\n`;
    output += `- What facts do we have about this idea?\n`;
    output += `- What information is missing?\n`;
    output += `- What data would support this concept?\n\n`;

    output += `### ❤️ Red Hat: Emotions & Feelings\n`;
    output += `**Gut Reactions:**\n`;
    output += `- How do you feel about this idea?\n`;
    output += `- What's your initial emotional response?\n`;
    output += `- What excites you? What concerns you?\n\n`;

    output += `### 🖤 Black Hat: Critical Judgment\n`;
    output += `**Risk Analysis:**\n`;
    output += `- What could go wrong?\n`;
    output += `- What are the weaknesses?\n`;
    output += `- What obstacles might we face?\n\n`;

    output += `### 💛 Yellow Hat: Positive Aspects\n`;
    output += `**Benefits & Value:**\n`;
    output += `- What are the benefits of this idea?\n`;
    output += `- Why would this work?\n`;
    output += `- What value does it create?\n\n`;

    output += `### 💚 Green Hat: Creativity & Alternatives\n`;
    output += `**Innovation:**\n`;
    output += `- What other options exist?\n`;
    output += `- How could we innovate here?\n`;
    output += `- What creative variations are possible?\n\n`;

    output += `### 🔵 Blue Hat: Process Control\n`;
    output += `**Meta-Thinking:**\n`;
    output += `- What have we learned from this exercise?\n`;
    output += `- What's the next step?\n`;
    output += `- How should we proceed?\n\n`;

    return output;
}

async function executeFiveWs(idea: string): Promise<string> {
    let output = `### Who\n`;
    output += `**Stakeholders:**\n`;
    output += `- Who will use this?\n`;
    output += `- Who will be affected?\n`;
    output += `- Who has authority or influence?\n\n`;

    output += `### What\n`;
    output += `**Problem & Solution:**\n`;
    output += `- What is the problem?\n`;
    output += `- What would success look like?\n`;
    output += `- What are the constraints?\n\n`;

    output += `### Where\n`;
    output += `**Context:**\n`;
    output += `- Where will this be used?\n`;
    output += `- Where are the boundaries?\n`;
    output += `- Where does this fit in the larger system?\n\n`;

    output += `### When\n`;
    output += `**Timeline:**\n`;
    output += `- When is this needed?\n`;
    output += `- When are the critical milestones?\n`;
    output += `- When will each phase happen?\n\n`;

    output += `### Why\n`;
    output += `**Root Cause:**\n`;
    output += `- Why is this important?\n`;
    output += `- Why now?\n`;
    output += `- Why this approach?\n\n`;

    return output;
}

function generateProjectBrief(idea: string, workflow: string): string {
    const timestamp = new Date().toISOString().split('T')[0];

    let brief = `**Generated:** ${timestamp}\n`;
    brief += `**Method:** ${workflow === 'six-thinking-hats' ? 'Six Thinking Hats' : 'Five W\'s'}\n\n`;

    brief += `### Executive Summary\n`;
    brief += `[AI should synthesize the analysis above into a concise summary]\n\n`;

    brief += `### Problem Statement\n`;
    brief += `[Core problem this idea addresses]\n\n`;
    brief += `### Target Users\n`;
    brief += `[Who will benefit from this]\n\n`;

    brief += `### Proposed Solution\n`;
    brief += `${idea}\n\n`;

    brief += `### Key Insights\n`;
    brief += `[Main takeaways from the ${workflow} analysis]\n\n`;

    brief += `### Next Steps\n`;
    brief += `1. Refine requirements with Product Manager\n`;
    brief += `2. Develop technical architecture\n`;
    brief += `3. Create detailed user stories\n\n`;

    brief += `---\n`;
    brief += `*This Project Brief serves as input to the Product Manager (Agile method Phase 2)*\n`;

    return brief;
}
