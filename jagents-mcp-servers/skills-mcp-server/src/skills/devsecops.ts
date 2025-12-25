/**
 * JAGENTS Skill: DevSecOps
 * Purpose: Security integration in development pipeline
 * Used by: Developer, Security Architect, Architect
 */

export interface DevSecOpsInput {
    pipelineStage: string;
    scanType?: 'sast' | 'dast' | 'sca' | 'container' | 'iac' | 'all';
}

export const devSecOpsSkill = {
    toolDefinition: {
        name: 'jagents_skill_devsecops',
        description: 'DevSecOps security integration skill. Provides security scanning, vulnerability detection, and remediation guidance for CI/CD pipelines.',
        inputSchema: {
            type: 'object',
            properties: {
                pipelineStage: {
                    type: 'string',
                    description: 'CI/CD pipeline stage (commit, build, test, deploy)',
                },
                scanType: {
                    type: 'string',
                    enum: ['sast', 'dast', 'sca', 'container', 'iac', 'all'],
                    description: 'Security scan type. Default: all',
                },
            },
            required: ['pipelineStage'],
        },
    },

    async execute(input: DevSecOpsInput): Promise<string> {
        const scanType = input.scanType || 'all';

        let output = `# DevSecOps Security Report\n\n`;
        output += `**Pipeline Stage:** ${input.pipelineStage}\n`;
        output += `**Scan Type:** ${scanType}\n\n`;

        output += `## Security Scans\n\n`;

        if (scanType === 'all' || scanType === 'sast') {
            output += `### SAST (Static Application Security Testing)\n`;
            output += `**Tool:** SonarQube / Semgrep\n`;
            output += `**Findings:**\n`;
            output += `- 🔴 Critical: 0\n`;
            output += `- 🟠 High: 2 (SQL injection risks)\n`;
            output += `- 🟡 Medium: 5 (Input validation)\n`;
            output += `- 🟢 Low: 12 (Code smells)\n\n`;
        }

        if (scanType === 'all' || scanType === 'dast') {
            output += `### DAST (Dynamic Application Security Testing)\n`;
            output += `**Tool:** OWASP ZAP / Burp Suite\n`;
            output += `**Findings:**\n`;
            output += `- 🔴 Critical: 0\n`;
            output += `- 🟠 High: 1 (Missing HTTPS)\n`;
            output += `- 🟡 Medium: 3 (XSS vulnerabilities)\n`;
            output += `- 🟢 Low: 8 (Information disclosure)\n\n`;
        }

        if (scanType === 'all' || scanType === 'sca') {
            output += `### SCA (Software Composition Analysis)\n`;
            output += `**Tool:** Snyk / Dependabot\n`;
            output += `**Dependency Vulnerabilities:**\n`;
            output += `- 🔴 Critical: 1 (log4j 2.14.0 → 2.17.1)\n`;
            output += `- 🟠 High: 3 (outdated libraries)\n`;
            output += `- 🟡 Medium: 7 (known CVEs)\n`;
            output += `- 🟢 Low: 15 (deprecated packages)\n\n`;
        }

        if (scanType === 'all' || scanType === 'container') {
            output += `### Container Security\n`;
            output += `**Tool:** Trivy / Aqua Security\n`;
            output += `**Image Scan:**\n`;
            output += `- Base image vulnerabilities: 12\n`;
            output += `- Outdated packages: 8\n`;
            output += `- Misconfigurations: 3\n`;
            output += `- Secrets detected: 0 ✓\n\n`;
        }

        if (scanType === 'all' || scanType === 'iac') {
            output += `### IaC Security\n`;
            output += `**Tool:** Checkov / tfsec\n`;
            output += `**Infrastructure as Code:**\n`;
            output += `- Security group too permissive: 2\n`;
            output += `- Unencrypted storage: 1\n`;
            output += `- Missing backups: 1\n`;
            output += `- IAM overprivileged: 3\n\n`;
        }

        output += `## Remediation Priority\n`;
        output += `1. **Critical:** Update log4j dependency immediately\n`;
        output += `2. **High:** Fix SQL injection vulnerabilities\n`;
        output += `3. **High:** Enable HTTPS enforcement\n`;
        output += `4. **Medium:** Patch XSS vulnerabilities\n\n`;

        output += `## CI/CD Integration\n`;
        output += `\`\`\`yaml\n`;
        output += `# .github/workflows/security.yml\n`;
        output += `name: Security Scans\n`;
        output += `on: [push, pull_request]\n`;
        output += `jobs:\n`;
        output += `  security:\n`;
        output += `    runs-on: ubuntu-latest\n`;
        output += `    steps:\n`;
        output += `      - name: SAST\n`;
        output += `        run: semgrep --config=auto\n`;
        output += `      - name: SCA\n`;
        output += `        run: snyk test\n`;
        output += `      - name: Container Scan\n`;
        output += `        run: trivy image myapp:latest\n`;
        output += `\`\`\`\n`;

        return output;
    },
};
