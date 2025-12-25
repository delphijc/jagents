# RULE: Modular and Extensible Architecture

**Domain:** Architecture, System Design, Reusability  
**Type:** Architectural Requirement  
**Priority:** High  
**Source:** Requirements Document (jagent97.md) + PAI Architecture (jagent99.md)

---

## Rule Statement

THE Development Environment SHALL organize capabilities into discrete, reusable modules following the UNIX philosophy: solve a problem once and turn the solution into a module that can be chained with others.

---

## User Story

As a security engineer with evolving needs, I want a modular environment that can be extended with new capabilities, so that I can adapt to new security challenges and organizational requirements.

---

## Core Philosophy

### UNIX Philosophy Applied to AI

1. **Solve Once, Reuse Forever**
   - Every problem solution becomes a reproducible module
   - Modules can be Commands, Fabric patterns, or MCP services
   - Chained together for complex workflows

2. **Interoperable System**
   - Output of one component = input to the next
   - Standard interfaces between modules
   - Composability over monolithic design

3. **Single Responsibility**
   - Each module does one thing well
   - Clear boundaries and contracts
   - Independent testing and versioning

---

## Acceptance Criteria

### AC1: Discrete Modules by Discipline
THE Development Environment SHALL organize specs into discrete modules by security discipline (infrastructure, application, automation, compliance, incident response).

**Validation:**
- Clear module boundaries
- Discipline-based organization
- Independent module operation
- Documented interfaces

### AC2: Template Reuse
WHEN adding a new organization context, THE Development Environment SHALL support reusing existing spec templates and modules.

**Validation:**
- Templates copied successfully
- No modification required for reuse
- Organization-specific customization supported
- Documentation of reusable components

### AC3: Custom Module Support
THE Development Environment SHALL enable custom modules to be added without modifying core environment structure.

**Validation:**
- Plugin architecture
- Clear extension points
- No core code modification required
- Custom module discovery mechanism

### AC4: Documented Interfaces
THE Development Environment SHALL document module interfaces and dependencies to facilitate extension.

**Validation:**
- Interface specifications exist
- Dependency graphs documented
- Integration examples provided
- API/contract documentation

### AC5: Organization-Level Customization
WHERE organization-specific customizations are needed, THE Development Environment SHALL support overriding default templates at the organization context level.

**Validation:**
- Override mechanism works
- Defaults remain unchanged
- Clear precedence rules
- Documentation of overrides

---

## Module Types

### 1. Agents
**Purpose:** Specialized roles in development workflow  
**Location:** `agents/[agent-name]/AGENT.md`  
**Interface:** Input/Output contracts, Skills used

**Example:**
- Analyst
- Product Manager
- Architect
- Developer

### 2. Skills
**Purpose:** Reusable capabilities and expertise containers  
**Location:** `skills/[skill-name]/SKILL.md`  
**Interface:** Workflows, Tools, Context requirements

**Example:**
- Research
- Brainstorming
- Content Creation
- Story Development

### 3. Workflows
**Purpose:** Step-by-step task execution pipelines  
**Location:** `workflows/[workflow-name]/WORKFLOW.md`  
**Interface:** Inputs, Outputs, Prerequisites, Steps

**Example:**
- Extensive Research
- Six Thinking Hats
- Scale-Adaptive Planning

### 4. Rules
**Purpose:** Constraints and requirements  
**Location:** `rules/[rule-name]/RULE.md`  
**Interface:** Acceptance criteria, Validation methods

**Example:**
- Multi-Organization Isolation
- Platform Portability
- Mandatory Context Loading

### 5. Skills-as-Containers (PAI)
**Purpose:** Meta-containers for domain expertise  
**Characteristics:**
- Progressive disclosure
- On-demand loading
- Intent-based activation
- Minimal metadata footprint

---

## Module Interface Standards

### Metadata (YAML Frontmatter)

```yaml
---
type: [agent|skill|workflow|rule]
name: "Module Name"
version: "1.0.0"
dependencies:
  - "dependency-1"
  - "dependency-2"
inputs:
  - name: "input1"
    type: "string"
    required: true
outputs:
  - name: "output1"
    type: "document"
created: "YYYY-MM-DD"
updated: "YYYY-MM-DD"
---
```

### Standard Sections

All modules should include:
- **Overview:** Purpose and domain
- **Core Capabilities:** What it does
- **Integration Points:** Inputs, outputs, dependencies
- **Usage Examples:** How to use
- **Related Modules:** Connections to other modules

---

## Module Chaining Examples

### Example 1: Blog Post with Header Image

```
Input: Essay dictation
  ↓
[Content Creation Skill]
  ↓ (formatted blog post)
[Image Creation Skill]
  ↓
Output: Complete blog post with header image
```

### Example 2: Research to Report

```
Input: Research topic
  ↓
[Research Skill]
  ├─→ [Perplexity Researcher Agent]
  ├─→ [Claude Researcher Agent]
  └─→ [Gemini Researcher Agent]
  ↓ (parallel results)
[Synthesis Workflow]
  ↓
Output: Comprehensive research report
```

### Example 3: Project Development Pipeline

```
Input: Raw idea
  ↓
[Analyst Agent]
  → Uses: Brainstorming Skill
  → Workflow: Six Thinking Hats
  ↓ (Project Brief)
[Product Manager Agent]
  → Uses: Story Development Skill
  → Workflow: Scale-Adaptive Planning
  ↓ (PRD)
[Architect Agent]
  → Workflow: Architecture Generation
  ↓ (Architecture Document)
[Scrum Master Agent]
  → Uses: Story Development Skill
  ↓ (Developer Stories)
[Developer Agent]
  ↓
Output: Implemented Code
```

---

## Extension Mechanisms

### Adding a New Agent

1. Create `agents/[agent-name]/AGENT.md`
2. Define role, directives, and capabilities
3. Specify which skills are used
4. Document integration points
5. Add to agent registry

### Adding a New Skill

1. Create `skills/[skill-name]/SKILL.md`
2. Define capabilities and workflows
3. Document context requirements
4. Specify tool/MCP dependencies
5. Provide usage examples

### Adding a New Workflow

1. Create `workflows/[workflow-name]/WORKFLOW.md`
2. Define steps and prerequisites
3. Specify inputs and outputs
4. Document execution time/complexity
5. Include integration examples

### Organization-Specific Override

```
/default-templates/
  /agents/
    /analyst/
      AGENT.md            # Default

/org-uuid-1/
  /overrides/
    /agents/
      /analyst/
        AGENT.md          # Organization-specific version
```

**Precedence:** Organization override > Default template

---

## Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|-----------|
| Module coupling | Medium | Strict interface contracts, version management |
| Dependency complexity | Medium | Dependency visualization, documentation |
| Override conflicts | High | Clear precedence rules, validation |
| Discovery challenges | Low | Module registry, search functionality |

---

## Testing Requirements

1. **Module Independence**
   - Test each module in isolation
   - Verify no hidden dependencies
   - Validate interface contracts

2. **Chain Testing**
   - Test common module chains  
   - Verify data flows correctly
   - Validate error handling

3. **Extension Testing**
   - Add custom module
   - Verify discovery
   - Test override mechanism

---

## Related Rules

- [Platform Portability](#) - Module format standards
- [Cloud Storage Sync](#) - Module distribution
- [Mandatory Context Loading](#) - Module context requirements

---

## Compliance

- UNIX philosophy principles
- Modular design best practices
- Interface-driven development
- Separation of concerns
