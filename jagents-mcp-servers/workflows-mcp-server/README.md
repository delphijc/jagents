# JAGENTS Workflows MCP Server

MCP server that exposes all JAGENTS workflows as orchestration tools.

## Overview

This server provides 5 multi-step workflows that orchestrate skills and provide structured processes for complex tasks.

## Installation

```bash
cd jagents-mcp-servers/workflows-mcp-server
npm install
npm run build
```

## Usage

### Running the Server

```bash
npm start
```

The server runs on stdio and communicates via MCP protocol.

### Available Workflows

#### 1. Six Thinking Hats

**Tool:** `jagents_workflow_six_thinking_hats`

Edward de Bono's methodology for structured multi-perspective thinking.

**Perspectives:**

- 🤍 White Hat: Facts & Information
- ❤️ Red Hat: Emotions & Feelings
- 🖤 Black Hat: Critical Judgment
- 💛 Yellow Hat: Positive Aspects
- 💚 Green Hat: Creativity & Alternatives
- 🔵 Blue Hat: Process Control

**Example:**

```json
{
  "name": "jagents_workflow_six_thinking_hats",
  "arguments": {
    "topic": "Implementing AI code review tool",
    "context": "Startup with 10 engineers"
  }
}
```

---

#### 2. Five W's

**Tool:** `jagents_workflow_five_ws`

Structured questioning framework for comprehensive analysis.

**Questions:**

- 👥 Who: Stakeholders
- 📋 What: Problem & Solution
- 📍 Where: Context
- ⏰ When: Timeline
- 🎯 Why: Root Cause

---

#### 3. Scale-Adaptive Planning

**Tool:** `jagents_workflow_scale_adaptive_planning`

Automatically selects planning track based on project complexity.

**Tracks:**

- **Quick Flow:** < 2 weeks, simple scope
- **Agile Standard:** 2-12 weeks, moderate complexity
- **Enterprise:** 12+ weeks, high complexity

**Complexity Scoring:**

- Duration-based
- Team size-based
- Stated complexity

---

#### 4. Extensive Research

**Tool:** `jagents_workflow_extensive_research`

Multi-phase comprehensive research workflow.

**Phases:**

1. Research Planning
2. Data Collection
3. Analysis & Synthesis
4. Report Generation

**Sources:**

- Academic (Google Scholar, IEEE, ACM)
- Industry (Gartner, Forrester, blogs)
- Technical (docs, GitHub, Stack Overflow)
- Market (analysis, competitors, reviews)

---

#### 5. Enterprise Security Assessment

**Tool:** `jagents_workflow_enterprise_security_assessment`

Comprehensive security evaluation workflow.

**Assessment Areas:**

- Governance, Risk & Compliance (GRC)
- Technical Security
- DevSecOps Pipeline
- Compliance Status

**Frameworks:**

- NIST CSF
- ISO 27001
- SOC 2
- PCI-DSS
- HIPAA

---

#### 6. BMGD Workflows (Game Dev)

- `jagents_workflow_bmgd_preproduction`
- `jagents_workflow_bmgd_game_design`
- `jagents_workflow_bmgd_technical`
- `jagents_workflow_bmgd_production`

#### 7. CIS Workflows (Innovation)

- `jagents_workflow_cis_brainstorming`
- `jagents_workflow_cis_design_thinking`
- `jagents_workflow_cis_innovation_strategy`
- `jagents_workflow_cis_problem_solving`
- `jagents_workflow_cis_storytelling`

#### 8. Core Workflows

- `jagents_workflow_advanced_elicitation`
- `jagents_workflow_party_mode`
- `jagents_workflow_quick_flow`

---

## Configuration

### Gemini CLI

Add to MCP servers:

```bash
gemini mcp add jagents-workflows node /opt/homebrew/bin/jagents-workflows
```

Or in `settings.json`:

```json
{
  "mcpServers": {
    "jagents-workflows": {
      "command": "node",
      "args": ["/opt/homebrew/bin/jagents-workflows"]
    }
  }
}
```

---

## Architecture

Workflows:

- ✅ **Orchestrate** skills in multi-step processes
- ✅ **Stateful** - Maintain workflow context
- ✅ **Composable** - Can be combined
- ✅ **Reusable** - Called by any agent

**Integration with Skills:**
Workflows can invoke Skills MCP Server tools to execute subtasks.

---

## Development

### Project Structure

```
workflows-mcp-server/
├── src/
│   ├── index.ts                           # Main server
│   └── workflows/
│       ├── six-thinking-hats.ts
│       ├── five-ws.ts
│       ├── scale-adaptive-planning.ts
│       ├── extensive-research.ts
│       └── enterprise-security-assessment.ts
├── dist/                                  # Compiled output
├── package.json
├── tsconfig.json
└── README.md
```

### Build

```bash
npm run build
```

### Development Mode

```bash
npm run dev
```

---

## License

MIT
