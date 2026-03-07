---
name: security-grc
description: Enterprise security, governance, risk, and compliance with strategic leadership, architecture, and testing
triggers:
  - "security assessment"
  - "grc management"
  - "compliance"
  - "security architecture"
  - "risk management"
  - "security testing"
---

# Security GRC

## Purpose

Enterprise security, governance, risk, and compliance (GRC) combining strategic leadership, technical security architecture, and offensive security testing. Provides comprehensive frameworks for Zero Trust Architecture and multi-organization security.

**Agents:** chief-security-officer, security-architect, security-test-analyst

---

## Sub-Skills

### GRC Management (Governance, Risk, and Compliance)

**Core Domains:**

#### 1. Governance
- **Policy Management:** Security policy development, standards, control frameworks, version control
- **Program Structure:** Governance framework design, committees, decision-making, escalation
- **Documentation:** Administrative guides, security standards, procedures, compliance matrices

#### 2. Risk Management
- **Risk Assessment:** Asset identification, threat/vulnerability analysis, risk prioritization
- **Risk Frameworks:** NIST RMF, ISO 31000, FAIR, OCTAVE
- **Risk Monitoring:** KRIs, risk register, continuous assessment, executive reporting

#### 3. Compliance Management
- **Multi-Framework:** HIPAA, PCI DSS, DIACAP, RMF, IRS, CJIS, GDPR, ISO 27001
- **Compliance Activities:** Requirements mapping, control implementation, evidence collection, audits
- **Audit Coordination:** Internal/external audit management, finding remediation, CAP tracking

**Frameworks & Standards:**

| Framework | Primary Focus |
|---|---|
| **NIST CSF** | Identify, Protect, Detect, Respond, Recover |
| **NIST SP800-53** | Security and privacy controls |
| **NIST RMF** | Risk Management Framework |
| **CIS Controls v8** | 18 critical security controls |
| **ISO 27001** | Information Security Management System |
| **PCI DSS** | Payment card industry data security |
| **HIPAA/HITECH** | Healthcare data protection |

**Key Activities:**

1. **Policy Governance:** Identification, drafting, stakeholder review, publication, training
2. **Risk Assessment Cycle:** Asset inventory, threat analysis, vulnerability assessment, impact determination, risk treatment
3. **Compliance Lifecycle:** Requirements analysis, gap assessment, implementation, validation, reporting
4. **Audit Management:** Pre-audit prep, audit execution, remediation, post-audit lessons learned

**Tools:**
- GRC Platforms: ServiceNow GRC, RSA Archer, MetricStream, LogicGate, OneTrust
- Risk Tools: RiskLens, RiskWatch, Resolver
- Compliance Tools: Vanta, Drata, AuditBoard
- Assessment: Nessus, Qualys, OpenVAS, CIS-CAT

**Metrics:**
- Policy coverage percentage
- Compliance rate by framework
- Vulnerability remediation rate
- Control effectiveness scores
- Audit finding distribution

---

### DevSecOps (Development Security Operations)

**Integration Points:**
- Security in development lifecycle
- Secure coding practices
- Automated security testing
- Vulnerability scanning in CI/CD
- Security policy enforcement
- Incident response coordination

---

## Workflow: Enterprise Security Assessment

Comprehensive organizational security posture evaluation (2-4 weeks for initial assessment).

### Assessment Phases

**Phase 1: Planning & Scoping (3-5 days)**
- Kick-off meeting, objective definition, scope, resource planning, documentation review
- **Deliverable:** Assessment Plan

**Phase 2: Information Gathering (5-10 days)**
- Document review (policies, architecture, diagrams)
- Stakeholder interviews (technical and business)
- System inventory (applications, infrastructure, critical assets)
- **Deliverable:** Information Gathering Report

**Phase 3: Technical Assessment (10-15 days)**
- Vulnerability Assessment (Nessus, OpenVAS, NMAP)
- Configuration Review (network, servers, databases, cloud)
- Access Control Review (user accounts, privileges, RBAC, MFA)
- Security Control Testing (technical and process)
- **Deliverable:** Technical Assessment Report

**Phase 4: Compliance Validation (5-7 days)**
- Control Mapping (map controls to framework)
- Evidence Collection (screenshots, configs, logs, policies)
- Gap Analysis (implementation status, effectiveness, compliance status)
- **Deliverable:** Compliance Gap Analysis Report

