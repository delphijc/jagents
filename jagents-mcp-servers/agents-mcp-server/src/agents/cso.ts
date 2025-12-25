/**
 * JAGENTS Agent: Chief Security Officer (CSO)
 * Role: Executive Cybersecurity Leader / Security Strategist
 * Domain: Security Strategy, GRC Oversight, Team Leadership
 */

export interface CsoInput {
    organizationContext: string;
    securityConcerns?: string[];
    budget?: string;
    prioritizeBddStories?: boolean;
}

export const csoAgent = {
    toolDefinition: {
        name: 'jagents_cso',
        description: 'Chief Security Officer for executive security strategy and governance. Includes BDD story prioritization. Manages security programs, budgets, and compliance. Outputs: Security Strategy and Roadmap.',
        inputSchema: {
            type: 'object',
            properties: {
                organizationContext: {
                    type: 'string',
                    description: 'Organization description, size, industry, current security posture',
                },
                securityConcerns: {
                    type: 'array',
                    items: { type: 'string' },
                    description: 'Specific security concerns or initiatives',
                },
                budget: {
                    type: 'string',
                    description: 'Budget constraints or target (e.g., "$5M annually")',
                },
                prioritizeBddStories: {
                    type: 'boolean',
                    description: 'Generate risk-prioritized BDD story roadmap (default: true)',
                },
            },
            required: ['organizationContext'],
        },
    },

    async execute(input: CsoInput): Promise<string> {
        const concerns = input.securityConcerns || [];

        let output = `# Chief Security Officer (CSO) - Security Strategy\n\n`;
        output += `## Organization Context\n${input.organizationContext}\n\n`;

        if (input.budget) {
            output += `## Budget\n${input.budget}\n\n`;
        }

        if (concerns.length > 0) {
            output += `## Security Concerns\n`;
            concerns.forEach(concern => {
                output += `- ${concern}\n`;
            });
            output += `\n`;
        }

        output += `## Executive Security Strategy\n\n`;
        output += generateSecurityStrategy(input.organizationContext, concerns);

        output += `\n## Security Program Roadmap\n\n`;
        output += generateSecurityRoadmap(input.organizationContext);

        // Generate BDD story prioritization if requested (default: true)
        if (input.prioritizeBddStories !== false) {
            output += `\n## BDD Security Story Prioritization\n\n`;
            output += generateBddPrioritization(concerns);
        }

        return output;
    },
};

