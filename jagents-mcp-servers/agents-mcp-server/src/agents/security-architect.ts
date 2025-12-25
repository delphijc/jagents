/**
 * JAGENTS Agent: Security Architect
 * Role: Enterprise Security Designer / Technical Security Lead
 * Domain: Security Architecture, Application Security, Cloud Security
 */

export interface SecurityArchitectInput {
    system: string;
    securityRequirements?: string;
    complianceFrameworks?: string[];
    generateBddStories?: boolean;
}

export const securityArchitectAgent = {
    toolDefinition: {
        name: 'jagents_security_architect',
        description: 'Enterprise security architect that designs security controls, performs threat modeling, and ensures compliance. Outputs: Security Architecture Document.',
        inputSchema: {
            type: 'object',
            properties: {
                system: {
                    type: 'string',
                    description: 'System description or architecture to secure',
                },
                securityRequirements: {
                    type: 'string',
                    description: 'Specific security requirements or constraints',
                },
                complianceFrameworks: {
                    type: 'array',
                    items: { type: 'string' },
                    description: 'Required compliance frameworks (e.g., HIPAA, PCI-DSS, SOC2)',
                },
                generateBddStories: {
                    type: 'boolean',
                    description: 'Generate BDD user stories from security controls (default: true)',
                },
            },
            required: ['system'],
        },
    },

    async execute(input: SecurityArchitectInput): Promise<string> {
        const frameworks = input.complianceFrameworks || [];

        let output = `# Security Architect - Security Design\n\n`;
        output += `## System Under Analysis\n${input.system.substring(0, 500)}...\n\n`;

        if (frameworks.length > 0) {
            output += `## Compliance Frameworks\n`;
            frameworks.forEach(fw => {
                output += `- ${fw}\n`;
            });
            output += `\n`;
        }

        if (input.securityRequirements) {
            output += `## Security Requirements\n${input.securityRequirements}\n\n`;
        }

        output += `## Security Architecture Document\n\n`;
        output += generateSecurityArchitecture(input.system, frameworks);

        // Generate BDD stories if requested (default: true)
        if (input.generateBddStories !== false) {
            output += `\n## BDD Security Stories\n\n`;
            output += generateBddSecurityStories(input.system, frameworks);
        }

        return output;
    },
};

function generateSecurityArchitecture(system: string, frameworks: string[]): string {
    const timestamp = new Date().toISOString().split('T')[0];

    let arch = `**Document Type:** Security Architecture Document\n`;
    arch += `**Generated:** ${timestamp}\n`;
    arch += `**Frameworks:** ${frameworks.join(', ') || 'General Best Practices'}\n\n`;

    arch += `### 1. Security Principles\n`;
    arch += `- **Zero Trust Architecture:** Never trust, always verify\n`;
    arch += `- **Defense in Depth:** Multiple layers of security\n`;
    arch += `- **Least Privilege:** Minimum necessary access\n`;
    arch += `- **Security by Design:** Built-in from the start\n\n`;

    arch += `### 2. Threat Model\n\n`;
    arch += `**STRIDE Analysis:**\n`;
    arch += `- **S**poofing: Authentication mechanisms\n`;
    arch += `- **T**ampering: Data integrity controls\n`;
    arch += `- **R**epudiation: Audit logging\n`;
    arch += `- **I**nformation Disclosure: Encryption, access controls\n`;
    arch += `- **D**enial of Service: Rate limiting, scalability\n`;
    arch += `- **E**levation of Privilege: Authorization checks\n\n`;

    arch += `### 3. Security Controls\n\n`;
    arch += `**Authentication & Authorization:**\n`;
    arch += `- Multi-Factor Authentication (MFA)\n`;
    arch += `- Role-Based Access Control (RBAC)\n`;
    arch += `- JWT / OAuth 2.0\n`;
    arch += `- Session management\n\n`;

    arch += `**Data Protection:**\n`;
    arch += `- Encryption at rest (AES-256)\n`;
    arch += `- Encryption in transit (TLS 1.3)\n`;
    arch += `- Data classification\n`;
    arch += `- Secure key management\n\n`;

    arch += `**Application Security:**\n`;
    arch += `- Input validation\n`;
    arch += `- Output encoding\n`;
    arch += `- CSRF protection\n`;
    arch += `- XSS prevention\n`;
    arch += `- SQL injection prevention\n\n`;

    arch += `**Network Security:**\n`;
    arch += `- Firewall rules\n`;
    arch += `- Network segmentation\n`;
    arch += `- WAF (Web Application Firewall)\n`;
    arch += `- DDoS protection\n\n`;

    if (frameworks.includes('NIST-CSF') || frameworks.includes('ISO-27001')) {
        arch += `### 4. Compliance Controls\n`;
        arch += `**Access Control:**\n`;
        arch += `- User access reviews (quarterly)\n`;
        arch += `- Privilege management\n`;
        arch += `- Access logging\n\n`;

        arch += `**Monitoring & Response:**\n`;
        arch += `- SIEM integration\n`;
        arch += `- Incident response plan\n`;
        arch += `- Security metrics\n\n`;
    }

    arch += `### 5. DevSecOps Integration\n`;
    arch += `**Security in CI/CD:**\n`;
    arch += `- SAST (Static Application Security Testing)\n`;
    arch += `- DAST (Dynamic Application Security Testing)\n`;
    arch += `- SCA (Software Composition Analysis)\n`;
    arch += `- Container scanning\n`;
    arch += `- Secret scanning\n\n`;

    arch += `### 6. Security Testing\n`;
    arch += `- Vulnerability scanning\n`;
    arch += `- Penetration testing (annual)\n`;
    arch += `- Security code review\n`;
    arch += `- Threat modeling updates\n\n`;

    arch += `### 7. Operational Security\n`;
    arch += `- Patch management\n`;
    arch += `- Security awareness training\n`;
    arch += `- Incident response procedures\n`;
    arch += `- Business continuity planning\n\n`;

    arch += `---\n`;
    arch += `*Security architecture ready for implementation and validation*\n`;

    return arch;
}

