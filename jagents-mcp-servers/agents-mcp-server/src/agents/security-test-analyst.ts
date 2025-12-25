/**
 * JAGENTS Agent: Security Test Analyst (STA)
 * Role: BDD Security Validator / Security Testing Strategist
 * Domain: Security Testing, BDD Test Generation, Compliance Validation
 */

export interface SecurityTestAnalystInput {
    securityRequirement: string;
    targetFrameworks?: string[]; // CIS, NIST, ISO, PCI-DSS, HIPAA, SOC2
    testingScope?: 'unit' | 'integration' | 'e2e' | 'compliance' | 'penetration';
    generateAutomation?: boolean;
}

export const securityTestAnalystAgent = {
    toolDefinition: {
        name: 'jagents_security_test_analyst',
        description: 'Security Test Analyst that creates BDD security test scenarios from requirements. Generates Gherkin tests, automation code, and compliance matrices. Validates security controls.',
        inputSchema: {
            type: 'object',
            properties: {
                securityRequirement: {
                    type: 'string',
                    description: 'Security requirement as BDD user story or description',
                },
                targetFrameworks: {
                    type: 'array',
                    items: { type: 'string' },
                    description: 'Compliance frameworks to map tests to (CIS, NIST, ISO, PCI-DSS, HIPAA, SOC2)',
                },
                testingScope: {
                    type: 'string',
                    enum: ['unit', 'integration', 'e2e', 'compliance', 'penetration'],
                    description: 'Scope of security testing. Default: compliance',
                },
                generateAutomation: {
                    type: 'boolean',
                    description: 'Whether to generate test automation code. Default: true',
                },
            },
            required: ['securityRequirement'],
        },
    },

    async execute(input: SecurityTestAnalystInput): Promise<string> {
        const frameworks = input.targetFrameworks || ['CIS', 'NIST'];
        const scope = input.testingScope || 'compliance';
        const generateCode = input.generateAutomation !== false;

        let output = `# Security Test Analyst (STA) - BDD Security Testing\n\n`;
        output += `## Security Requirement\n${input.securityRequirement}\n\n`;
        output += `## Testing Scope: ${scope.toUpperCase()}\n`;
        output += `## Target Frameworks: ${frameworks.join(', ')}\n\n`;

        // Parse BDD story
        output += `## BDD Story Analysis\n\n`;
        output += parseBddStory(input.securityRequirement);

        // Map to frameworks
        output += `\n## Compliance Framework Mapping\n\n`;
        output += mapToFrameworks(input.securityRequirement, frameworks);

        // Generate Gherkin scenarios
        output += `\n## Gherkin Test Scenarios\n\n`;
        output += generateGherkinScenarios(input.securityRequirement, scope);

        // Generate automation code
        if (generateCode) {
            output += `\n## Test Automation Code\n\n`;
            output += generateTestAutomation(input.securityRequirement, scope);
        }

        // Generate compliance matrix
        output += `\n## Compliance Test Matrix\n\n`;
        output += generateComplianceMatrix(input.securityRequirement, frameworks);

        return output;
    },
};

function parseBddStory(requirement: string): string {
    let analysis = `### Extracted Components\n\n`;

    // Try to parse As-a/I-want/So-that format
    const asMatch = requirement.match(/As (?:a|an) ([^,]+)/i);
    const wantMatch = requirement.match(/I want (?:to )?([^,]+?)(?:,| so that)/i);
    const soMatch = requirement.match(/so that ([^.]+)/i);

    if (asMatch || wantMatch || soMatch) {
        analysis += `**Role:** ${asMatch ? asMatch[1].trim() : '[Not specified]'}\n`;
        analysis += `**Goal:** ${wantMatch ? wantMatch[1].trim() : '[Not specified]'}\n`;
        analysis += `**Benefit:** ${soMatch ? soMatch[1].trim() : '[Not specified]'}\n\n`;
    } else {
        analysis += `**Requirement:** ${requirement.substring(0, 200)}...\n\n`;
    }

    // Extract security control type
    analysis += `**Security Control Type:** `;
    if (/mfa|multi-factor|authentication/i.test(requirement)) {
        analysis += `Identity & Access Management (IAM)\n`;
    } else if (/encrypt|data protection|backup/i.test(requirement)) {
        analysis += `Data Protection\n`;
    } else if (/log|monitor|siem|audit/i.test(requirement)) {
        analysis += `Logging & Monitoring\n`;
    } else if (/network|firewall|segmentation/i.test(requirement)) {
        analysis += `Network Security\n`;
    } else if (/vulnerability|patch|scan/i.test(requirement)) {
        analysis += `Vulnerability Management\n`;
    } else if (/incident|response|recovery/i.test(requirement)) {
        analysis += `Incident Response\n`;
    } else {
        analysis += `General Security\n`;
    }

    return analysis;
}