function generateSecurityStrategy(context: string, concerns: string[]): string {
    const timestamp = new Date().toISOString().split('T')[0];

    let strategy = `**Document Type:** Enterprise Security Strategy\n`;
    strategy += `**Generated:** ${timestamp}\n`;
    strategy += `**Executive Level:** C-Suite\n\n`;

    strategy += `### 1. Executive Summary\n\n`;
    strategy += `**Vision:** Establish a robust security posture that enables business growth while protecting critical assets.\n\n`;
    strategy += `**Mission:** Implement defense-in-depth security controls, maintain compliance, and cultivate a security-aware culture.\n\n`;
    strategy += `**Strategic Objectives:**\n`;
    strategy += `1. Achieve compliance with industry regulations\n`;
    strategy += `2. Reduce security risk to acceptable levels\n`;
    strategy += `3. Enable secure digital transformation\n`;
    strategy += `4. Build resilient security operations\n`;
    strategy += `5. Develop security-aware workforce\n\n`;

    strategy += `### 2. Security Framework\n\n`;
    strategy += `**Primary Framework:** NIST Cybersecurity Framework\n\n`;
    strategy += `**Core Functions:**\n`;
    strategy += `1. **Identify:** Asset management, risk assessment\n`;
    strategy += `2. **Protect:** Access control, data security, awareness training\n`;
    strategy += `3. **Detect:** Continuous monitoring, anomaly detection\n`;
    strategy += `4. **Respond:** Incident response, communication\n`;
    strategy += `5. **Recover:** Recovery planning, business continuity\n\n`;

    strategy += `### 3. Risk Management\n\n`;
    strategy += `**Risk Appetite Statement:**\n`;
    strategy += `- Zero tolerance for compliance violations\n`;
    strategy += `- Low tolerance for critical data breaches\n`;
    strategy += `- Moderate tolerance for operational disruptions\n`;
    strategy += `- Calculated risks for innovation initiatives\n\n`;

    strategy += `**Top Risks:**\n`;
    if (concerns.length > 0) {
        concerns.forEach((concern, i) => {
            strategy += `${i + 1}. ${concern}\n`;
        });
    } else {
        strategy += `1. Data breaches and unauthorized access\n`;
        strategy += `2. Ransomware and malware attacks\n`;
        strategy += `3. Insider threats\n`;
        strategy += `4. Supply chain vulnerabilities\n`;
        strategy += `5. Cloud security misconfiguration\n`;
    }
    strategy += `\n`;

    strategy += `### 4. Governance Structure\n\n`;
    strategy += `**Security Leadership:**\n`;
    strategy += `\`\`\`\n`;
    strategy += `[Board of Directors]\n`;
    strategy += `         ↓\n`;
    strategy += `    [CEO/CIO]\n`;
    strategy += `         ↓\n`;
    strategy += `       [CSO] ←── Security Strategy\n`;
    strategy += `    _____|_____\n`;
    strategy += `   |     |     |\n`;
    strategy += ` [Sec   [GRC  [Ops\n`;
    strategy += `  Arch]  Team] Team]\n`;
    strategy += `\`\`\`\n\n`;

    strategy += `**Reporting:**\n`;
    strategy += `- **Board:** Quarterly risk reports\n`;
    strategy += `- **Executive Team:** Monthly security dashboard\n`;
    strategy += `- **Audit Committee:** Compliance status\n\n`;

    strategy += `### 5. Compliance Program\n\n`;
    strategy += `**Regulatory Requirements:**\n`;
    strategy += `- Industry-specific regulations (HIPAA, PCI-DSS, SOX, etc.)\n`;
    strategy += `- Data privacy laws (GDPR, CCPA)\n`;
    strategy += `- Security standards (ISO 27001, SOC 2)\n\n`;

    strategy += `**Compliance Management:**\n`;
    strategy += `- Annual audits and assessments\n`;
    strategy += `- Continuous compliance monitoring\n`;
    strategy += `- Policy review and updates\n`;
    strategy += `- Evidence collection and documentation\n\n`;

    strategy += `### 6. Security Architecture\n\n`;
    strategy += `**Principles:**\n`;
    strategy += `- **Zero Trust:** Never trust, always verify\n`;
    strategy += `- **Defense in Depth:** Layered security controls\n`;
    strategy += `- **Least Privilege:** Minimum necessary access\n`;
    strategy += `- **Secure by Design:** Security built-in from start\n\n`;

    strategy += `**Technology Stack:**\n`;
    strategy += `- **Identity & Access:** MFA, SSO, PAM\n`;
    strategy += `- **Network Security:** Firewall, IDS/IPS, WAF\n`;
    strategy += `- **Endpoint Protection:** EDR, DLP, encryption\n`;
    strategy += `- **Cloud Security:** CSPM, CWPP, CASB\n`;
    strategy += `- **Security Operations:** SIEM, SOAR, Threat Intel\n\n`;

    strategy += `### 7. Team & Organization\n\n`;
    strategy += `**Security Team Structure:**\n`;
    strategy += `- Security Architecture (design & standards)\n`;
    strategy += `- Security Operations (monitoring & response)\n`;
    strategy += `- GRC Team (compliance & risk)\n`;
    strategy += `- Security Engineering (implementation)\n`;
    strategy += `- Security Awareness (training & culture)\n\n`;

    strategy += `**Staffing Plan:**\n`;
    strategy += `- Current headcount: [TBD]\n`;
    strategy += `- Target headcount: [Based on organization size]\n`;
    strategy += `- Key roles to hire: [Based on gaps]\n\n`;

    return strategy;
}

