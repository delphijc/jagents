import { z } from 'zod';

/**
 * JAGENTS Agent: CIS Problem Solving Coach (Dr. Quinn)
 * Role: Detective-Scientist Hybrid
 * Domain: Root Cause Analysis
 */

export interface ProblemSolvingInput {
    problem: string;
    method?: '5-whys' | 'fishbone' | 'solution-matrix';
    context?: string;
}

export const problemSolvingCoach = {
    toolDefinition: {
        name: 'jagents_cis_problem_solving_coach',
        description: 'Dr. Quinn: Systematically analyzes problems using 5 Whys, Fishbone diagrams, and other root cause analysis tools.',
        inputSchema: {
            type: 'object',
            properties: {
                problem: {
                    type: 'string',
                    description: 'The problem statement or symptom observed',
                },
                method: {
                    type: 'string',
                    enum: ['5-whys', 'fishbone', 'solution-matrix'],
                    description: 'Analysis method to use. Default: 5-whys',
                },
                context: {
                    type: 'string',
                    description: 'Background information or constraints',
                },
            },
            required: ['problem'],
        },
    },

    async execute(input: ProblemSolvingInput): Promise<string> {
        const method = input.method || '5-whys';

        let prompt = `# Problem Analysis with Dr. Quinn 🕵️‍♀️\n\n`;
        prompt += `**Problem:** ${input.problem}\n`;
        
        if (input.context) {
            prompt += `**Context:** ${input.context}\n\n`;
        } else {
            prompt += `\n`;
        }

        prompt += `## Analysis Method: ${method}\n\n`;

        switch (method) {
            case '5-whys':
                prompt += `### The 5 Whys\n`;
                prompt += `We will peel back the layers of the symptom to find the root cause.\n`;
                prompt += `1. Why does [Problem] happen?\n`;
                prompt += `2. Why does [Answer 1] happen?\n`;
                prompt += `3. Why does [Answer 2] happen?\n`;
                prompt += `4. Why does [Answer 3] happen?\n`;
                prompt += `5. Why does [Answer 4] happen? -> **Root Cause**\n\n`;
                break;
            case 'fishbone':
                prompt += `### Fishbone (Ishikawa) Diagram\n`;
                prompt += `Let's categorize potential causes:\n`;
                prompt += `- **People:** Training, fatigue, communication?\n`;
                prompt += `- **Process:** Standard procedures, workflow gaps?\n`;
                prompt += `- **Technology:** Tools, software, hardware?\n`;
                prompt += `- **Environment:** Location, culture, noise?\n`;
                prompt += `- **Materials:** Raw data, documents, supplies?\n\n`;
                break;
            case 'solution-matrix':
                prompt += `### Solution Evaluation Matrix\n`;
                prompt += `Let's evaluate potential solutions based on Impact vs. Effort.\n`;
                prompt += `| Solution | Impact (1-10) | Effort (1-10) | Priority |\n`;
                prompt += `| :--- | :--- | :--- | :--- |\n`;
                prompt += `| Option A | | | |\n`;
                prompt += `| Option B | | | |\n\n`;
                prompt += `*Recommendation:* Focus on High Impact, Low Effort (Quick Wins) first.\n\n`;
                break;
        }

        prompt += `\n## Output Template\n`;
        prompt += `Structure the output using the template at: \`templates/cis/problem_analysis.md\`\n`;

        return prompt;
    },
};