function mapToFrameworks(requirement: string, frameworks: string[]): string {
    let mapping = '';

    frameworks.forEach(framework => {
        mapping += `### ${framework}\n\n`;

        if (framework === 'CIS') {
            mapping += getCisMapping(requirement);
        } else if (framework === 'NIST') {
            mapping += getNistMapping(requirement);
        } else if (framework === 'ISO') {
            mapping += getIsoMapping(requirement);
        } else if (framework === 'PCI-DSS') {
            mapping += getPciMapping(requirement);
        } else {
            mapping += `Mapped controls for ${framework} framework\n`;
        }

        mapping += `\n`;
    });

    return mapping;
}

function getCisMapping(requirement: string): string {
    // Simplified CIS Controls mapping
    if (/mfa|multi-factor/i.test(requirement)) {
        return `**CIS Control 6.3** - Require MFA for Externally-Exposed Applications\n**CIS Control 6.4** - Require MFA for Remote Network Access\n`;
    } else if (/encrypt/i.test(requirement)) {
        return `**CIS Control 3.11** - Encrypt Sensitive Data at Rest\n**CIS Control 3.10** - Encrypt Sensitive Data in Transit\n`;
    } else if (/log|audit/i.test(requirement)) {
        return `**CIS Control 8.2** - Collect Audit Logs\n**CIS Control 8.5** - Collect Detailed Audit Logs\n`;
    } else if (/firewall|network/i.test(requirement)) {
        return `**CIS Control 4.4** - Implement and Manage a Firewall\n**CIS Control 12.2** - Establish and Maintain a Secure Network Architecture\n`;
    }
    return `**CIS Controls** mapped based on requirement analysis\n`;
}

function getNistMapping(requirement: string): string {
    // Simplified NIST CSF mapping
    if (/mfa|authentication/i.test(requirement)) {
        return `**PR.AC-7** - Users have unique credentials\n**PR.AC-1** - Identities and credentials are issued, managed, and verified\n`;
    } else if (/encrypt/i.test(requirement)) {
        return `**PR.DS-1** - Data-at-rest is protected\n**PR.DS-2** - Data-in-transit is protected\n`;
    } else if (/detect|monitor/i.test(requirement)) {
        return `**DE.CM-1** - The network is monitored\n**DE.AE-3** - Event data are collected and correlated\n`;
    }
    return `**NIST CSF** controls mapped\n`;
}

function getIsoMapping(requirement: string): string {
    if (/authentication|access/i.test(requirement)) {
        return `**ISO 27001 A.9.4.2** - Secure log-on procedures\n**ISO 27001 A.9.2.1** - User registration and de-registration\n`;
    } else if (/encrypt/i.test(requirement)) {
        return `**ISO 27001 A.10.1.1** - Policy on the use of cryptographic controls\n`;
    }
    return `**ISO 27001/27002** controls mapped\n`;
}

function getPciMapping(requirement: string): string {
    if (/mfa|authentication/i.test(requirement)) {
        return `**PCI-DSS 8.3** - Secure all individual non-console administrative access\n`;
    } else if (/encrypt/i.test(requirement)) {
        return `**PCI-DSS 3.4** - Render PAN unreadable\n**PCI-DSS 4.1** - Use strong cryptography\n`;
    }
    return `**PCI-DSS** requirements mapped\n`;
}