function generateSecurityRoadmap(context: string): string {
    let roadmap = `**12-18 Month Security Roadmap**\n\n`;

    roadmap += `### Phase 1: Foundation (Months 1-3)\n\n`;
    roadmap += `**Objective:** Establish baseline security posture\n\n`;
    roadmap += `**Initiatives:**\n`;
    roadmap += `1. **Security Assessment**\n`;
    roadmap += `   - Conduct comprehensive security audit\n`;
    roadmap += `   - Identify critical gaps\n`;
    roadmap += `   - Prioritize remediation\n\n`;
    roadmap += `2. **Policy & Governance**\n`;
    roadmap += `   - Define security policies\n`;
    roadmap += `   - Establish governance framework\n`;
    roadmap += `   - Create compliance baseline\n\n`;
    roadmap += `3. **Quick Wins**\n`;
    roadmap += `   - Enable MFA organization-wide\n`;
    roadmap += `   - Implement endpoint protection\n`;
    roadmap += `   - Deploy security awareness TRAINING\n\n`;

    roadmap += `**Metrics:**\n`;
    roadmap += `- Security assessment completed\n`;
    roadmap += `- Policies published and approved\n`;
    roadmap += `- MFA adoption >95%\n\n`;

    roadmap += `---\n\n`;
    roadmap += `### Phase 2: Build (Months 4-9)\n\n`;
    roadmap += `**Objective:** Implement core security controls\n\n`;
    roadmap += `**Initiatives:**\n`;
    roadmap += `1. **Identity & Access Management**\n`;
    roadmap += `   - Deploy SSO solution\n`;
    roadmap += `   - Implement RBAC\n`;
    roadmap += `   - Privileged access management\n\n`;
    roadmap += `2. **Security Operations**\n`;
    roadmap += `   - Deploy SIEM platform\n`;
    roadmap += `   - Establish SOC (Security Operations Center)\n`;
    roadmap += `   - Implement incident response procedures\n\n`;
    roadmap += `3. **Application Security**\n`;
    roadmap += `   - Integrate SAST/DAST in CI/CD\n`;
    roadmap += `   - Security code review process\n`;
    roadmap += `   - Vulnerability management program\n\n`;
    roadmap += `4. **Cloud Security**\n`;
    roadmap += `   - Cloud security posture management\n`;
    roadmap += `   - Container security\n`;
    roadmap += `   - Cloud access security broker\n\n`;

    roadmap += `**Metrics:**\n`;
    roadmap += `- SSO deployment: 100% coverage\n`;
    roadmap += `- SOC operational 24/7\n`;
    roadmap += `- Security scans in all pipelines\n\n`;

    roadmap += `---\n\n`;
    roadmap += `### Phase 3: Mature (Months 10-18)\n\n`;
    roadmap += `**Objective:** Achieve security maturity and resilience\n\n`;
    roadmap += `**Initiatives:**\n`;
    roadmap += `1. **Advanced Threat Protection**\n`;
    roadmap += `   - Threat hunting program\n`;
    roadmap += `   - Threat intelligence integration\n`;
    roadmap += `   - Deception technology\n\n`;
    roadmap += `2. **Zero Trust Architecture**\n`;
    roadmap += `   - Microsegmentation\n`;
    roadmap += `   - Software-defined perimeter\n`;
    roadmap += `   - Continuous verification\n\n`;
    roadmap += `3. **Compliance Excellence**\n`;
    roadmap += `   - Achieve certifications (ISO 27001, SOC 2)\n`;
    roadmap += `   - Continuous compliance monitoring\n`;
    roadmap += `   - Automated evidence collection\n\n`;
    roadmap += `4. **Security Culture**\n`;
    roadmap += `   - Security champions program\n`;
    roadmap += `   - Gamified training\n`;
    roadmap += `   - Regular phishing simulations\n\n`;

    roadmap += `**Metrics:**\n`;
    roadmap += `- Zero Trust maturity level 3+\n`;
    roadmap += `- Certifications achieved\n`;
    roadmap += `- Security awareness >90%\n\n`;

    roadmap += `---\n\n`;
    roadmap += `### Budget & Resources\n\n`;
    roadmap += `**Investment Areas:**\n`;
    roadmap += `- Technology & Tools: 40%\n`;
    roadmap += `- Personnel & Training: 35%\n`;
    roadmap += `- Professional Services: 15%\n`;
    roadmap += `- Compliance & Audit: 10%\n\n`;

    roadmap += `**Success Metrics (18 months):**\n`;
    roadmap += `- [ ] Zero critical security incidents\n`;
    roadmap += `- [ ] 100% compliance with regulations\n`;
    roadmap += `- [ ] Mean time to detect (MTTD) <15 minutes\n`;
    roadmap += `- [ ] Mean time to respond (MTTR) <1 hour\n`;
    roadmap += `- [ ] Security awareness score >85%\n`;
    roadmap += `- [ ] Certifications obtained\n\n`;

    roadmap += `---\n`;
    roadmap += `*Executive security strategy ready for board presentation and execution*\n`;

    return roadmap;
}

