# WORKFLOW: Extensive Research

**Purpose:** Deep multi-source investigation with parallel agent execution  
**Skill:** Research  
**Complexity:** High  
**Execution Time:** 5-15 minutes

---

## Overview

This workflow enables comprehensive research by launching multiple specialized research agents in parallel, synthesizing their findings into a cohesive report.

---

## Prerequisites

- Clear research topic or question
- Access to research MCPs (web search, document retrieval)
- Research Skill loaded and activated

---

## Workflow Steps

### Step 1: Intent Analysis

**Action:** Analyze user's research request  
**Output:** Refined research question and scope

1. Parse user's natural language input
2. Identify key research dimensions
3. Determine required depth and breadth
4. Define success criteria

### Step 2: Context Loading

**Action:** Load minimal necessary context  
**Output:** Research parameters and constraints

1. Access Research Skill context
2. Load MCP server locations
3. Retrieve user preferences (if any)
4. Set token budget for each agent

### Step 3: Parallel Agent Launch

**Action:** Spawn specialized research agents  
**Output:** Multiple concurrent research streams

Launch these orchestration agents in parallel:

1. **Perplexity Researcher**
   - Web-based research
   - Current information
   - Factual data gathering

2. **Claude Researcher**
   - Document analysis
   - Deep reasoning
   - Conceptual synthesis

3. **Gemini Researcher**
   - Multi-modal research
   - Visual content analysis
   - Diverse perspective gathering

### Step 4: Data Collection

**Action:** Each agent executes search and retrieval  
**Output:** Raw research data from multiple sources

**Per Agent:**
1. Execute specialized searches
2. Retrieve relevant documents
3. Extract key information
4. Apply initial filtering

**Tools Used:**
- Web search MCPs
- Document retrieval services
- `brightdata` MCP for advanced scraping
- Specialized APIs

### Step 5: Synthesis & Analysis

**Action:** Consolidate findings from all agents  
**Output:** Analyzed and structured research data

1. Collect results from all parallel agents
2. Identify common themes across sources
3. Flag inconsistencies or contradictions
4. Validate information quality
5. Organize by relevance and importance

### Step 6: Report Generation

**Action:** Create comprehensive research report  
**Output:** Final deliverable with citations

1. Structure findings logically
2. Synthesize insights
3. Include source citations
4. Highlight key takeaways
5. Note gaps or areas for further research
6. Format in requested style (markdown by default)

---

## Output Format

```markdown
# Research Report: [Topic]

## Executive Summary
[2-3 sentence overview]

## Key Findings
1. [Finding 1]
2. [Finding 2]
...

## Detailed Analysis
### [Subtopic 1]
[Content with citations]

### [Subtopic 2]
[Content with citations]

## Sources
- [Source 1]
- [Source 2]
...

## Gaps & Further Research
[Areas that need additional investigation]
```

---

## Performance Characteristics

- **Time Savings:** 60-70% faster than sequential research
- **Depth:** Multi-source, cross-validated information
- **Breadth:** Diverse perspectives and approaches
- **Token Efficiency:** Progressive disclosure minimizes context load

---

## Integration Points

- **Input:** Research question or topic
- **Output:** Comprehensive research report
- **Parallel Agents:** 3+ specialized orchestration agents
- **Tools:** MCPs, web search, document retrieval
- **Context:** Research Skill, MCP configurations