function generateGherkinScenarios(requirement: string, scope: string): string {
    const feature = extractFeatureName(requirement);

    let gherkin = `\`\`\`gherkin\n`;
    gherkin += `Feature: ${feature}\n`;
    gherkin += `  As a security control\n`;
    gherkin += `  I want to ${extractGoal(requirement)}\n`;
    gherkin += `  So that security is maintained\n\n`;

    gherkin += `  Background:\n`;
    gherkin += `    Given the security system is configured\n`;
    gherkin += `    And security controls are enabled\n\n`;

    // Positive scenario
    gherkin += `  Scenario: Successful security control validation\n`;
    gherkin += `    Given the security requirement is implemented\n`;
    gherkin += `    When the security control is tested\n`;
    gherkin += `    Then the control should function correctly\n`;
    gherkin += `    And the security requirement should be met\n\n`;

    // Negative scenario
    gherkin += `  Scenario: Security control bypass attempt\n`;
    gherkin += `    Given the security requirement is implemented\n`;
    gherkin += `    When an attempt is made to bypass the control\n`;
    gherkin += `    Then the bypass should be prevented\n`;
    gherkin += `    And a security alert should be generated\n`;
    gherkin += `    And the attempt should be logged\n\n`;

    // Compliance scenario
    gherkin += `  @compliance @automated\n`;
    gherkin += `  Scenario: Compliance validation\n`;
    gherkin += `    Given the security control is active\n`;
    gherkin += `    When compliance is verified\n`;
    gherkin += `    Then all requirements should be met\n`;
    gherkin += `    And evidence should be collected\n`;
    gherkin += `\`\`\`\n`;

    return gherkin;
}

function extractFeatureName(requirement: string): string {
    if (/mfa/i.test(requirement)) return 'Multi-Factor Authentication Enforcement';
    if (/encrypt/i.test(requirement)) return 'Data Encryption Validation';
    if (/log|audit/i.test(requirement)) return 'Security Logging and Monitoring';
    if (/firewall/i.test(requirement)) return 'Firewall Rule Validation';
    return 'Security Control Validation';
}

function extractGoal(requirement: string): string {
    const wantMatch = requirement.match(/I want (?:to )?([^,]+?)(?:,| so that)/i);
    if (wantMatch) return wantMatch[1].trim();
    return 'validate the security requirement';
}

function generateTestAutomation(requirement: string, scope: string): string {
    let code = `### Python (pytest-bdd)\n\n`;
    code += `\`\`\`python\n`;
    code += `# test_${scope}_security.py\n`;
    code += `import pytest\n`;
    code += `from pytest_bdd import scenarios, given, when, then\n\n`;
    code += `scenarios('security_control.feature')\n\n`;
    code += `@given('the security requirement is implemented')\n`;
    code += `def security_implemented(security_system):\n`;
    code += `    assert security_system.is_configured() == True\n\n`;
    code += `@when('the security control is tested')\n`;
    code += `def test_control(security_system):\n`;
    code += `    security_system.run_test()\n\n`;
    code += `@then('the control should function correctly')\n`;
    code += `def verify_control(security_system):\n`;
    code += `    assert security_system.control_status() == 'pass'\n`;
    code += `\`\`\`\n`;

    return code;
}

function generateComplianceMatrix(requirement: string, frameworks: string[]): string {
    let matrix = `| Security Requirement | Test Scenario | ${frameworks.join(' | ')} | Status |\n`;
    matrix += `|---------------------|---------------|${frameworks.map(() => '---').join('|')}|--------|\n`;
    matrix += `| ${requirement.substring(0, 50)}... | Security Control Validation | `;
    matrix += frameworks.map(f => `${f} ✓`).join(' | ');
    matrix += ` | ⏳ Pending |\n`;

    return matrix;
}
