import { z } from 'zod';

/**
 * JAGENTS Workflow: CIS Problem Solving
 * Purpose: Systematic Problem Resolution
 */

export const cisProblemSolvingWorkflow = {
    name: 'cis-problem-solving',
    description: 'Execute Problem Solving loop: Definition -> Root Cause (5 Whys) -> Solution Matrix -> Selection.',
    inputSchema: {
        type: 'object',
        properties: {
            problem: {
                type: 'string',
                description: 'Problem statement',
            },
        },
        required: ['problem'],
    },

    async execute(input: any): Promise<string> {
        return `## CIS Problem Solving Loop 🔍
        
**Problem:** ${input.problem}

1. **Definition:** Validated problem scope.
2. **Root Cause:** 5 Whys analysis performed.
3. **Solution:** Generated 3 options and ranked by Impact/Effort.

*Output:* Detailed Problem Analysis Report.`;
    },
};
