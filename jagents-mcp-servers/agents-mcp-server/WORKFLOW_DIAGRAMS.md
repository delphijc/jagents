# JAGENTS Agents MCP Server - Workflow Sequence Diagrams

## Overview

This document provides comprehensive sequence diagrams for all JAGENTS agent workflows, showing how agents interact and data flows through the Agile method phases.

---

## Complete Agile Method Workflow

```mermaid
sequenceDiagram
    participant User
    participant Analyst
    participant PM as Product Manager
    participant Arch as Architect
    participant UX as UX Designer
    participant SM as Scrum Master
    participant Dev as Developer
    participant TEA as Test Architect
    participant STA as Security Test Analyst
    participant SA as Security Architect
    participant CSO
    
    %% Phase 1: Ideation
    User->>Analyst: Raw idea/concept
    Analyst->>Analyst: Apply Six Thinking Hats
    Analyst->>Analyst: Apply Five W's
    Analyst-->>User: Project Brief
    
    %% Phase 2: Requirements
    User->>PM: Project Brief
    PM->>PM: Scale-Adaptive Planning
    PM->>PM: Generate PRD/GDD
    PM-->>User: Requirements Document
    
    %% Phase 3: Architecture
    User->>Arch: PRD + Requirements
    Arch->>Arch: Detect project type
    Arch->>Arch: Generate architecture
    Arch->>SA: Security requirements
    SA->>SA: Generate BDD security stories
    SA-->>Arch: Security architecture
    Arch-->>User: Architecture Document
    
    %% Phase 4: Design & Planning
    par UX Design
        User->>UX: PRD + Architecture
        UX->>UX: Design Thinking process
        UX-->>User: UX Design Document
    and Story Breakdown
        User->>SM: PRD + UX Design
        SM->>SM: Story Development
        SM-->>User: Developer Stories
    end
    
    %% Phase 5: Implementation
    User->>Dev: Stories + Architecture
    Dev->>Dev: Generate implementation plan
    Dev-->>User: Code guidance + checklist
    
    %% Phase 6: Testing & Security
    par Quality Testing
        User->>TEA: Implementation
        TEA->>TEA: Generate test strategy
        TEA-->>User: Test Plan + Compliance Report
    and Security Testing
        User->>STA: Security stories
        STA->>STA: Generate BDD tests
        STA->>STA: Create Gherkin scenarios
        STA-->>User: Security Test Suite
    end
    
    %% Executive Oversight
    User->>CSO: Organizational context
    CSO->>CSO: Prioritize BDD stories
    CSO->>CSO: Strategic roadmap
    CSO-->>User: Security Strategy
```

---

## Phase 1: Ideation (Analyst)

```mermaid
sequenceDiagram
    participant User
    participant Analyst
    participant SixHats as Six Thinking Hats
    participant FiveWs as Five W's
    
    User->>Analyst: userIdea + context
    
    alt Six Thinking Hats Workflow
        Analyst->>SixHats: Analyze idea
        SixHats->>SixHats: White Hat (Facts)
        SixHats->>SixHats: Red Hat (Emotions)
        SixHats->>SixHats: Black Hat (Risks)
        SixHats->>SixHats: Yellow Hat (Benefits)
        SixHats->>SixHats: Green Hat (Creativity)
        SixHats->>SixHats: Blue Hat (Process)
        SixHats-->>Analyst: Multi-perspective analysis
    else Five W's Workflow
        Analyst->>FiveWs: Analyze idea
        FiveWs->>FiveWs: Who (Stakeholders)
        FiveWs->>FiveWs: What (Problem/Solution)
        FiveWs->>FiveWs: Where (Context)
        FiveWs->>FiveWs: When (Timeline)
        FiveWs->>FiveWs: Why (Purpose)
        Five Ws-->>Analyst: Structured analysis
    end
    
    Analyst->>Analyst: Synthesize insights
    Analyst->>Analyst: Generate Project Brief
    Analyst-->>User: Project Brief (→ Phase 2)
```

---

## Phase 2: Requirements (Product Manager)

```mermaid
sequenceDiagram
    participant User
    participant PM as Product Manager
    participant SAP as Scale-Adaptive Planning
    
    User->>PM: projectBrief
    
    PM->>SAP: Analyze project scope
    SAP->>SAP: Calculate complexity score
    
    alt Quick Flow (<2 weeks)
        SAP-->>PM: Select quick-flow track
        PM->>PM: Generate lightweight PRD
        PM-->>User: Quick PRD
    else Agile Standard (2-12 weeks)
        SAP-->>PM: Select agile-standard track
        PM->>PM: Generate standard PRD
        PM->>PM: Define sprints
        PM-->>User: Full PRD with roadmap
    else Enterprise (12+ weeks)
        SAP-->>PM: Select enterprise track
        PM->>PM: Generate comprehensive GDD
        PM->>PM: Define phases & milestones
        PM-->>User: Game Design Document
    end
    
    PM-->>User: Requirements (→ Phase 3)
```

---

