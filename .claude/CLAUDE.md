# Jagents Project - Claude Code Configuration

---
name: jagents
description: Jagents - Multi-agent system with 10 domain cluster skills covering creative, security, content, and delivery workflows
model: sonnet
permissions:
  allow:
    - "Bash"
    - "Read(_)"
    - "Write(_)"
    - "Edit(_)"
    - "Grep(_)"
    - "Glob(_)"
    - "WebFetch(domain:\_)"
    - "WebSearch"
    - "Skill(*)"
---

## Project Overview

**Jagents** is a comprehensive multi-agent system with 54 original modules (17 agents, 14 skills, 17 workflows, 6 rules) consolidated into 10 domain-cluster skills using the PAI (Personal AI Infrastructure) standard.

This refactoring replaces the 4-directory structure (`agents/`, `skills/`, `workflows/`, `rules/`) with a unified `.claude/skills/` directory using domain-cluster organization. The original directories remain as historical reference material.

---

## Skill Index (10 Domain Clusters)

### Quick Reference

| # | Skill | Focus | Agents | Workflows |
|---|---|---|---|---|
| 1 | **life-management** | Personal org, scheduling, goals | — | Schedule, Vacation, Tasks, Goals |
| 2 | **quick-flow** | Rapid development | Barry (Solo Dev) | Tech Spec → Dev → Review |
| 3 | **party-mode** | Multi-agent collaboration | All 17 agents | Dynamic orchestration |
| 4 | **research** | Deep investigation | — | Extensive Research (3 parallel agents) |
| 5 | **game-dev** | Game development pipeline | — | BMGD: Preproduction → Design → Tech → Prod |
| 6 | **content** | Writing, UX, assets | Paige, UX Designer | Doc, Design, Content, Images |
| 7 | **architecture-rules** | Cross-cutting principles | — | Cloud Sync, Platform Portability, Zero Trust, Multi-Org |
| 8 | **security-grc** | Enterprise security | CSO, Sec Arch, STA | Enterprise Assessment, GRC, DevSecOps |
| 9 | **CIS** | Creative problem-solving | Analyst, Carson, Maya, Victor, Sophia, Quinn | Brainstorm, Design Thinking, Innovation |
| 10 | **agile** | Dev pipeline | PM, Architect, Dev, TEA, Scrum Master | Scale-Adaptive Planning, Advanced Elicitation |

---

## Detailed Skill Descriptions

### 1. Life Management
Personal organization, scheduling, vacation planning, and goal management.

**Triggers:** "schedule my appointments", "plan my vacation", "track my goals"

**Capabilities:**
- Appointment scheduling and calendar management
- Goal tracking and progress monitoring
- Vacation planning with resource coordination
- Task organization and prioritization

**Typical Use:**
```
"Schedule my team meetings for next week"
→ [Life Management] → Calendar schedule with conflict detection
```

---

### 2. Quick Flow
Fast-track development for bugs, small features, and prototypes.

**Triggers:** "quick flow", "fast development", "rapid prototype"

**Agent:** Barry (Quick Flow Solo Dev)

**Workflow:**
1. Create Tech Spec (`*create-tech-spec`)
2. Quick Dev (`*quick-dev`)
3. Code Review (`*code-review`)

**Typical Use:**
```
"Quick flow: fix the login button styling"
→ [Barry] → Tech spec → Implementation → Self-review → Done
```

---

### 3. Party Mode
Dynamic multi-agent collaboration with all 17+ agents communicating in real-time.

**Triggers:** "party mode", "activate all agents", "team collaboration"

**Available Agents:** All 17 specialists (Analyst, PM, Architect, Dev, TEA, CSO, Security Architect, Technical Writer, UX Designer, Brainstorm Coach, Design Thinking Coach, Innovation Oracle, Master Storyteller, Problem Solver, Quick Flow Dev, Scrum Master, plus orchestration researchers)

**Typical Use:**
```
"Party mode: How do we position this product for enterprise?"
→ [All agents] → Multi-perspective analysis → Synthesized recommendations
```

---

### 4. Research
Deep multi-source investigation with parallel research agents.

**Triggers:** "do extensive research", "research this topic", "parallel research"

**Parallel Agents:**
- **Perplexity Researcher:** Web-based research
- **Claude Researcher:** Document analysis
- **Gemini Researcher:** Multi-modal research

