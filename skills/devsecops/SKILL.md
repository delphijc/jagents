# SKILL: DevSecOps

**Purpose:** Security integration into development and operations pipelines  
**Domain:** Application security, CI/CD, automation, secure development  
**Type:** Technical Integration Skill

---

## Overview

DevSecOps integrates security practices into DevOps processes, shifting security left in the software development lifecycle. This skill encompasses automated security testing, security-as-code, CI/CD pipeline security, and creating a culture where security is everyone's responsibility.

---

## Core Capabilities

### 1. Secure CI/CD Pipeline Integration

#### Pipeline Security
- Security gates and quality gates
- Automated security testing integration
- Secret management in pipelines
- Artifact scanning and validation
- Deployment approval workflows
- Security policy enforcement

#### Build Security
- Secure build environments
- Build artifact integrity
- Dependency management
- Software Bill of Materials (SBOM) generation
- Container image scanning
- Infrastructure as Code (IaC) validation

### 2. Application Security Testing (AST)

#### SAST (Static Application Security Testing)
- **Tools:** SonarQube, Checkmarx, Veracode, Semgrep
- Source code analysis
- Security vulnerability detection
- Code quality metrics
- Custom rule development
- False positive management

#### DAST (Dynamic Application Security Testing)
- **Tools:** OWASP ZAP, Burp Suite, Veracode
- Running application testing
- API security testing
- Authentication/authorization testing
- Input validation testing
- Runtime vulnerability detection

#### SCA (Software Composition Analysis)
- **Tools:** Snyk, WhiteSource, Black Duck, Dependency-Track
- Open source vulnerability detection
- License compliance checking
- Dependency graph analysis
- Vulnerability prioritization (CVE/CWE)
- Automated remediation suggestions

#### IAST (Interactive Application Security Testing)
- Runtime instrumentation
- Real-time vulnerability detection
- Code-level guidance
- Low false-positive rates

### 3. Security Automation

#### Security as Code
- Security policies as code
- Compliance as code
- Infrastructure as Code security (Terraform, ARM, CloudFormation)
- Configuration as Code
- Security test automation

#### Automated Testing
- Unit tests for security functions
- Integration security tests
- API security testing
- Penetration testing automation
- Regression testing

#### Automation Tools
- **Jenkins** - CI/CD orchestration
- **GitLab CI/CD** - Integrated DevOps platform
- **GitHub Actions** - Workflow automation
- **Azure DevOps** - Microsoft DevOps platform
- **CircleCI** - Cloud CI/CD

---

## 🛠️ Tools & Technologies

### CI/CD Platforms
- **Jenkins** - Open source automation server
- **GitLab** - Complete DevOps platform
- **GitHub Actions** - Native GitHub automation
- **Azure DevOps** - Microsoft DevOps suite
- **CircleCI** - Cloud-native CI/CD
- **Travis CI** - Continuous integration
- **TeamCity** - JetBrains CI server

### Security Testing Tools

#### SAST
- **SonarQube** - Code quality and security
- **Checkmarx** - Static analysis
- **Veracode** - Application security platform
- **Semgrep** - Lightweight static analysis
- **Fortify** - HP static analysis

#### DAST
- **OWASP ZAP** - Web application scanner
- **Burp Suite** - Web security testing
- **Acunetix** - Automated web scanner
- **AppScan** - IBM security testing

#### SCA
- **Snyk** - Developer-first security
- **WhiteSource** (Mend) - Open source management
- **Black Duck** - Software composition analysis
- **Dependency-Track** - SBOM management
- **GitHub Dependabot** - Automated dependency updates

#### Secrets Management
- **HashiCorp Vault** - Secrets management
- **Azure Key Vault** - Cloud secrets
- **AWS Secrets Manager** - AWS secrets
- **CyberArk** - Privileged access management
- **GitGuardian** - Secret detection

### Container Security
- **Trivy** - Container vulnerability scanner
- **Aqua Security** - Container security platform
- **Twistlock** (Prisma Cloud) - Cloud-native security
- **Clair** - Container vulnerability static analysis
- **Anchore** - Container analysis and compliance

### Infrastructure Security
- **Terraform** - IaC with security scanning
- **Checkov** - IaC security scanner
- **tfsec** - Terraform security scanner
- **Prowler** - AWS security assessment
- **ScoutSuite** - Multi-cloud security auditing

---

## 📋 DevSecOps Pipeline Stages

### 1. Plan
- Threat modeling
- Security requirements definition
- Risk assessment
- Compliance requirements mapping

### 2. Develop
- Secure coding standards
- IDE security plugins
- Pre-commit hooks
- Peer code review

### 3. Build
- SAST scanning
- SCA scanning
- Secret scanning
- SBOM generation
- Build artifact signing

### 4. Test
- DAST scanning
- IAST implementation
- API security testing
- Security unit tests
- Integration security tests

### 5. Deploy
- Infrastructure security validation
- Configuration security checks
- Deployment approval gates
- Environment validation

### 6. Operate
- Runtime application self-protection (RASP)
- Security monitoring
- Anomaly detection
- Performance monitoring

### 7. Monitor
- Security event monitoring
- Vulnerability tracking
- Compliance monitoring
- Metrics and dashboards

