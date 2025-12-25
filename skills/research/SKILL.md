# SKILL: Research

**Purpose:** Deep investigation and knowledge gathering across multiple sources  
**Domain:** Information retrieval, analysis, and synthesis  
**Type:** Meta-Container Skill

---

## Overview

The Research Skill is a meta-container for research expertise, enabling deep investigations across multiple sources. This skill utilizes **Progressive Disclosure**, loading only necessary metadata and instructions on-demand to prevent context bloat.

---

## Core Capabilities

1. **Extensive Research**
   - Deep multi-source investigation
   - Parallel orchestration of specialized research agents
   - Information synthesis and analysis

2. **Progressive Disclosure**
   - On-demand context loading
   - Minimal metadata footprint
   - Targeted knowledge retrieval

3. **Parallel Execution**
   - Multiple specialized research agents work concurrently
   - Reduced overall processing time
   - Diverse analytical perspectives

---

## Workflow Integration

### Primary Workflows

- `workflows/extensive-research.md` - Deep research across multiple sources
- `workflows/quick-research.md` - Rapid surface-level investigation
- `workflows/research-synthesis.md` - Consolidation of research findings

### Orchestration Agents

When activated, this skill can launch parallel orchestration agents:
- `perplexity-researcher` - Web-based research
- `claude-researcher` - Document analysis
- `gemini-researcher` - Multi-modal research

---

## Execution Pattern

1. **User Intent & Activation**
   - Natural language trigger loads Research Skill
   - Example: "Do extensive research on AI agent planning"

2. **Workflow Selection**
   - Appropriate research workflow activated based on scope
   - Progressive disclosure of necessary context

3. **Parallel Agent Execution**
   - Multiple specialized agents work concurrently
   - Each agent loads only required context

4. **Tool Utilization**
   - MCPs for web searches and data retrieval
   - External services (e.g., brightdata for scraping)

5. **Synthesis & Output**
   - Results collected and analyzed
   - Comprehensive report generated

---

## Context Management

- Loads exact right amount of context at exact right time
- Utilizes Unified File-based Context (UFC)
- Prevents context pollution through targeted hydration

---

## Integration Points

- **Input:** Research query, topic, or domain
- **Output:** Synthesized research report
- **MCPs Used:** Web search, document retrieval, data scraping
- **Agents:** Perplexity-researcher, Claude-researcher, Gemini-researcher
