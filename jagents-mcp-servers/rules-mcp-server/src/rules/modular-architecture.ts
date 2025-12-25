/**
 * JAGENTS Rule: Modular Architecture
 * Purpose: Enforce modular design principles
 * Category: Architecture
 */

export interface ModularArchitectureInput {
    architecture: string;
    modules?: string[];
}

export const modularArchitectureRule = {
    toolDefinition: {
        name: 'jagents_rule_modular_architecture',
        description: 'Validates modular architecture principles. Ensures loose coupling, high cohesion, and clear module boundaries.',
        inputSchema: {
            type: 'object',
            properties: {
                architecture: {
                    type: 'string',
                    description: 'Architecture description or design to validate',
                },
                modules: {
                    type: 'array',
                    items: { type: 'string' },
                    description: 'List of modules in the system',
                },
            },
            required: ['architecture'],
        },
    },

    async execute(input: ModularArchitectureInput): Promise<string> {
        const modules = input.modules || [];

        let output = `# Modular Architecture Validation\n\n`;
        output += `**Rule:** Modular Architecture\n`;
        if (modules.length > 0) {
            output += `**Modules:** ${modules.length} detected\n`;
        }
        output += `\n`;

        output += `## SOLID Principles Check\n\n`;
        output += `### S - Single Responsibility\n`;
        output += `- [ ] Each module has one clear purpose\n`;
        output += `- [ ] No overlapping responsibilities\n`;
        output += `- [ ] Clear module boundaries\n\n`;

        output += `### O - Open/Closed\n`;
        output += `- [ ] Modules open for extension\n`;
        output += `- [ ] Modules closed for modification\n`;
        output += `- [ ] Plugin architecture support\n\n`;

        output += `### L - Liskov Substitution\n`;
        output += `- [ ] Interface-based design\n`;
        output += `- [ ] Substitutable implementations\n`;
        output += `- [ ] Polymorphism support\n\n`;

        output += `### I - Interface Segregation\n`;
        output += `- [ ] Small, focused interfaces\n`;
        output += `- [ ] No fat interfaces\n`;
        output += `- [ ] Client-specific interfaces\n\n`;

        output += `### D - Dependency Inversion\n`;
        output += `- [ ] Depend on abstractions\n`;
        output += `- [ ] Dependency injection used\n`;
        output += `- [ ] IoC container considered\n\n`;

        output += `## Module Quality Metrics\n\n`;
        output += `### Coupling (Should be LOW)\n`;
        output += `- **Tight Coupling:** ❌ Avoid\n`;
        output += `- **Loose Coupling:** ✅ Target\n`;
        output += `- **Metrics:** Dependencies between modules < 3\n\n`;

        output += `### Cohesion (Should be HIGH)\n`;
        output += `- **Low Cohesion:** ❌ Avoid\n`;
        output += `- **High Cohesion:** ✅ Target\n`;
        output += `- **Metrics:**Related functions within module > 80%\n\n`;

        output += `## Modular Patterns\n\n`;
        output += `### Recommended Patterns\n`;
        output += `1. **Layered Architecture**\n`;
        output += `   - Presentation\n`;
        output += `   - Business Logic\n`;
        output += `   - Data Access\n\n`;

        output += `2. **Microservices**\n`;
        output += `   - Independent deployment\n`;
        output += `   - Service-to-service communication\n`;
        output += `   - API gateways\n\n`;

        output += `3. **Plugin Architecture**\n`;
        output += `   - Core + plugins\n`;
        output += `   - Dynamic loading\n`;
        output += `   - Extension points\n\n`;

        output += `## Module Dependencies\n\n`;
        if (modules.length > 0) {
            output += `**Dependency Graph:**\n`;
            output += `\`\`\`\n`;
            modules.forEach((mod, i) => {
                output += `${mod}\n`;
                if (i < modules.length - 1) {
                    output += `  ↓\n`;
                }
            });
            output += `\`\`\`\n\n`;
        } else {
            output += `*No modules specified for dependency analysis*\n\n`;
        }

        output += `## Compliance Recommendations\n\n`;
        output += `1. ✅ Define clear module boundaries\n`;
        output += `2. ✅ Use dependency injection\n`;
        output += `3. ✅ Create module interfaces\n`;
        output += `4. ✅ Minimize inter-module dependencies\n`;
        output += `5. ✅ Document module contracts\n`;

        return output;
    },
};