---

## 🎯 Key Practices

### Shift Left Security
- Security early in SDLC
- Developer security training
- Security requirements upfront
- Early vulnerability detection
- Automated security testing

### Continuous Security
- Automated security scanning
- Continuous compliance checking
- Real-time vulnerability alerts
- Continuous monitoring
- Iterative security improvements

### Security as Code
- Policy as code
- Compliance as code
- Security test automation
- Infrastructure security automation
- Immutable infrastructure

### Collaboration & Culture
- Security champions program
- Developer security training
- Blameless post-mortems
- Shared security responsibility
- Cross-functional teams

---

## 📊 Metrics & KPIs

### Security Metrics
- **Vulnerabilities Found:**
  - Critical/High/Medium/Low counts
  - Time to detection
  - Detection source (SAST/DAST/SCA)

- **Remediation Metrics:**
  - Mean time to remediate (MTTR)
  - Remediation rate
  - Aging vulnerabilities
  - Fix rate by severity

- **Code Quality:**
  - Security debt
  - Code coverage
  - Technical debt
  - Security hotspots

### Pipeline Metrics
- **Build Metrics:**
  - Build success rate
  - Build duration
  - Security gate pass rate
  - Failed builds due to security

- **Deployment Metrics:**
  - Deployment frequency
  - Lead time for changes
  - Change failure rate
  - Time to restore service

### Compliance Metrics
- **Policy Compliance:**
  - Policy violation rate
  - Compliance score
  - Automated policy checks
  - Manual override rate

---

## 🔄 Workflow Integration

### Pre-Commit Stage
```
Developer writes code
  ↓
IDE security linting
  ↓
Pre-commit hooks run
  ↓
Local SAST scan
  ↓
Secret scanning
  ↓
Commit to repository
```

### Build Stage
```
Code committed
  ↓
CI pipeline triggered
  ↓
Dependency resolution
  ↓
SCA scanning (dependencies)
  ↓
SAST scanning (code)
  ↓
Unit tests (including security tests)
  ↓
Build artifact creation
  ↓
Container image build
  ↓
Container scanning
  ↓
SBOM generation
  ↓
Artifact signing
  ↓
Upload to artifact repository
```

### Test Stage
```
Artifact deployed to test environment
  ↓
DAST scanning
  ↓
API security testing
  ↓
Integration tests
  ↓
Performance tests
  ↓
Security acceptance tests
  ↓
Generate security report
```

### Deploy Stage
```
Approval gate (if required)
  ↓
Infrastructure validation
  ↓
Configuration security check
  ↓
Secrets injection
  ↓
Deploy to environment
  ↓
Smoke tests
  ↓
Security validation
  ↓
Enable monitoring
```

---

## 💡 Best Practices

### Security Testing
1. **Automate everything possible**
2. **Fail fast, fail early**
3. **Prioritize findings by risk**
4. **Reduce false positives**
5. **Provide actionable guidance**

### Pipeline Security
1. **Secure the pipeline itself**
2. **Implement least privilege**
3. **Audit all changes**
4. **Encrypt secrets**
5. **Validate all inputs**

### Developer Experience
1. **Make security easy**
2. **Provide quick feedback**
3. **Integrate with existing tools**
4. **Minimize friction**
5. **Offer self-service options**

### Continuous Improvement
1. **Measure everything**
2. **Track trends over time**
3. **Learn from incidents**
4. **Update security baselines**
5. **Share knowledge**

---

## 🎓 Required Skills

### Technical Skills
- CI/CD platforms knowledge
- Scripting (Python, Bash, PowerShell)
- Application security fundamentals
- Container and cloud technologies
- Infrastructure as Code
- Security testing methodologies

### Development Skills
- Understanding of SDLC
- Programming languages
- API development
- Source control (Git)
- Build tools
- Package managers

### Security Skills
- Vulnerability management
- Threat modeling
- Security testing
- Compliance requirements
- Risk assessment
- Incident response

---

## 📖 Related Modules

### Agents
- [Security Architect](#) - Security design
- [Application Security Engineer](#) - AppSec focus
- [DevOps Engineer](#) - Pipeline operations
- [Security Operations](#) - Monitoring and response

### Skills
- [Application Security](#)
- [Cloud Security](#)
- [Security Automation](#)
- [Vulnerability Management](#)

### Workflows
- [Security Pipeline Setup](#)
- [Vulnerability Remediation](#)
- [Security Testing](#)
- [Compliance Validation](#)

### Rules
- [Security Gates Required](#)
- [No Secrets in Code](#)
- [Automated Testing Mandatory](#)
- [Security Review Before Deploy](#)

---

## 🌟 Success Factors

### Organizational
- Leadership support
- Security champions program
- Training and awareness
- Adequate tool budget
- Cross-functional collaboration

### Technical
- Well-integrated tools
- Fast feedback loops
- Comprehensive automation
- Clear security policies
- Effective monitoring

### Cultural
- Shared responsibility
- Blameless culture
- Continuous learning
- Innovation mindset
- Security awareness

---

This skill enables organizations to build security into every stage of software development and deployment, creating secure, compliant applications while maintaining development velocity.
