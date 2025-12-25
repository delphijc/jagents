# JAGENTS Agents MCP Server

Model Context Protocol server that exposes JAGENTS agents as callable tools for AI assistants.

## Overview

This MCP server provides access to all JAGENTS agents through a standardized protocol, enabling AI development tools like Gemini CLI, Qwen Code, Kiro, and Antigravity to leverage the Agile method and agent capabilities.

## Installation

```bash
cd jagents-mcp-servers/agents-mcp-server
npm install
npm run build
```

## Usage

### Running the Server

```bash
npm start
```

The server runs on stdio and communicates via MCP protocol.

### Available Agents

#### 1. Analyst
**Tool Name:** `jagents_analyst`

**Purpose:** Reflective coach for ideation using Creative Intelligence Suite

**Input:**
- `userIdea` (required): Raw idea or project concept
- `workflow` (optional): "six-thinking-hats" or "five-ws"
- `context` (optional): Additional context

**Output:** Project Brief with brainstorming analysis

**Example:**
```json
{
  "name": "jagents_analyst",
  "arguments": {
    "userIdea": "Build a mobile app for tracking personal carbon footprint",
    "workflow": "six-thinking-hats"
  }
}
```

#### 2. Product Manager
**Tool Name:** `jagents_product_manager`

**Purpose:** Scale-adaptive planner that converts Project Briefs into PRDs

**Input:**
- `projectBrief` (required): Project Brief from Analyst
- `planningTrack` (optional): "quick-flow", "agile-standard", or "enterprise"
- `scope` (optional): Scope constraints

**Output:** Product Requirements Document (PRD) or Game Design Document (GDD)

**Example:**
```json
{
  "name": "jagents_product_manager",
  "arguments": {
    "projectBrief": "[Project Brief content]",
    "planningTrack": "agile-standard"
  }
}
```

## Configuration for AI Tools

### Gemini CLI

Add to `~/.gemini-cli/mcp-config.json`:

```json
{
  "mcpServers": {
    "jagents-agents": {
      "command": "node",
      "args": ["/absolute/path/to/jagents-mcp-servers/agents-mcp-server/dist/index.js"]
    }
  }
}
```

### Qwen Code

Add to Qwen Code MCP configuration:

```toml
[mcp.servers.jagents-agents]
command = "node"
args = ["/absolute/path/to/jagents-mcp-servers/agents-mcp-server/dist/index.js"]
```

### Kiro

Import as MCP server in Kiro settings.

### Antigravity

Configure in `.antigravity/mcp-config.json`.

## Development

### Building

```bash
npm run build
```

### Development Mode (watch)

```bash
npm run dev
```

### Project Structure

```
src/
├── index.ts           # Main MCP server
└── agents/
    ├── analyst.ts     # Analyst agent
    ├── product-manager.ts  # Product Manager agent
    └── ...            # Additional agents
```

## Agile method Integration

This server implements Phase 1 and Phase 2 of the Agile method:

**Phase 1: Ideation** → Analyst Agent → Project Brief  
**Phase 2: Planning** → Product Manager Agent → PRD/GDD  
**Phase 3: Architecture** → Architect + Security Architect → Architecture Document  
**Phase 4: Design** → UX Designer + Scrum Master → UX Design + Stories  
**Phase 5: Implementation** → Developer → Code Guidance  
**Phase 6: Testing** → Test Architect + Security Test Analyst → Test Reports  

### Workflow Diagrams

See [WORKFLOW_DIAGRAMS.md](./WORKFLOW_DIAGRAMS.md) for comprehensive sequence diagrams showing:
- Complete Agile method workflow
- Individual phase workflows
- Security BDD testing workflow
- Agent interaction patterns
- Data flow diagrams

## License

MIT