**Phase 5: Risk Assessment (3-5 days)**
- Threat Identification (external, internal, environmental)
- Vulnerability Analysis (technical, process, human factors)
- Impact Analysis (business impact, impact levels)
- Likelihood Assessment
- Risk Calculation (Risk = Impact × Likelihood)
- **Deliverable:** Risk Assessment Report

**Phase 6: Findings Analysis (5-7 days)**
- Consolidation and deduplication
- Root Cause Analysis
- Finding Prioritization (P1-P4)
- **Deliverable:** Prioritized Findings List

**Phase 7: Recommendations (3-5 days)**
- Remediation Recommendations (per finding)
- Strategic Recommendations
- Roadmap Development (short/medium/long-term)
- **Deliverable:** Remediation Roadmap

**Phase 8: Reporting (5-7 days)**
- Executive Summary
- Detailed Report (methodology, scope, findings, recommendations)
- Presentation Materials
- **Deliverable:** Final Assessment Report Package

**Phase 9: Out-Brief & Follow-up (2-3 days)**
- Executive Out-Brief
- Technical Out-Brief
- Follow-up Planning and Tracking
- **Deliverable:** Out-Brief Summary and Action Items

---

## Embedded Rules

### Zero Trust Architecture Principles

**Core Principle:** "Never trust, always verify"

#### Three Core Principles
1. **Verify Explicitly** — Authenticate/authorize on all data points
2. **Use Least Privilege Access** — JIT, JEA, risk-based, session-based
3. **Assume Breach** — Micro-segmentation, end-to-end encryption, monitoring

#### Implementation Architecture
- **Control Plane:** Policy Decision Point (PDP), Policy Enforcement Point (PEP), Policy Admin Point (PAP)
- **Data Plane:** Identity Provider (IdP), CDM, Industry Compliance, Threat Intelligence, SIEM

#### Zero Trust Maturity Levels
- **Level 0:** Traditional (perimeter-based)
- **Level 1:** Initial (MFA, basic inventory)
- **Level 2:** Developing (MFA all, device checks, app segmentation)
- **Level 3:** Advanced (risk-based auth, micro-segmentation, JIT)
- **Level 4:** Optimal (continuous auth, dynamic segmentation, AI/ML)

---

### Multi-Organization Isolation

**Rule:** Maintain complete isolation between organization contexts with no shared data storage.

**Implementation:**
- Separate repository per organization (`org-<uuid>/`)
- Explicit context switching (environment variable: `CURRENT_ORG_CONTEXT`)
- No automatic context inference
- Data sanitization for central outputs (UUID, no client names)
- Support 3+ concurrent contexts minimum

---

## Integration Points

### Input Requirements
- Business strategy and objectives
- Risk tolerance levels
- Budget constraints
- Regulatory requirements
- Asset inventories
- Threat intelligence
- System documentation

### Output Deliverables
- Security strategy roadmap
- Risk assessment and risk registers
- Compliance status reports
- Assessment reports and remediation roadmaps
- Policy and standards documentation
- Executive briefings and board presentations

### Collaboration
- **Internal:** CSO, CIO, CTO, CEO, CFO, Development teams, IT Ops, Legal, HR
- **External:** Regulatory bodies, Industry peers, Vendors, Auditors, Law enforcement

## Tools & Technologies

### Vulnerability & Assessment
- **Nessus** (vulnerability scanning)
- **Qualys** (cloud security)
- **Rapid7 Nexpose** (vulnerability management)
- **OpenVAS** (open-source scanning)

### Endpoint & Network
- **CrowdStrike** (EDR/XDR)
- **Microsoft Defender** (endpoint security)
- **Palo Alto Networks** (next-gen firewall)

### GRC & Compliance
- **ServiceNow GRC** (governance platform)
- **Vanta** (automated compliance)
- **Drata** (continuous compliance)

### Identity & Access
- **Azure AD/Okta** (identity management)
- **Privileged Identity Management (PIM)**
- **Just-in-Time (JIT) access solutions**

---

## Success Metrics

### Security Posture
- Reduction in security incidents
- MTTD and MTTR improvements
- Vulnerability remediation rates
- Compliance audit results

### Organizational Impact
- Team retention and development
- Budget efficiency
- Stakeholder satisfaction
- Zero Trust implementation progress
- DevSecOps maturity

### Compliance
- Compliance rate by framework
- Audit finding reduction
- Control effectiveness
- Regulatory audit success