function generateBddSecurityStories(system: string, frameworks: string[]): string {
    let stories = `*Generated from security architecture for automated testing*\n\n`;

    stories += `### IAM Stories\n\n`;
    stories += `- [ ] **As a Security Architect**, I want to ensure multi-factor authentication is required for all user accounts, so that unauthorized access is prevented.\n`;
    stories += `  - **Framework Mapping:** CIS 6.3, NIST PR.AC-7, ISO A.9.4.2\n\n`;

    stories += `- [ ] **As a Security Architect**, I want to implement role-based access control (RBAC), so that users only have access to resources they need.\n`;
    stories += `  - **Framework Mapping:** CIS 6.8, NIST PR.AC-4, ISO A.9.4.1\n\n`;

    stories += `### Data Protection Stories\n\n`;
    stories += `- [ ] **As a Security Architect**, I want all sensitive data encrypted at rest using AES-256, so that data breaches do not expose sensitive information.\n`;
    stories += `  - **Framework Mapping:** CIS 3.11, NIST PR.DS-1, ISO A.10.1.1\n\n`;

    stories += `- [ ] **As a Security Architect**, I want all data in transit encrypted using TLS 1.3, so that network eavesdropping cannot intercept sensitive data.\n`;
    stories += `  - **Framework Mapping:** CIS 3.10, NIST PR.DS-2, ISO A.10.1.2\n\n`;

    stories += `### Application Security Stories\n\n`;
    stories += `- [ ] **As a Security Architect**, I want all user inputs validated and sanitized, so that injection attacks are prevented.\n`;
    stories += `  - **Framework Mapping:** OWASP A03, CIS 16.5\n\n`;

    stories += `- [ ] **As a Security Architect**, I want CSRF protection enabled on all forms, so that cross-site request forgery attacks are blocked.\n`;
    stories += `  - **Framework Mapping:** OWASP A01, CIS 16.11\n\n`;

    stories += `### Network Security Stories\n\n`;
    stories += `- [ ] **As a Security Architect**, I want network segmentation implemented with VLANs, so that lateral movement is restricted.\n`;
    stories += `  - **Framework Mapping:** CIS 12.2, NIST PR.AC-5\n\n`;

    stories += `- [ ] **As a Security Architect**, I want a web application firewall (WAF) deployed, so that common web attacks are blocked.\n`;
    stories += `  - **Framework Mapping:** CIS 9.5, OWASP AppSec\n\n`;

    stories += `### Monitoring Stories\n\n`;
    stories += `- [ ] **As a Security Architect**, I want all authentication attempts logged, so that suspicious access can be detected.\n`;
    stories += `  - **Framework Mapping:** CIS 8.2, NIST DE.CM-1, ISO A.12.4.1\n\n`;

    stories += `- [ ] **As a Security Architect**, I want a SIEM solution deployed, so that security events are correlated and analyzed.\n`;
    stories += `  - **Framework Mapping:** CIS 8.11, NIST DE.AE-3\n\n`;

    if (frameworks.includes('PCI-DSS')) {
        stories += `### PCI-DSS Specific Stories\n\n`;
        stories += `- [ ] **As a Security Architect**, I want cardholder data encrypted and tokenized, so that PCI-DSS 3.4 is satisfied.\n\n`;
        stories += `- [ ] **As a Security Architect**, I want quarterly vulnerability scans performed, so that PCI-DSS 11.2 is satisfied.\n\n`;
    }

    if (frameworks.includes('HIPAA')) {
        stories += `### HIPAA Specific Stories\n\n`;
        stories += `- [ ] **As a Security Architect**, I want PHI encrypted both at rest and in transit, so that HIPAA Security Rule is satisfied.\n\n`;
        stories += `- [ ] **As a Security Architect**, I want audit logs maintained for all PHI access, so that HIPAA audit requirements are met.\n\n`;
    }

    stories += `---\n`;
    stories += `*These BDD stories can be used by the Security Test Analyst to create automated tests*\n`;

    return stories;
}