function generateBddPrioritization(concerns: string[]): string {
    let priorities = `*Strategic risk-based prioritization of security controls using BDD methodology*\n\n`;

    priorities += `### Priority 1: Critical (P1) - Immediate Action Required\n`;
    priorities += `**Timeline:** 0-3 months | **Budget:** 30% of total security spend\n\n`;

    priorities += `**IAM Controls:**\n`;
    priorities += `1. [ ] **MFA Enforcement** - "As a CISO, I want MFA on all accounts, so that credential theft is prevented"\n`;
    priorities += `   - Risk: CRITICAL | Framework: CIS 6.3, NIST PR.AC-7\n`;
    priorities += `   - Impact: Prevents 99.9% of account takeovers\n\n`;

    priorities += `2. [ ] **Privileged Access Management (PAM)** - "As a CISO, I want PAM for all admin accounts, so that privilegeescalation is controlled"\n`;
    priorities += `   - Risk: CRITICAL | Framework: CIS 6.8, NIST PR.AC-4\n`;
    priorities += `   - Impact: Reduces insider threat by 80%\n\n`;

    priorities += `**Data Protection:**\n`;
    priorities += `3. [ ] **Encryption at Rest** - "As a CISO, I want all sensitive data encrypted at rest, so that data breaches don't expose PII"\n`;
    priorities += `   - Risk: CRITICAL | Framework: CIS 3.11, NIST PR.DS-1\n`;
    priorities += `   - Compliance: HIPAA, PCI-DSS, GDPR\n\n`;

    priorities += `###Priority 2: High (P2) - Quarterly Roadmap\n`;
    priorities += `**Timeline:** 3-6 months | **Budget:** 25% of total security spend\n\n`;

    priorities += `4. [ ] **SIEM Deployment** - "As a CISO, I want a SIEM for log aggregation, so that threats are detected in real-time"\n`;
    priorities += `   - Risk: HIGH | Framework: CIS 8.11, NIST DE.AE-3\n`;
    priorities += `   - Mean Time to Detect: <15 minutes\n\n`;

    priorities += `5. [ ] **Network Segmentation** - "As a CISO, I want network segmentation with VLANs, so that lateral movement is prevented"\n`;
    priorities += `   - Risk: HIGH | Framework: CIS 12.2, NIST PR.AC-5\n`;
    priorities += `   - Impact: Limits breach scope by 90%\n\n`;

    priorities += `### Priority 3: Medium (P3) - Annual Roadmap\n`;
    priorities += `**Timeline:** 6-12 months | **Budget:** 20% of total security spend\n\n`;

    priorities += `6. [ ] **DevSecOps Pipeline** - "As a CISO, I want security scans in CI/CD, so that vulnerabilities are caught early"\n`;
    priorities += `   - Risk: MEDIUM | Framework: CIS 16.3, NIST PR.IP-7\n`;
    priorities += `   - Tools: SAST, DAST, SCA\n\n`;

    priorities += `### Board Reporting Metrics\n\n`;
    priorities += `- % of P1 stories complete: Target 100% within 3 months\n`;
    priorities += `- Risk reduction: Measured monthly\n`;
    priorities += `- Compliance gaps: Tracked by framework\n`;
    priorities += `- Security ROI: Cost avoidance from prevented incidents\n\n`;

    priorities += `---\n`;
    priorities += `*Strategic BDD prioritization ready for executive review and resource allocation*\n`;

    return priorities;
}
