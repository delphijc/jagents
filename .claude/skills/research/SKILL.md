---
name: research
description: Deep multi-source investigation with parallel research agents for comprehensive knowledge synthesis
triggers:
  - "do extensive research"
  - "research this topic"
  - "parallel research"
  - "deep investigation"
  - "research synthesis"
---

# Research

## Purpose

A meta-container for research expertise enabling deep investigations across multiple sources simultaneously. Uses **Progressive Disclosure** to load only necessary metadata on-demand, preventing context bloat while maintaining research depth.

## Core Capabilities

### Extensive Research
- Deep multi-source investigation across web, documents, and specialized APIs
- Parallel orchestration of specialized research agents
- Information synthesis and cross-validation

### Progressive Disclosure
- On-demand context loading
- Minimal metadata footprint
- Targeted knowledge retrieval

### Parallel Execution
- Multiple specialized research agents work concurrently
- Reduces overall processing time by 60-70%
- Provides diverse analytical perspectives

## Workflow: Extensive Research

Comprehensive multi-source investigation with parallel agent execution.

### Workflow Steps

**Step 1: Intent Analysis**
- Parse user's natural language research request
- Identify key research dimensions
- Determine required depth and breadth
- Define success criteria

**Step 2: Context Loading**
- Load Research Skill context
- Retrieve MCP server locations
- Set token budgets for each agent
- Gather user preferences

**Step 3: Parallel Agent Launch**
Launch specialized research agents concurrently:

1. **Perplexity Researcher:** Web-based research, current information, factual data gathering
2. **Claude Researcher:** Document analysis, deep reasoning, conceptual synthesis
3. **Gemini Researcher:** Multi-modal research, visual content analysis, diverse perspectives

**Step 4: Data Collection**
- Each agent executes specialized searches
- Retrieve relevant documents and sources
- Extract key information
- Apply initial filtering and quality checks

**Step 5: Synthesis & Analysis**
- Collect results from all parallel agents
- Identify common themes across sources
- Flag inconsistencies or contradictions
- Validate information quality
- Organize by relevance and importance

**Step 6: Report Generation**
- Structure findings logically
- Synthesize insights from multiple perspectives
- Include source citations
- Highlight key takeaways
- Note gaps for further research

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

## Sources
- [Source 1]
- [Source 2]
...

## Gaps & Further Research
[Areas needing additional investigation]
```

## Orchestration Agents

- **perplexity-researcher:** Web-based research with real-time data
- **claude-researcher:** Deep document analysis and reasoning
- **gemini-researcher:** Multi-modal research with visual analysis

## Integration Points

- **Input:** Research query, topic, or domain
- **Output:** Synthesized research report with citations
- **MCPs Used:** Web search, document retrieval, data scraping (brightdata)
- **Parallel Agents:** 3+ specialized orchestration agents
- **Tools:** APIs, web search, document retrieval services

## Performance Characteristics

- **Time Savings:** 60-70% faster than sequential research
- **Depth:** Multi-source, cross-validated information
- **Breadth:** Diverse perspectives and analytical approaches
- **Token Efficiency:** Progressive disclosure minimizes context load

## Prerequisites

- Clear research topic or question
- Access to research MCPs
- Research Skill loaded and activated
- Execution Time: 5-15 minutes depending on scope
