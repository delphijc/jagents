/**
 * JAGENTS Skill: Content Creation
 * Purpose: Generate documentation and content
 * Used by: All agents
 */

export interface ContentCreationInput {
    contentType: 'documentation' | 'readme' | 'tutorial' | 'blog' | 'presentation';
    topic: string;
    audience?: string;
}

export const contentCreationSkill = {
    toolDefinition: {
        name: 'jagents_skill_content_creation',
        description: 'Creates professional documentation, READMEs, tutorials, blog posts, and presentations. Tailored to target audience.',
        inputSchema: {
            type: 'object',
            properties: {
                contentType: {
                    type: 'string',
                    enum: ['documentation', 'readme', 'tutorial', 'blog', 'presentation'],
                    description: 'Type of content to create',
                },
                topic: {
                    type: 'string',
                    description: 'Topic or subject matter',
                },
                audience: {
                    type: 'string',
                    description: 'Target audience (developers, executives, end-users, etc.)',
                },
            },
            required: ['contentType', 'topic'],
        },
    },

    async execute(input: ContentCreationInput): Promise<string> {
        const audience = input.audience || 'general';

        let output = `# ${input.topic}\n\n`;

        switch (input.contentType) {
            case 'documentation':
                output += generateDocumentation(input.topic, audience);
                break;
            case 'readme':
                output += generateReadme(input.topic);
                break;
            case 'tutorial':
                output += generateTutorial(input.topic, audience);
                break;
            case 'blog':
                output += generateBlogPost(input.topic);
                break;
            case 'presentation':
                output += generatePresentation(input.topic, audience);
                break;
        }

        return output;
    },
};

function generateDocumentation(topic: string, audience: string): string {
    return `## Overview

[Introduction to ${topic}]

## Getting Started

### Prerequisites
- Requirement 1
- Requirement 2

### Installation
\`\`\`bash
npm install ${topic.toLowerCase().replace(/\s+/g, '-')}
\`\`\`

## Usage

### Basic Example
\`\`\`javascript
// Example code
\`\`\`

### Advanced Features
- Feature 1
- Feature 2

## API Reference

### Methods
- \`method1()\` - Description
- \`method2()\` - Description

## Best Practices
1. Practice 1
2. Practice 2

## Troubleshooting
**Issue:** Common problem
**Solution:** How to fix

## FAQ
**Q:** Common question?
**A:** Answer

## License
MIT
`;
}

function generateReadme(topic: string): string {
    return `
## Description
[Brief description of ${topic}]

## Features
✨ Feature 1
✨ Feature 2
✨ Feature 3

## Installation
\`\`\`bash
npm install
\`\`\`

## Quick Start
\`\`\`javascript
// Quick example
\`\`\`

## Documentation
See [full documentation](./docs)

## Contributing
Contributions welcome! See [CONTRIBUTING.md](./CONTRIBUTING.md)

## License
MIT © [Author]
`;
}

function generateTutorial(topic: string, audience: string): string {
    return `
## What You'll Learn
By the end of this tutorial, you'll be able to:
- [ ] Understand ${topic} fundamentals
- [ ] Build a working example
- [ ] Apply best practices

## Prerequisites
- Basic knowledge of [prerequisite]
- [Tool] installed

## Step 1: Setup
[Setup instructions]

## Step 2: Core Concepts
[Explanation]

## Step 3: Building the Example
[Code walkthrough]

## Step 4: Testing
[How to test]

## Next Steps
- Advanced topic 1
- Advanced topic 2

## Resources
- [Link 1](url)
- [Link 2](url)
`;
}

function generateBlogPost(topic: string): string {
    return `
*Published: ${new Date().toISOString().split('T')[0]}*

## Introduction
[Hook that grabs attention about ${topic}]

## The Problem
[Describe the problem/challenge]

## The Solution
[Introduce your approach/solution]

## How It Works
[Detailed explanation with examples]

\`\`\`code
// Example
\`\`\`

## Benefits
1. **Benefit 1:** Description
2. **Benefit 2:** Description
3. **Benefit 3:** Description

## Real-World Example
[Case study or practical application]

## Conclusion
[Summary and call-to-action]

---
*Tags: #${topic.replace(/\s+/g, '')} #development*
`;
}

function generatePresentation(topic: string, audience: string): string {
    return `
## Slide 1: Title
**${topic}**
*Presented for ${audience}*

---

## Slide 2: Agenda
1. Problem Statement
2. Solution Overview
3. Technical Details
4. Demo
5. Q&A

---

## Slide 3: The Problem
- Pain point 1
- Pain point 2
- Why it matters

---

## Slide 4: Our Solution
**Key Innovation:** [Main idea]
- Approach 1
- Approach 2

---

## Slide 5: Technical Architecture
[High-level diagram description]

---

## Slide 6: Demo
[Live demonstration notes]

---

## Slide 7: Benefits
✓ Benefit 1
✓ Benefit 2
✓ Benefit 3

---

## Slide 8: Next Steps
1. Action item 1
2. Action item 2

---

## Slide 9: Q&A
Questions?
`;
}
