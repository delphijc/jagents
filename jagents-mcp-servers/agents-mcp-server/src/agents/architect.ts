/**
 * JAGENTS Agent: Architect
 * Role: Technical Blueprint Designer / Consistency Enforcer
 * Domain: Solutioning, Technology Stack Definition, and Context Preparation (Agile method Phase 3)
 */

export interface ArchitectInput {
    prd: string;
    projectType?: 'web-app' | 'mobile-app' | 'api' | 'cli' | 'desktop' | 'full-stack';
    constraints?: string;
}

export const architectAgent = {
    toolDefinition: {
        name: 'jagents_architect',
        description: 'Technical blueprint designer that converts PRDs into architecture documents. Defines tech stack, coding standards, and creates sharded context. Outputs: Architecture Document.',
        inputSchema: {
            type: 'object',
            properties: {
                prd: {
                    type: 'string',
                    description: 'Product Requirements Document from Product Manager (Phase 2 output)',
                },
                projectType: {
                    type: 'string',
                    enum: ['web-app', 'mobile-app', 'api', 'cli', 'desktop', 'full-stack'],
                    description: 'Type of project to architect. Default: auto-detect',
                },
                constraints: {
                    type: 'string',
                    description: 'Technical constraints (e.g., must use Python, serverless only)',
                },
            },
            required: ['prd'],
        },
    },

    async execute(input: ArchitectInput): Promise<string> {
        const projectType = input.projectType || detectProjectType(input.prd);

        let output = `# Architect - Technical Blueprint\n\n`;
        output += `## Input: PRD\n${input.prd.substring(0, 500)}...\n\n`;
        output += `## Detected Project Type: ${projectType.toUpperCase()}\n\n`;

        if (input.constraints) {
            output += `## Technical Constraints\n${input.constraints}\n\n`;
        }

        output += `## Architecture Document\n\n`;
        output += generateArchitecture(input.prd, projectType);

        return output;
    },
};

function detectProjectType(prd: string): string {
    const lowerPRD = prd.toLowerCase();

    if (lowerPRD.includes('mobile app') || lowerPRD.includes('ios') || lowerPRD.includes('android')) {
        return 'mobile-app';
    } else if (lowerPRD.includes('api') || lowerPRD.includes('rest') || lowerPRD.includes('graphql')) {
        return 'api';
    } else if (lowerPRD.includes('command line') || lowerPRD.includes('cli') || lowerPRD.includes('terminal')) {
        return 'cli';
    } else if (lowerPRD.includes('desktop') || lowerPRD.includes('electron')) {
        return 'desktop';
    } else if (lowerPRD.includes('full-stack') || (lowerPRD.includes('frontend') && lowerPRD.includes('backend'))) {
        return 'full-stack';
    } else {
        return 'web-app';
    }
}

function generateArchitecture(prd: string, projectType: string): string {
    const timestamp = new Date().toISOString().split('T')[0];

    let arch = `**Document Type:** Architecture Document\n`;
    arch += `**Project Type:** ${projectType}\n`;
    arch += `**Generated:** ${timestamp}\n`;
    arch += `**Phase:** Agile method Phase 3\n\n`;

    arch += `### 1. Technology Stack\n\n`;
    arch += getTechStack(projectType);

    arch += `\n### 2. System Architecture\n\n`;
    arch += getSystemArchitecture(projectType);

    arch += `\n### 3. Data Architecture\n`;
    arch += `- **Database:** [Specify: PostgreSQL, MongoDB, etc.]\n`;
    arch += `- **Caching:** [Redis, Memcached, or None]\n`;
    arch += `- **Storage:** [AWS S3, local filesystem, etc.]\n\n`;

    arch += `### 4. API Design\n`;
    arch += `- **Protocol:** REST / GraphQL / gRPC\n`;
    arch += `- **Authentication:** JWT / OAuth 2.0 / API Keys\n`;
    arch += `- **Rate Limiting:** Yes / No\n\n`;

    arch += `### 5. Security Architecture\n`;
    arch += `- **Authentication & Authorization**\n`;
    arch += `- **Data Encryption** (at rest and in transit)\n`;
    arch += `- **Input Validation**\n`;
    arch += `- **CSRF/XSS Protection**\n\n`;

    arch += `### 6. Coding Standards\n`;
    arch += `- **Code Style:** [Specify linter/formatter]\n`;
    arch += `- **Documentation:** JSDoc / Python docstrings / etc.\n`;
    arch += `- **Testing:** Unit tests required (>80% coverage)\n`;
    arch += `- **Git Workflow:** Feature branches + PR reviews\n\n`;

    arch += `### 7. Deployment Strategy\n`;
    arch += `- **Environment:** Development → Staging → Production\n`;
    arch += `- **CI/CD:** GitHub Actions / GitLab CI / Jenkins\n`;
    arch += `- **Hosting:** [Cloud provider or on-premise]\n`;
    arch += `- **Monitoring:** Logging + metrics + alerting\n\n`;

    arch += `### 8. Context Sharding (Files for Developer)\n`;
    arch += `The following context files will be created:\n`;
    arch += `- \`coding_standards.md\` - Detailed coding conventions\n`;
    arch += `- \`tech_stack.md\` - Complete technology specifications\n`;
    arch += `- \`source_tree.md\` - Project structure and file organization\n\n`;

    arch += `---\n`;
    arch += `*This Architecture Document serves as input to the Developer (Agile method Phase 5)*\n`;

    return arch;
}

function getTechStack(projectType: string): string {
    const stacks: Record<string, string> = {
        'web-app': `
**Frontend:**
- Framework: React 18+ / Vue 3+ / Next.js
- Language: TypeScript
- Styling: Tailwind CSS / CSS Modules
- State: Redux / Zustand / React Context

**Backend:**
- Runtime: Node.js 20+ / Python 3.11+
- Framework: Express / FastAPI / NestJS
- Language: TypeScript / Python`,

        'mobile-app': `
**Framework:** React Native / Flutter / Swift (iOS) / Kotlin (Android)
**Language:** TypeScript / Dart / Swift / Kotlin
**State Management:** Redux / Provider / MobX
**API Client:** Axios / Fetch`,

        'api': `
**Runtime:** Node.js 20+ / Python 3.11+ / Go 1.21+
**Framework:** Express / FastAPI / Gin / NestJS
**Language:** TypeScript / Python / Go
**Documentation:** OpenAPI/Swagger`,

        'cli': `
**Language:** Python / Node.js / Go / Rust
**Framework:** Click / Commander / Cobra / Clap
**Package Manager:** pip / npm / go mod / cargo`,

        'desktop': `
**Framework:** Electron / Tauri / Qt
**Frontend:** React / Vue / Svelte
**Language:** TypeScript / Rust / C++`,

        'full-stack': `
**Frontend:** Next.js / Nuxt / SvelteKit
**Backend:** Node.js / Python / Go
**Database:** PostgreSQL / MongoDB
**Deployment:** Vercel / AWS / Docker`,
    };

    return stacks[projectType] || stacks['web-app'];
}

function getSystemArchitecture(projectType: string): string {
    if (projectType === 'web-app' || projectType === 'full-stack') {
        return `
**Architecture Pattern:** MVC / Clean Architecture / Layered

**Layers:**
1. **Presentation Layer:** UI components, pages, routes
2. **Business Logic Layer:** Services, use cases, domain models
3. **Data Access Layer:** Repositories, database queries
4. **Infrastructure Layer:** External APIs, file system, caching

**Communication:** RESTful API / GraphQL between frontend and backend`;
    }

    return `**Architecture Pattern:** Modular / Component-based\n**Structure:** [Define based on project type]`;
}