## Phase 3: Architecture (Architect + Security)

```mermaid
sequenceDiagram
    participant User
    participant Arch as Architect
    participant SA as Security Architect
    participant CSO
    
    User->>Arch: prd + requirements
    
    Arch->>Arch: Detect project type
    Note over Arch: API/Mobile/Web/ML/etc.
    
    Arch->>Arch: Select tech stack
    Arch->>Arch: Generate architecture
    
    Arch->>SA: Request security design
    SA->>SA: Apply Zero Trust principles
    SA->>SA: STRIDE threat modeling
    SA->>SA: Generate security controls
    SA->>SA: Generate BDD stories
    SA-->>Arch: Security architecture + BDD stories
    
    opt Executive Review
        SA->>CSO: Security concerns
        CSO->>CSO: Prioritize BDD stories by risk
        CSO-->>SA: Strategic priorities
    end
    
    Arch->>Arch: Integrate security
    Arch-->>User: Architecture Document (→ Phase 4)
```

---

## Phase 4: Design & Planning (UX + Scrum Master)

```mermaid
sequenceDiagram
    participant User
    participant UX as UX Designer
    participant SM as Scrum Master
    participant Dev as Developer
    
    par UX Design Path
        User->>UX: prd + architecture
        UX->>UX: Apply Design Thinking
        UX->>UX: Empathize (User research)
        UX->>UX: Define (Problem statement)
        UX->>UX: Ideate (Design concepts)
        UX->>UX: Prototype (Wireframes)
        UX->>UX: Test (Validation)
        UX-->>User: UX Design Document
    and Story Breakdown Path
        User->>SM: prd + uxDesign (optional)
        SM->SM: Epic breakdown
        SM->>SM: Story slicing
        SM->>SM: Acceptance criteria (Given-When-Then)
        SM->>SM: Story pointing
        SM->>SM: Sprint planning
        SM-->>User: Developer Stories
    end
    
    User->>Dev: stories + architecture
    Dev-->>User: Ready for Phase 5
```

---

## Phase 5: Implementation (Developer)

```mermaid
sequenceDiagram
    participant User
    participant Dev as Developer
    participant SA as Security Architect
    
    User->>Dev: story + architecture + context
    
    Dev->>Dev: Analyze story
    Dev->>Dev: Generate implementation plan
    Dev->>Dev: Identify dependencies
    Dev->>Dev: Create code structure
    
    opt Security-sensitive code
        Dev->>SA: Request security guidance
        SA-->>Dev: Security patterns + BDD tests
    end
    
    Dev->>Dev: Generate code guidance
    Dev->>Dev: Create quality checklist
    
    Dev-->>User: Implementation Plan
    Dev-->>User: Code Guidance
    Dev-->>User: QA Checklist (→ Phase 6)
```

---

## Phase 6: Testing & Validation

```mermaid
sequenceDiagram
    participant User
    participant TEA as Test Architect
    participant STA as Security Test Analyst
    participant SA as Security Architect
    
    par Quality Assurance Path
        User->>TEA: implementation + architecture
        TEA->>TEA: Generate test strategy
        TEA->>TEA: Unit tests (60%)
        TEA->>TEA: Integration tests (30%)
        TEA->>TEA: E2E tests (10%)
        TEA->>TEA: Performance tests
        TEA->>TEA: Accessibility tests
        TEA-->>User: Test Plan + Compliance Report
    and Security Testing Path
        User->>STA: securityRequirement
        STA->>STA: Parse BDD story
        STA->>STA: Map to frameworks (CIS, NIST, ISO)
        STA->>STA: Generate Gherkin scenarios
        STA->>STA: Create test automation code
        STA->>STA: Generate compliance matrix
        STA-->>User: BDD Test Suite
    end
    
    opt Security Validation
        STA->>SA: Share test results
        SA->>SA: Validate security controls
        SA-->>STA: Approval/Remediation
    end
    
    TEA-->>User: Quality Report
    STA-->>User: Security Report
```

---

## Security Workflow (BDD-Enhanced)

```mermaid
sequenceDiagram
    participant CSO
    participant SA as Security Architect
    participant STA as Security Test Analyst
    participant Dev as Developer
    participant TEA as Test Architect
    
    %% Strategic Level
    CSO->>CSO: Define security strategy
    CSO->>CSO: Prioritize BDD stories by risk
    CSO->>CSO: P1: Critical (0-3 months)
    CSO->>CSO: P2: High (3-6 months)
    CSO->>CSO: P3: Medium (6-12 months)
    CSO-->>SA: Strategic priorities
    
    %% Design Level
    SA->>SA: Design security architecture
    SA->>SA: Generate BDD security stories
    SA->>SA: Map to compliance frameworks
    SA-->>STA: BDD stories + architecture
    SA-->>Dev: Security patterns
    
    %% Testing Level
    STA->>STA: Parse BDD stories
    STA->>STA: Generate Gherkin scenarios
    STA->>STA: Create test automation
    STA->>STA: Map to CIS, NIST, ISO
    STA-->>TEA: Security test suite
    
    %% Implementation & Validation
    Dev->>Dev: Implement with security patterns
    TEA->>TEA: Run all tests (security + quality)
    TEA-->>CSO: Compliance report
```

