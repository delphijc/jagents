# JAGENTS + Kiro AI Integration

Integration guide for using JAGENTS MCP servers with Kiro AI IDE.

---

## Overview

Kiro AI is an agentic IDE with native Model Context Protocol (MCP) support, allowing seamless integration with all 4 JAGENTS MCP servers.

**What You Get:**
- 30 MCP tools (10 agents + 9 skills + 5 workflows + 6 rules)
- Full Agile method development workflow
- Security-first architecture validation
- AI-powered coding assistance

---

## Prerequisites

1. **Kiro AI** installed
2. **Node.js** v18+ installed
3. **JAGENTS MCP servers** built

```bash
# Build all JAGENTS servers
cd /path/to/jagents/jagents-mcp-servers
./build-all.sh
```

---

## Configuration

### Method 1: Kiro Settings File

Kiro supports MCP configuration through a settings file (location varies by platform).

**Location:**
- macOS: `~/Library/Application Support/Kiro/settings.json`
- Linux: `~/.config/kiro/settings.json`
- Windows: `%APPDATA%\Kiro\settings.json`

**Configuration:**

```json
{
  "mcp": {
    "servers": {
      "jagents-agents": {
        "command": "node",
        "args": ["/absolute/path/to/jagents-mcp-servers/agents-mcp-server/dist/index.js"],
        "description": "JAGENTS Agile Method Development Agents"
      },
      "jagents-skills": {
        "command": "node",
        "args": ["/absolute/path/to/jagents-mcp-servers/skills-mcp-server/dist/index.js"],
        "description": "JAGENTS Reusable Skills"
      },
      "jagents-workflows": {
        "command": "node",
        "args": ["/absolute/path/to/jagents-mcp-servers/workflows-mcp-server/dist/index.js"],
        "description": "JAGENTS Orchestration Workflows"
      },
      "jagents-rules": {
        "command": "node",
        "args": ["/absolute/path/to/jagents-mcp-servers/rules-mcp-server/dist/index.js"],
        "description": "JAGENTS Architectural & Security Rules"
      }
    }
  }
}
```

### Method 2: Project-Specific Configuration

Create `.kiro/mcp.json` in your project root:

```json
{
  "servers": {
    "jagents-agents": {
      "command": "node",
      "args": ["../../jagents-mcp-servers/agents-mcp-server/dist/index.js"]
    },
    "jagents-skills": {
      "command": "node",
      "args": ["../../jagents-mcp-servers/skills-mcp-server/dist/index.js"]
    },
    "jagents-workflows": {
      "command": "node",
      "args": ["../../jagents-mcp-servers/workflows-mcp-server/dist/index.js"]
    },
    "jagents-rules": {
      "command": "node",
      "args": ["../../jagents-mcp-servers/rules-mcp-server/dist/index.js"]
    }
  }
}
```

---

## Verification

1. **Restart Kiro AI**
2. **Open Command Palette** (Cmd/Ctrl + Shift + P)
3. **Search for "MCP"** → Select "MCP: List Servers"
4. **Verify 4 JAGENTS servers** appear

---

## Usage Examples

### Example 1: Feature ideation with Six Thinking Hats

```
Prompt: @jagents-workflows Use the Six Thinking Hats workflow to analyze 
the idea of adding real-time collaboration to our editor.

Context: We're building a code editor and considering multiplayer editing.

Expected Output:
- White Hat: Facts about real-time collaboration
- Red Hat: Team's gut feelings
- Black Hat: Technical risks
- Yellow Hat: Business benefits
- Green Hat: Creative alternatives
- Blue Hat: Next steps
```

### Example 2: Security Validation

```
Prompt: @jagents-rules Validate our authentication architecture against 
Zero Trust principles.

Architecture: [Paste your auth design]

Expected Output:
- Zero Trust maturity score
- Compliance checklist
- Security gaps
- Recommendations
```

### Example 3: Complete Development Workflow

```
1. Ideation:
   @jagents-agents Use the Analyst agent to brainstorm ideas for a 
   new feature: AI-powered code review

2. Requirements:
   @jagents-agents Use the Product Manager to create a PRD with 
   "agile-standard" planning track

3. Architecture:
   @jagents-agents Use the Architect to design the system with BDD stories

4. Security Check:
   @jagents-rules Validate platform portability and Zero Trust compliance

5. Sprint Planning:
   @jagents-agents Use Scrum Master to break down into developer stories

6. Implementation Guidance:
   @jagents-agents Use Developer agent with story and architecture context

7. Security Testing:
   @jagents-agents Use Security Test Analyst for BDD test scenarios
```

---

## Kiro-Specific Features

### Workspace Integration

Kiro automatically provides file context to MCP servers:

```
Prompt: @jagents-skills Research best practices for [current file technology]
```

Kiro will pass the current file as context.

### Terminal Integration

Execute MCP tool outputs directly:

```
Prompt: @jagents-agents Use Developer agent to generate implementation plan

Then: Select code → Right-click → "Execute in Terminal"
```

### Git Integration

```
Prompt: @jagents-skills Use Story Development skill to create a user story 
from this git diff

Kiro passes: Current branch diff automatically
```

---

## Troubleshooting

### Servers Not Appearing

**Check:**
1. Node.js installed: `node --version`
2. Servers built: `ls jagents-mcp-servers/*/dist/index.js`
3. Absolute paths in config (no `~` or relative paths)

**Solution:**
```bash
# Get absolute path
cd /path/to/jagents-mcp-servers/agents-mcp-server
pwd
# Use output in config
```

### Tool Execution Fails

**Check server manually:**
```bash
node /path/to/agents-mcp-server/dist/index.js
# Should output server info
```

### Permission Errors

```bash
chmod +x jagents-mcp-servers/*/dist/index.js
```

---

## Performance Tips

1. **Use Project-Specific Config** for faster startup
2. **Enable Kiro's MCP caching** in settings
3. **Use specific servers** with `@jagents-skills` instead of all servers

---

## Best Practices

### 1. Leverage Kiro's Context Awareness

```
# Good: Let Kiro provide file context
@jagents-skills Research best practices for this codebase

# Less optimal: Manually paste code
@jagents-skills Research ... [paste code]
```

### 2. Chain Tools

```
# Use workflow → agent → skill
@jagents-workflows Scale-adaptive planning for this project
  → @jagents-agents Product Manager create PRD
    → @jagents-skills Story development for epics
```

### 3. Validate Early

```
# Check architecture rules before coding
@jagents-rules Validate modular architecture
@jagents-rules Check platform portability
```

---

## Example Project Workflow

See [`examples/complete-feature-workflow.md`](./examples/complete-feature-workflow.md)

---

## Additional Resources

- [Kiro MCP Documentation](https://kiro.dev/docs/mcp)
- [JAGENTS Deployment Guide](../../DEPLOYMENT_GUIDE.md)
- [MCP Protocol Spec](https://modelcontextprotocol.io)

---

**Version:** 1.0.0  
**Last Updated:** 2024-12-25  
**Status:** Production Ready
