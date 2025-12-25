# WORKFLOW: Scale-Adaptive Planning

**Purpose:** Select appropriate planning depth based on project complexity  
**Skill:** Story Development, Recursive Planning  
**Complexity:** Medium  
**Execution Time:** 10-20 minutes

---

## Overview

The Scale-Adaptive Planning workflow analyzes project goals to select the correct planning methodology and documentation depth, tailoring the process to project complexity.

---

## Prerequisites

- Project Brief or initial concept
- Understanding of project scope
- Product Manager agent context loaded

---

## Planning Tracks

### Quick Flow
**For:** Simple, well-understood projects  
**Documentation:** Minimal  
**Timeline:** Days to 1-2 weeks

### Agile method
**For:** Standard projects with moderate complexity  
**Documentation:** Full (PRD, Architecture, Stories)  
**Timeline:** Weeks to months

### Enterprise Track
**For:** Large, complex, multi-team projects  
**Documentation:** Comprehensive + governance  
**Timeline:** Months to years

---

## Workflow Steps

### Step 1: Project Assessment

**Action:** Analyze project characteristics  
**Duration:** 5-7 minutes

**Evaluate:**
1. **Scope Complexity**
   - Number of features
   - Integration points
   - Technical challenges

2. **Stakeholder Complexity**
   - Number of stakeholders
   - Decision-making structure
   - Approval requirements

3. **Timeline Constraints**
   - Urgency level
   - Fixed deadlines
   - Iteration capability

4. **Team Characteristics**
   - Team size
   - Experience level
   - Collaboration patterns

5. **Risk Profile**
   - Technical risks
   - Business risks
   - Regulatory requirements

**Output:** Project complexity assessment

### Step 2: Track Selection

**Action:** Choose appropriate planning track  
**Duration:** 2-3 minutes

**Decision Matrix:**

| Dimension | Quick Flow | Agile method | Enterprise |
|-----------|-----------|-------------|------------|
| Features | 1-3 | 4-15 | 16+ |
| Stakeholders | 1-2 | 3-7 | 8+ |
| Timeline | < 2 weeks | 2-12 weeks | 12+ weeks |
| Team Size | 1-2 | 2-5 | 6+ |
| Risk | Low | Medium | High |

**Command:** `*workflow-init [track]`

**Output:** Selected planning track

### Step 3: Documentation Planning

**Action:** Determine required artifacts  
**Duration:** 3-5 minutes

**Quick Flow Artifacts:**
- Brief requirements doc
- Simple tech decisions log
- Story list

**Agile method Artifacts:**
- Product Requirements Document (PRD)
- Architecture Document
- UX Design Document (if applicable)
- Developer Stories

**Enterprise Artifacts:**
- Comprehensive PRD
- Full Architecture Document
- UX Design Document
- Security requirements
- Compliance documentation
- Risk management plan
- Governance framework
- Detailed story backlog

**Output:** Documentation plan

### Step 4: Phase Planning

**Action:** Map out project phases  
**Duration:** 5-7 minutes

**Standard Phases:**
1. **Ideation** (if needed)
   - Brainstorming
   - Concept refinement
   - Project Brief

2. **Planning**
   - Requirements definition
   - Scope control
   - Story breakdown

3. **Solutioning**
   - Architecture design
   - UX design
   - Technical specifications

4. **Implementation**
   - Story execution
   - Code development
   - Testing

5. **Delivery**
   - QA validation
   - Deployment
   - Documentation

**Output:** Phase roadmap

### Step 5: Scope Control Activation

**Action:** Engage critical questioning  
**Duration:** 5-10 minutes

**Advanced Elicitation: "Hindsight is 20/20"**

Ask:
- "If this project failed, what would be the most likely reason?"
- "What features could we remove and still deliver value?"
- "What assumptions are we making that could be wrong?"
- "What would a minimal solution look like?"

**Goal:** Ensure lean MVP scope

**Output:** Validated, lean scope

---

## Output Format

```markdown
# Planning Track Selection: [Project Name]

## Complexity Assessment

### Scope
[Analysis]
**Score:** [Low/Medium/High]

### Stakeholders
[Analysis]
**Score:** [Low/Medium/High]

### Timeline
[Analysis]
**Score:** [Low/Medium/High]

### Team
[Analysis]
**Score:** [Low/Medium/High]

### Risk
[Analysis]
**Score:** [Low/Medium/High]

## Selected Track
**Track:** [Quick Flow / Agile method / Enterprise]

**Rationale:** [Why this track is appropriate]

## Required Artifacts
1. [Artifact 1]
2. [Artifact 2]
...

## Phase Roadmap
### Phase 1: [Name]
- Duration: [Timeframe]
- Key Activities: [List]

### Phase 2: [Name]
...

## Scope Validation
[Results of "Hindsight is 20/20" exercise]

## Next Steps
1. [Action 1]
2. [Action 2]
...
```

---

## Integration Points

- **Input:** Project Brief from Analyst
- **Output:** Planning track and documentation requirements
- **Used By:** Product Manager agent
- **Leads To:** PRD creation in selected detail level
- **Command:** `*workflow-init`
