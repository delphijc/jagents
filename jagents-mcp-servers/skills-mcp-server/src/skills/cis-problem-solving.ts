import { z } from 'zod';

/**
 * JAGENTS Skill: CIS Problem Solving
 * Purpose: Systematic root cause analysis
 */

export const problemSolvingSkill = {
    name: 'cis_problem_solving',
    description: 'Apply problem solving frameworks: 5 Whys, Fishbone, and Solution Matrix.',
    inputSchema: {
        type: 'object',
        properties: {
            technique: {
                type: 'string',
                enum: ['5-whys', 'fishbone', 'solution-matrix'],
                description: 'The problem solving technique to use',
            },
            problemStatement: {
                type: 'string',
                description: 'Description of the problem to analyze',
            },
        },
        required: ['technique', 'problemStatement'],
    },

    async execute(input: any): Promise<string> {
        const { technique, problemStatement } = input;

        let output = `## Problem Solving Output: ${technique}\n\n`;
        output += `**Problem:** ${problemStatement}\n\n`;

        switch (technique) {
            case '5-whys':
                output += `### 5 Whys Analysis\n`;
                output += `1. Why? [Reason 1]\n`;
                output += `2. Why? [Reason 2]\n`;
                output += `3. Why? [Reason 3]\n`;
                output += `4. Why? [Reason 4]\n`;
                output += `5. Why? [Root Cause]\n`;
                break;
            case 'fishbone':
                output += `### Fishbone Diagram Categories\n`;
                output += `- **People:** Skills, training, fatigue.\n`;
                output += `- **Process:** Standard work, handoffs.\n`;
                output += `- **Equipment:** Tools, settings, maintenance.\n`;
                output += `- **Materials:** Quality, specs, availability.\n`;
                output += `- **Environment:** Noise, space, temperature.\n`;
                break;
            case 'solution-matrix':
                output += `### Solution Impact/Effort Matrix\n`;
                output += `*Evaluating potential solutions...*\n`;
                output += `- **Quick Wins:** High Impact, Low Effort\n`;
                output += `- **Major Projects:** High Impact, High Effort\n`;
                output += `- **Fill-ins:** Low Impact, Low Effort\n`;
                output += `- **Thankless Tasks:** Low Impact, High Effort\n`;
                break;
        }

        return output;
    },
};
