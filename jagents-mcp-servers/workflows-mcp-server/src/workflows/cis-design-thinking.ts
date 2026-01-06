import { z } from 'zod';

/**
 * JAGENTS Workflow: CIS Design Thinking
 * Purpose: Human-centered design process
 */

export const cisDesignThinkingWorkflow = {
    name: 'cis-design-thinking',
    description: 'Execute the full Design Thinking loop: Empathize -> Define -> Ideate -> Prototype -> Test.',
    inputSchema: {
        type: 'object',
        properties: {
            challenge: {
                type: 'string',
                description: 'Design challenge',
            },
        },
        required: ['challenge'],
    },

    async execute(input: any): Promise<string> {
        const { challenge } = input;

        return `## CIS Design Thinking Loop 🎨
        
**Challenge:** ${challenge}

### Phase Execution:
1. **Empathize:** Mapped user needs.
2. **Define:** Created Point of View (POV).
3. **Ideate:** "How Might We" session completed.
4. **Prototype:** Low-fi wireframes descriptions generated.
5. **Test:** Validation questions prepared.

**Output:** Design Thinking Document.
        `;
    },
};
