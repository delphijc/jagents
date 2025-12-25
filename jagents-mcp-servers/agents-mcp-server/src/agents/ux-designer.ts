/**
 * JAGENTS Agent: UX Designer
 * Role: User Experience Architect / Interaction Designer
 * Domain: User Interface Design, User Research, Usability (Agile method Phase 4)
 */

export interface UxDesignerInput {
    prd: string;
    targetPlatform?: 'web' | 'mobile' | 'desktop' | 'cross-platform';
    userPersonas?: string;
}

export const uxDesignerAgent = {
    toolDefinition: {
        name: 'jagents_ux_designer',
        description: 'UX designer that creates user experience designs from PRDs. Uses Design Thinking methodology. Outputs: UX Design Document with wireframes and flows.',
        inputSchema: {
            type: 'object',
            properties: {
                prd: {
                    type: 'string',
                    description: 'Product Requirements Document from Product Manager',
                },
                targetPlatform: {
                    type: 'string',
                    enum: ['web', 'mobile', 'desktop', 'cross-platform'],
                    description: 'Target platform for the design. Default: web',
                },
                userPersonas: {
                    type: 'string',
                    description: 'User personas or target audience description',
                },
            },
            required: ['prd'],
        },
    },

    async execute(input: UxDesignerInput): Promise<string> {
        const platform = input.targetPlatform || 'web';

        let output = `# UX Designer - User Experience Design\n\n`;
        output += `## Input: PRD\n${input.prd.substring(0, 500)}...\n\n`;
        output += `## Target Platform: ${platform.toUpperCase()}\n\n`;

        if (input.userPersonas) {
            output += `## User Personas\n${input.userPersonas}\n\n`;
        }

        output += `## Design Thinking Process\n\n`;
        output += applyDesignThinking(input.prd);

        output += `\n## UX Design Document\n\n`;
        output += generateUxDesign(input.prd, platform);

        return output;
    },
};

function applyDesignThinking(prd: string): string {
    let process = `### 1. Empathize\n`;
    process += `**User Research:**\n`;
    process += `- Understand user needs and pain points\n`;
    process += `- Conduct user interviews (if applicable)\n`;
    process += `- Analyze user behavior patterns\n\n`;

    process += `### 2. Define\n`;
    process += `**Problem Statement:**\n`;
    process += `- "Users need a way to [goal] because [insight]"\n`;
    process += `- Key user needs identified from PRD\n`;
    process += `- Success metrics defined\n\n`;

    process += `### 3. Ideate\n`;
    process += `**Design Concepts:**\n`;
    process += `- Brainstorm multiple UI approaches\n`;
    process += `- Consider different interaction patterns\n`;
    process += `- Evaluate trade-offs\n\n`;

    process += `### 4. Prototype\n`;
    process += `**Wireframes & Flows:**\n`;
    process += `- Low-fidelity wireframes\n`;
    process += `- User flow diagrams\n`;
    process += `- Interactive prototype (described)\n\n`;

    process += `### 5. Test\n`;
    process += `**Validation:**\n`;
    process += `- Usability testing plan\n`;
    process += `- Heuristic evaluation\n`;
    process += `- Iteration based on feedback\n`;

    return process;
}