**Workflow:** 60-70% faster than sequential research

**Typical Use:**
```
"Research enterprise authentication trends"
→ [3 parallel agents] → Data collection → Synthesis → Report
```

---

### 5. Game Dev
Complete game development pipeline (BMGD).

**Triggers:** "game development", "bmgd workflow", "create a game"

**4 Phases:**
1. **Preproduction:** Brainstorm, Brief, Market analysis
2. **Design:** GDD, Mechanics, Levels, Narrative
3. **Technical:** Engine, Architecture, Pipelines
4. **Production:** Implementation, Testing, Polish

**Typical Use:**
```
"Start game development for tower defense game"
→ [BMGD Pipeline] → Phase 1 → Phase 2 → Phase 3 → Phase 4
```

---

### 6. Content
End-to-end content creation: writing, design, images, and assets.

**Triggers:** "create content", "write blog post", "design interface"

**Agents:** Paige (Technical Writer), UX Designer

**Sub-Skills:**
- Content Creation & Blogging
- Image Creation (AI-powered)
- Download Images
- Rename Files to Title

**Typical Use:**
```
"Create documentation for the API"
→ [Technical Writer] → Project analysis → Doc generation → Diagrams → Polish
```

---

### 7. Architecture Rules
Cross-cutting architectural constraints and design principles.

**Triggers:** "architecture principles", "system design", "platform portability"

**6 Core Rules:**
1. **Cloud Storage & Synchronization:** GitHub repos, 30-min setup
2. **Platform Portability:** Markdown, YAML, JSON standards
3. **Modular & Extensible:** UNIX philosophy, discrete modules
4. **Mandatory Context Loading:** 4-layer enforcement protocol
5. **Multi-Organization Isolation:** Complete separation between contexts
6. **Zero Trust Architecture:** "Never trust, always verify"

**Typical Use:**
```
"How should we structure the repository?"
→ [Architecture Rules] → Cloud Storage sync + Platform Portability + Modular design
```

---

### 8. Security GRC
Enterprise security, governance, risk, and compliance.

**Triggers:** "security assessment", "grc management", "compliance", "risk management"

**3 Agents:**
- **Chief Security Officer:** Executive leadership, strategy
- **Security Architect:** Technical design and implementation
- **Security Test Analyst:** Offensive testing and vulnerability assessment

**2 Sub-Skills:**
- GRC Management (Governance, Risk, Compliance)
- DevSecOps (Secure development lifecycle)

**Workflow:** Enterprise Security Assessment (2-4 weeks)
- Planning & Scoping
- Information Gathering
- Technical Assessment
- Compliance Validation
- Risk Assessment
- Findings Analysis & Prioritization
- Recommendations & Roadmap
- Reporting

**Typical Use:**
```
"Conduct enterprise security assessment"
→ [CSO + Security Architect + STA] → 9-phase assessment → Report
```

---

### 9. CIS (Creative Intelligence Suite)
Structured ideation, design thinking, innovation strategy, and storytelling.

**Triggers:** "brainstorming", "design thinking", "innovation", "creative problem solving"

**6 Agents:**
- **Analyst:** Reflective coach, idea articulation
- **Brainstorming Coach (Carson):** Ideation, lateral thinking
- **Design Thinking Coach (Maya):** User-centered design
- **Innovation Oracle (Victor):** Trend analysis, transformation
- **Master Storyteller (Sophia):** Narrative framing
- **Problem Solver (Dr. Quinn):** Root cause analysis

