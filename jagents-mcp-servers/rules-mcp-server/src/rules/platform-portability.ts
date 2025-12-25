/**
 * JAGENTS Rule: Platform Portability
 * Purpose: Ensure cross-platform compatibility
 * Category: Architecture
 */

export interface PlatformPortabilityInput {
    architecture: string;
    targetPlatforms?: string[];
}

export const platformPortabilityRule = {
    toolDefinition: {
        name: 'jagents_rule_platform_portability',
        description: 'Validates platform portability and cross-platform compatibility. Ensures architecture works across web, mobile, desktop, and cloud environments.',
        inputSchema: {
            type: 'object',
            properties: {
                architecture: {
                    type: 'string',
                    description: 'Architecture description or design to validate',
                },
                targetPlatforms: {
                    type: 'array',
                    items: { type: 'string' },
                    description: 'Target platforms (web, mobile, desktop, cloud)',
                },
            },
            required: ['architecture'],
        },
    },

    async execute(input: PlatformPortabilityInput): Promise<string> {
        const platforms = input.targetPlatforms || ['web', 'mobile', 'desktop'];

        let output = `# Platform Portability Validation\n\n`;
        output += `**Rule:** Platform Portability\n`;
        output += `**Target Platforms:** ${platforms.join(', ')}\n\n`;

        output += `## Validation Checklist\n\n`;

        // Core Portability Checks
        output += `### Core Requirements\n`;
        output += `- [ ] Platform-agnostic data layer\n`;
        output += `- [ ] Abstracted UI components\n`;
        output += `- [ ] Cross-platform authentication\n`;
        output += `- [ ] Unified API contracts\n`;
        output += `- [ ] Platform-neutral storage\n\n`;

        // Platform-Specific Checks
        platforms.forEach(platform => {
            output += `### ${platform.charAt(0).toUpperCase() + platform.slice(1)} Platform\n`;

            if (platform === 'web') {
                output += `- [ ] Responsive design (mobile, tablet, desktop)\n`;
                output += `- [ ] Browser compatibility (Chrome, Firefox, Safari, Edge)\n`;
                output += `- [ ] Progressive Web App (PWA) capabilities\n`;
                output += `- [ ] Offline support\n\n`;
            } else if (platform === 'mobile') {
                output += `- [ ] iOS compatibility (iOS 14+)\n`;
                output += `- [ ] Android compatibility (API 21+)\n`;
                output += `- [ ] React Native / Flutter considered\n`;
                output += `- [ ] Mobile-specific UX patterns\n\n`;
            } else if (platform === 'desktop') {
                output += `- [ ] Electron or Tauri framework\n`;
                output += `- [ ] Windows compatibility\n`;
                output += `- [ ] macOS compatibility\n`;
                output += `- [ ] Linux compatibility\n\n`;
            } else if (platform === 'cloud') {
                output += `- [ ] Cloud-native architecture\n`;
                output += `- [ ] Multi-cloud support (AWS, Azure, GCP)\n`;
                output += `- [ ] Containerization (Docker)\n`;
                output += `- [ ] Kubernetes orchestration\n\n`;
            }
        });

        output += `## Portability Patterns\n\n`;
        output += `### Recommended Approach\n`;
        output += `1. **Layered Architecture:**\n`;
        output += `   - Presentation Layer (platform-specific)\n`;
        output += `   - Business Logic Layer (shared)\n`;
        output += `   - Data Access Layer (abstracted)\n\n`;

        output += `2. **Abstraction Strategies:**\n`;
        output += `   - Interface-based design\n`;
        output += `   - Dependency injection\n`;
        output += `   - Platform adapters\n`;
        output += `   - Feature flags\n\n`;

        output += `3. **Technology Choices:**\n`;
        output += `   - Cross-platform frameworks (React, Flutter)\n`;
        output += `   - Platform-agnostic APIs (REST, GraphQL)\n`;
        output += `   - Universal authentication (OAuth, JWT)\n`;
        output += `   - Cloud-neutral storage (S3-compatible)\n\n`;

        output += `## Compliance Assessment\n\n`;
        output += `**Status:** ⚠️ Review Required\n\n`;
        output += `**Recommendations:**\n`;
        output += `1. Implement platform abstraction layer\n`;
        output += `2. Use cross-platform UI framework\n`;
        output += `3. Create platform-specific adapters\n`;
        output += `4. Test on all target platforms\n`;

        return output;
    },
};