---

## BDD Security Testing Workflow

```mermaid
sequenceDiagram
    participant User
    participant STA as Security Test Analyst
    participant Gherkin as Gherkin Generator
    participant AutoCode as Test Automation
    participant Frameworks as Compliance Mapper
    
    User->>STA: BDD story
    Note over User,STA: "As a CISO, I want MFA..."
    
    STA->>STA: Parse story format
    STA->>STA: Extract role, goal, benefit
    STA->>STA: Identify control type (IAM/Data/Network)
    
    STA->>Gherkin: Generate test scenarios
    Gherkin->>Gherkin: Feature: MFA Enforcement
    Gherkin->>Gherkin: Scenario 1: Successful with MFA
    Gherkin->>Gherkin: Scenario 2: Failure without MFA
    Gherkin->>Gherkin: Scenario 3: Invalid MFA code
    Gherkin->>Gherkin: Scenario 4: Bypass detection
    Gherkin-->>STA: Gherkin scenarios
    
    STA->>AutoCode: Generate test code
    AutoCode->>AutoCode: Python/pytest-bdd
    AutoCode->>AutoCode: JavaScript/Cucumber
    AutoCode->>AutoCode: Go/godog
    AutoCode-->>STA: Executable tests
    
    STA->>Frameworks: Map to compliance
    Frameworks->>Frameworks: CIS 6.3
    Frameworks->>Frameworks: NIST PR.AC-7
    Frameworks->>Frameworks: ISO A.9.4.2
    Frameworks-->>STA: Framework mapping
    
    STA->>STA: Generate compliance matrix
    STA-->>User: Complete test package
```

---

## Agent Interaction Matrix

| Phase | Primary Agent | Supporting Agents | Output | Next Phase Input |
|-------|--------------|-------------------|--------|------------------|
| 1️⃣ Ideation | Analyst | - | Project Brief | PM |
| 2️⃣ Requirements | Product Manager | - | PRD/GDD | Architect, UX |
| 3️⃣ Architecture | Architect | Security Architect, CSO | Architecture Doc | UX, Scrum Master, Developer |
| 4️⃣ Design | UX Designer, Scrum Master | - | UX Design + Stories | Developer |
| 5️⃣ Implementation | Developer | Security Architect | Code + Guidance | TEA, STA |
| 6️⃣ Testing | Test Architect, Security Test Analyst | Security Architect | Test Reports | Deployment |
| 🔒 Security (Continuous) | Security Architect, STA, CSO | All agents | Security posture | All phases |

---

## Data Flow Diagram

```mermaid
graph TD
    A[User Idea] -->|Phase 1| B[Analyst]
    B --> C[Project Brief]
    C -->|Phase 2| D[Product Manager]
    D --> E[PRD/GDD]
    E -->|Phase 3| F[Architect]
    E -->|Phase 3| G[Security Architect]
    F --> H[Architecture Doc]
    G --> I[Security BDD Stories]
    I --> J[CSO]
    J --> K[Prioritized Roadmap]
    H -->|Phase 4| L[UX Designer]
    H -->|Phase 4| M[Scrum Master]
    L --> N[UX Design]
    M --> O[Developer Stories]
    N -->|Phase 5| P[Developer]
    O -->|Phase 5| P
    H -->|Phase 5| P
    P --> Q[Implementation]
    Q -->|Phase 6| R[Test Architect]
    I -->|Phase 6| S[Security Test Analyst]
    R --> T[Quality Report]
    S --> U[Security Report]
    T --> V[Deployment Ready]
    U --> V
    
    style A fill:#e1f5ff
    style V fill:#d4edda
    style G fill:#fff3cd
    style S fill:#fff3cd
    style J fill:#fff3cd
```

---

## Integration Points

### Gemini CLI Workflow

```mermaid
sequenceDiagram
    participant User as Gemini CLI User
    participant Gemini as Gemini CLI
    participant MCP as MCP Server
    participant Agent as JAGENTS Agent
    
    User->>Gemini: /mcp (list agents)
    Gemini->>MCP: ListTools request
    MCP-->>Gemini: Available agents (10)
    Gemini-->>User: Display agent list
    
    User->>Gemini: Call jagents_analyst
    Gemini->>MCP: CallTool request
    MCP->>Agent: execute(input)
    Agent->>Agent: Process workflow
    Agent-->>MCP: Result
    MCP-->>Gemini: Tool response
    Gemini-->>User: Display output
```

---

## Notes

- All diagrams created with Mermaid
- Sequence diagrams show temporal flow
- Data flow diagrams show information movement
- Security is integrated throughout, not just Phase 6
- BDD methodology enables automated testing and compliance validation

---

**Version:** 1.1  
**Last Updated:** 2024-12-24  
**License:** MIT