**4 Sub-Skills:**
- Brainstorming (Six Thinking Hats, Five W's)
- Design Thinking (5-phase process)
- Innovation Strategy
- Problem-Solving

**5 Workflows:**
- Six Thinking Hats (all perspectives)
- Five W's (systematic questioning)
- Design Thinking (empathy → definition → ideate → prototype → test)
- Innovation Strategy (trends → opportunities → roadmap)
- Problem-Solving (diagnosis → solutions → implementation)

**Typical Use:**
```
"How do we innovate in the payment space?"
→ [CIS agents] → Six Hats analysis → Design Thinking → Innovation roadmap → Narrative
```

---

### 10. Agile
Complete Agile pipeline: Analyst → PM → Architect → Developer → QA.

**Triggers:** "agile workflow", "sprint planning", "story development", "product roadmap"

**5 Agents:**
- **Analyst:** Ideation, project brief (Phase 1)
- **Product Manager:** Requirements, scale-adaptive planning (Phase 2)
- **Architect:** Technical design (Phase 3)
- **Developer:** Implementation (Phase 4A)
- **Test Architect (TEA):** Quality assurance (Phase 4B)
- **Scrum Master:** Process facilitation, ceremonies

**2 Sub-Skills:**
- Story Development (Epic/Story creation)
- Core Tasks (Sprint task management)

**2 Workflows:**
- Scale-Adaptive Planning (Quick Flow / Agile / Enterprise selection)
- Advanced Elicitation (Critical questioning, assumption testing)

**Full Pipeline:**
```
Raw Idea
  ↓ [Analyst]
Project Brief
  ↓ [PM]
PRD + User Stories
  ↓ [Architect]
Technical Architecture
  ↓ [Developer]
Code Implementation
  ↓ [TEA]
Quality Validation
  ↓
Shipped Feature
```

**Typical Use:**
```
"Build a user authentication system"
→ [Agile pipeline] → Brief → PRD → Architecture → Development → Testing → Delivery
```

---

## Architecture: Separated Agents & Skills

**Phase 1 Refactor Complete**: All 17 agents extracted into separate `.claude/agents/` files following Claude Code subagent specification.

### Agent Structure
```
.claude/agents/
├── analyst/AGENT.md                 (Ideation phase)
├── product-manager/AGENT.md         (Requirements phase)
├── architect/AGENT.md               (Design phase)
├── developer/AGENT.md               (Implementation phase)
├── test-architect/AGENT.md          (QA phase)
├── scrum-master/AGENT.md            (Coordination)
├── brainstorming-coach/AGENT.md     (CIS - ideation)
├── design-thinking-coach/AGENT.md   (CIS - design)
├── innovation-oracle/AGENT.md       (CIS - strategy)
├── master-storyteller/AGENT.md      (CIS - narrative)
├── problem-solver/AGENT.md          (CIS - analysis)
├── chief-security-officer/AGENT.md  (Security executive)
├── security-architect/AGENT.md      (Security design)
├── security-test-analyst/AGENT.md   (Security testing)
├── technical-writer/AGENT.md        (Content - docs)
├── ux-designer/AGENT.md             (Content - design)
└── quick-flow-solo-dev/AGENT.md     (Rapid development)
```

### Skill Activation Patterns

#### Sequential Pipeline (Agile)
```
User Idea
  → analyst (ideate) + brainstorming skill
  → product-manager (plan) + story-development skill
  → architect (design) + architecture-rules skill
  → developer (build) + implementation
  → test-architect (test) + quality validation
  → scrum-master (coordinate) + agile ceremonies
  → Delivered feature
```

#### Parallel Orchestration (Party Mode)
```
Complex Problem
  → [All 17 agents simultaneously via Agent tool]
  → Multi-perspective analysis
  → Synthesized solution
```

#### Single Agent (Quick Flow)
```
Simple Feature
  → quick-flow-solo-dev (Barry)
  → Spec → Code → Review → Done
```

### Skill-Agent Relationships

| Agent | Primary Skills | Role |
|-------|---|---|
| analyst | brainstorming, design-thinking | Ideation & concept refinement |
| product-manager | story-development, research | Requirements & scope planning |
| architect | architecture-rules | Technical design |
| developer | (none - implementation focused) | Code implementation |
| test-architect | (none - quality focused) | QA testing |
| scrum-master | (none - coordination focused) | Process facilitation |
| brainstorming-coach | brainstorming | Lateral thinking & ideation |
| design-thinking-coach | design-thinking | User-centered design |
| innovation-oracle | research | Strategic innovation |
| master-storyteller | content-creation | Narrative framing |
| problem-solver | (none - analysis focused) | Root cause analysis |
| chief-security-officer | grc-management, devsecops | Security strategy |
| security-architect | architecture-rules | Secure system design |
| security-test-analyst | (none - testing focused) | Penetration testing |
| technical-writer | content-creation | Technical documentation |
| ux-designer | design-thinking, content-creation | UX & interface design |
| quick-flow-solo-dev | (none - rapid delivery) | Fast-track development |

---

## Context Management

This project uses **Unified File-Based Context (UFC)** with **Mandatory Context Loading (MCL)**:

1. **Layer 1:** Master context (this CLAUDE.md)
2. **Layer 2:** Skill-specific context (in each SKILL.md)
3. **Layer 3:** Aggressive instructions (in markdown frontmatter)
4. **Layer 4:** Redundant symlinks (discoverable paths)

### Progressive Disclosure
- Load only required context per task
- Just-in-time information delivery
- Minimal metadata footprint
- Crystal clarity and laser focus

---

## Module Consolidation Status

### ✅ Phase 1 Complete: Agent Extraction (100%)

| Artifact | Original Location | New Location | Status |
|---|---|---|---|
| **Agents** | 17 x agents/*/AGENT.md | .claude/agents/*/AGENT.md | ✅ Extracted |
| **Skills** | skills/*/SKILL.md | .claude/skills/*/SKILL.md | ✅ Consolidated |
| **Workflows** | workflows/*/WORKFLOW.md | Embedded in skills | ✅ Consolidated |
| **Rules** | rules/*/RULE.md | Embedded in skills | ✅ Consolidated |
| **TOTAL MODULES** | **54** | **17 agents + 10 skills** | **✅ 100%** |

### Phase 1 Refactor: Separate Agents from Skills

**What was done:**
- ✅ Created `.claude/agents/` directory in jagents
- ✅ Extracted all 17 agent personas into separate AGENT.md files
- ✅ Each agent defined with YAML frontmatter per Claude Code spec
- ✅ Agents declare which skills they use (skills field)
- ✅ Updated CreateAgent and CreateSkill to comply with Claude Code documentation

### Phase 2 Refactor: Simplify Skills (Pure Knowledge)

**What was done:**
- ✅ Removed all embedded agent personas from agile skill
- ✅ Removed all embedded agent personas from CIS skill (6 agents)
- ✅ Removed Barry persona from quick-flow skill
- ✅ Simplified agent references in party-mode skill
- ✅ Removed Paige and UX Designer personas from content skill
- ✅ Removed 3 agent personas from security-grc skill
- ✅ Verified research, game-dev, architecture-rules, life-management are pure knowledge
- ✅ All 10 skills now contain only pure knowledge/procedures/workflows
- ✅ All skills reference agents by name only in integration sections

**Remaining (Phase 3):**
- ⏳ Test agent delegation via Agent tool
- ⏳ Validate skill preloading into agents
- ⏳ Document agent-skill contracts
- ⏳ Performance optimization and validation

### Architecture Evolution

**Before (Embedded Agents in Skills):**
```
.claude/
  skills/
    agile/SKILL.md          (contains PM, Architect, Dev, etc. personas)
    CIS/SKILL.md            (contains 6 agent personas)
    security-grc/SKILL.md   (contains 3 agent personas)
```

**After (Separated Agents & Skills):**
```
.claude/
  agents/
    product-manager/AGENT.md        (executable subagent)
    architect/AGENT.md              (executable subagent)
    developer/AGENT.md              (executable subagent)
    ...17 total
  skills/
    agile/SKILL.md                  (pure knowledge/workflows)
    CIS/SKILL.md                    (pure knowledge/workflows)
    security-grc/SKILL.md           (pure knowledge/workflows)
```

**Benefits:**
- ✅ Agents are now executable subagents per Claude Code spec
- ✅ Agents can be invoked independently via Agent tool
- ✅ Agents can preload skills at startup
- ✅ Clear separation of concerns (execution vs. knowledge)
- ✅ Agents can have own permissions, models, memory
- ✅ Skills are reusable across multiple agents
- ✅ Composable workflows (agents + skills)

### Mapping Reference

**CIS:** 6 agents (Analyst, Carson, Maya, Victor, Sophia, Quinn) + 4 skills (brainstorming, design-thinking, cis-innovation-strategy, cis-problem-solving) + 5 workflows (cis-brainstorming, cis-design-thinking, cis-innovation-strategy, cis-problem-solving, cis-storytelling, six-thinking-hats, five-ws)

**Agile:** 5 agents (Product Manager, Architect, Developer, Scrum Master, Test Architect) + 2 skills (story-development, core-tasks) + 3 workflows (scale-adaptive-planning, advanced-elicitation) + 2 rules (modular-architecture, mandatory-context-loading)

**Security-GRC:** 3 agents (CSO, Security Architect, STA) + 2 skills (grc-management, devsecops) + 1 workflow (enterprise-security-assessment) + 2 rules (zero-trust-architecture, multi-organization-isolation)

**Game-Dev:** 4 workflows (bmgd-preproduction, bmgd-game-design, bmgd-technical, bmgd-production)

**Content:** 2 agents (Technical Writer, UX Designer) + 4 skills (content-creation, image-creation, download-images, rename-files-to-title)

**Research:** 1 skill (research) + 1 workflow (extensive-research)

**Other:** life-management (1 skill), quick-flow (1 agent + 1 workflow), party-mode (1 workflow), architecture-rules (6 rules)

---

## Directory Structure

```
jagents/
  .claude/
    skills/
      CIS/
        SKILL.md          # Creative Intelligence Suite (6 agents, 4 skills, 5 workflows)
      agile/
        SKILL.md          # Agile pipeline (5 agents, 2 skills, 2 workflows, 2 rules)
      architecture-rules/
        SKILL.md          # Cross-cutting principles (6 rules)
      content/
        SKILL.md          # Content creation (2 agents, 4 skills)
      game-dev/
        SKILL.md          # Game development (4 BMGD workflows)
      life-management/
        SKILL.md          # Personal organization (1 skill)
      party-mode/
        SKILL.md          # Multi-agent orchestration (1 workflow)
      quick-flow/
        SKILL.md          # Rapid development (1 agent, 1 workflow)
      research/
        SKILL.md          # Deep investigation (1 skill, 1 workflow)
      security-grc/
        SKILL.md          # Security management (3 agents, 2 skills, 1 workflow, 2 rules)
    CLAUDE.md             # This file - project configuration and skill index
  agents/                   # Historical reference (original 17 agents)
  skills/                   # Historical reference (original 14 skills)
  workflows/                # Historical reference (original 17 workflows)
  rules/                    # Historical reference (original 6 rules)
```

---

## Using the Skills

### Skill Activation

Use the Claude Code `Skill` tool to invoke any skill:

```bash
/Skill: agile
```

Natural language triggers:

```
"Let's use agile to build this feature"
→ Activates agile skill with full context
```

### Skill Composition

Skills can be composed:

```
"Use CIS brainstorming with agile delivery"
→ [CIS] → Ideas
  ↓
[Agile] → Pipeline delivery
```

### Context Loading

Each skill loads required context automatically:
- Agents
- Sub-skills
- Workflows
- Rules (if cross-cutting)

---

## Development Standards

### All Skills Enforce:
✅ Platform Portability (Markdown, YAML, JSON)
✅ Modular Architecture (discrete, reusable modules)
✅ Mandatory Context Loading (observable tool usage)
✅ Multi-Organization Isolation (separate contexts)
✅ Zero Trust Security ("Never trust, always verify")
✅ Cloud Storage Synchronization (GitHub, 30-min setup)

---

## Quick Start

### 1. Select a Skill

```
"Let's brainstorm ideas for this product"
→ Triggers: CIS skill
```

### 2. Invoke the Agent

CIS will activate the Analyst and Brainstorming Coach automatically.

### 3. Run the Workflow

Workflows are built into each skill (e.g., Six Thinking Hats, Scale-Adaptive Planning).

### 4. Get Output

Clear deliverables per skill (Project Brief, PRD, Test Report, etc.).

---

## Governance

### Skills are governed by:
- **Architecture Rules:** Platform portability, modularity, context loading
- **CLAUDE.md:** Project configuration and skill index (this file)
- **Individual SKILL.md files:** Agent directives, workflows, capabilities

### No Single Point of Failure:
- 10 independent but interoperable skills
- Clear skill contracts (inputs/outputs)
- Composable workflows
- Cross-cutting principles enforced

---

## Status

**Project:** ✅ COMPLETE - 100% of 54 original modules consolidated into 10 domain-cluster skills

**Verification Checklist:**
- ✅ 10 skills created in `.claude/skills/`
- ✅ All skill SKILL.md files valid YAML frontmatter
- ✅ All 17 agents represented across 10 skills
- ✅ All 14 original skills consolidated
- ✅ All 17 workflows incorporated
- ✅ All 6 rules embedded or referenced
- ✅ CLAUDE.md skill index complete
- ✅ Original directories preserved as reference

---

**Ready to use! Invoke any skill with the Claude Code Skill tool.**