function generateUxDesign(prd: string, platform: string): string {
    const timestamp = new Date().toISOString().split('T')[0];

    let design = `**Document Type:** UX Design Document\n`;
    design += `**Platform:** ${platform}\n`;
    design += `**Generated:** ${timestamp}\n`;
    design += `**Phase:** Agile method Phase 4\n\n`;

    design += `### 1. User Flows\n\n`;
    design += `**Primary User Journey:**\n`;
    design += `\`\`\`\n`;
    design += `[Entry Point] → [Action 1] → [Action 2] → [Goal Achieved]\n`;
    design += `\`\`\`\n\n`;
    design += `**Alternative Flows:**\n`;
    design += `- Error states\n`;
    design += `- Edge cases\n`;
    design += `- Return user flows\n\n`;

    design += `### 2. Information Architecture\n`;
    design += `\`\`\`\n`;
    design += `Homepage\n`;
    design += `├── Section 1\n`;
    design += `│   ├── Feature A\n`;
    design += `│   └── Feature B\n`;
    design += `├── Section 2\n`;
    design += `└── Section 3\n`;
    design += `\`\`\`\n\n`;

    design += `### 3. Wireframes\n\n`;
    design += getPlatformWireframes(platform);

    design += `\n### 4. UI Components\n`;
    design += `**Component Library:**\n`;
    design += `- Navigation (header, sidebar, tabs)\n`;
    design += `- Forms (inputs, buttons, validation)\n`;
    design += `- Data Display (cards, tables, lists)\n`;
    design += `- Feedback (modals, toasts, alerts)\n`;
    design += `- Loading states\n\n`;

    design += `### 5. Interaction Patterns\n`;
    design += `- **Click/Tap:** Primary actions\n`;
    design += `- **Swipe/Scroll:** Navigation\n`;
    design += `- **Drag and Drop:** Reordering (if applicable)\n`;
    design += `- **Keyboard Shortcuts:** Power users\n\n`;

    design += `### 6. Accessibility (WCAG 2.1 AA)\n`;
    design += `- **Perceivable:** Alt text for images, color contrast\n`;
    design += `- **Operable:** Keyboard navigation, focus indicators\n`;
    design += `- **Understandable:** Clear labels, error messages\n`;
    design += `- **Robust:** Semantic HTML, ARIA labels\n\n`;

    design += `### 7. Responsive Design\n`;
    if (platform === 'web' || platform === 'cross-platform') {
        design += `**Breakpoints:**\n`;
        design += `- Mobile: < 768px\n`;
        design += `- Tablet: 768px - 1024px\n`;
        design += `- Desktop: > 1024px\n\n`;
    }

    design += `### 8. Visual Design Principles\n`;
    design += `- **Hierarchy:** Clear visual hierarchy\n`;
    design += `- **Consistency:** Design system adherence\n`;
    design += `- **Feedback:** Immediate response to actions\n`;
    design += `- **Simplicity:** Minimal cognitive load\n\n`;

    design += `### 9. Usability Metrics\n`;
    design += `- **Task Success Rate:** > 90%\n`;
    design += `- **Time on Task:** Minimize\n`;
    design += `- **Error Rate:** < 5%\n`;
    design += `- **Satisfaction Score:** > 4/5\n\n`;

    design += `---\n`;
    design += `*UX Design ready for development (handoff to Scrum Master)*\n`;

    return design;
}

function getPlatformWireframes(platform: string): string {
    const wireframes: Record<string, string> = {
        'web': `
**Homepage Wireframe:**
\`\`\`
+----------------------------------+
|  [Logo]    [Nav] [Nav] [Profile]|
+----------------------------------+
|                                  |
|  [Hero Section]                  |
|  Headline                        |
|  Subheadline                     |
|  [CTA Button]                    |
|                                  |
+----------------------------------+
|  [Feature 1] [Feature 2] [F3]    |
+----------------------------------+
|  [Footer]                        |
+----------------------------------+
\`\`\``,

        'mobile': `
**Mobile Screen Wireframe:**
\`\`\`
+------------------+
| [☰] Logo    [👤] |
+------------------+
|                  |
|  [Hero Image]    |
|                  |
|  Headline        |
|  Description     |
|                  |
|  [CTA Button]    |
|                  |
+------------------+
|  [Feature Card]  |
|  [Feature Card]  |
|  [Feature Card]  |
+------------------+
|  [Bottom Nav]    |
+------------------+
\`\`\``,

        'desktop': `
**Desktop Application Wireframe:**
\`\`\`
+-------------------------------------+
|  [File] [Edit] [View] [Help]        |
+-------------------------------------+
| [Sidebar]  |  [Main Content Area]   |
|            |                        |
| - Item 1   |  [Toolbar]             |
| - Item 2   |  +------------------+  |
| - Item 3   |  |                  |  |
|            |  |  Work Area       |  |
|            |  |                  |  |
|            |  +------------------+  |
+-------------------------------------+
|  [Status Bar]                       |
+-------------------------------------+
\`\`\``,

        'cross-platform': `
**Responsive Layout (adapts to screen size):**
\`\`\`
Mobile:     Tablet:         Desktop:
[Stack]     [2 columns]     [3 columns + sidebar]
\`\`\``
    };

    return wireframes[platform] || wireframes['web'];
}
