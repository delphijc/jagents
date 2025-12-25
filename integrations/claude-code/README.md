# JAGENTS + Claude Code Integration

Integration guide for using JAGENTS MCP servers with Anthropic's Claude Code assistant.

---

## Overview

Claude Code is Anthropic's AI coding agent with comprehensive Model Context Protocol (MCP) support. As the creators of MCP, Anthropic provides first-class integration for all JAGENTS servers.

**What You Get:**
- 30 MCP tools + Claude's coding intelligence
- Remote MCP server support
- Seamless tool chaining
- Contextual code generation

---

## Prerequisites

1. **Claude Code** installed
2. **Node.js** v18+ installed
3. **JAGENTS MCP servers** built
4. **Anthropic API key**

```bash
# Build JAGENTS servers
cd /path/to/jagents/jagents-mcp-servers
./build-all.sh
```

---

## Configuration

### Method 1: Claude Desktop App

#### macOS
Edit `~/Library/Application Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "jagents-agents": {
      "command": "node",
      "args": ["/absolute/path/to/jagents-mcp-servers/agents-mcp-server/dist/index.js"]
    },
    "jagents-skills": {
      "command": "node",
      "args": ["/absolute/path/to/jagents-mcp-servers/skills-mcp-server/dist/index.js"]
    },
    "jagents-workflows": {
      "command": "node",
      "args": ["/absolute/path/to/jagents-mcp-servers/workflows-mcp-server/dist/index.js"]
    },
    "jagents-rules": {
      "command": "node",
      "args": ["/absolute/path/to/jagents-mcp-server/rules-mcp-server/dist/index.js"]
    }
  }
}
```

#### Windows
Edit `%APPDATA%\Claude\claude_desktop_config.json` (same structure)

#### Linux
Edit `~/.config/Claude/claude_desktop_config.json` (same structure)

### Method 2: Project-Specific (`.mcp.json`)

Create in your project root:

```json
{
  "mcpServers": {
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

### Method 3: Remote MCP Servers (Advanced)

Claude Code supports remote MCP servers:

```json
{
  "mcpServers": {
    "jagents-agents": {
      "url": "http://your-server:3000/mcp",
      "headers": {
        "Authorization": "Bearer your-token"
      }
    }
  }
}
```

---

## Verification

1. **Restart Claude Desktop**
2. **Open a new chat**
3. **Check MCP tools:**

```
List all available JAGENTS MCP tools
```

Expected response: 30 tools across 4 servers

---

## Usage Examples

### Example 1: Ideation with Claude's Context Understanding

```
I want to build a new feature for our application.

Use the JAGENTS analyst agent with Six Thinking Hats workflow 
to brainstorm ideas for adding real-time collaboration.

Context: We're building a code editor like VS Code
```

**Claude will:**
1. Understand your codebase context
2. Call `jagents_workflow_six_thinking_hats`
3. Analyze from 6 perspectives
4. Provide synthesized recommendations with code examples

### Example 2: Complete Security Assessment

```
Audit our authentication system for Zero Trust compliance.

Steps:
1. Use jagents_workflow_enterprise_security_assessment
2. Use jagents_rule_zero_trust_architecture for validation
3. Use jagents_security_architect for BDD test scenarios

Our stack: Node.js, PostgreSQL, JWT, OAuth2
```

**Claude will:**
1. Assess your architecture
2. Generate specific findings
3. Create actionable remediation plan
4. Produce BDD Gherkin scenarios

### Example 3: End-to-End Feature Development

```
Let's build a user authentication feature using Agile method:

1. Ideation: jagents_analyst (Six Thinking Hats)
2. Requirements: jagents_product_manager (Agile Standard track)
3. Architecture: jagents_architect (with BDD stories)
4. Security: jagents_rule_zero_trust_architecture
5. UX Design: jagents_ux_designer  
6. Sprint Planning: jagents_scrum_master
7. Implementation: jagents_developer
8. Testing: jagents_security_test_analyst

Generate complete documentation + code for each phase.
```

**Claude will:**
- Execute all 8 phases
- Generate comprehensive docs
- Provide implementation code
- Create test suites
- Link everything together

---

## Claude Code-Specific Features

### 1. Intelligent Tool Selection

Claude automatically chooses the best JAGENTS tools:

```
Build a secure microservices architecture with proper isolation
```

**Claude may call:**
- `jagents_architect` (design)
- `jagents_rule_modular_architecture` (validation)
- `jagents_rule_multi_org_isolation` (security)
- `jagents_rule_zero_trust_architecture` (compliance)

All without you specifying!

### 2. Context-Aware Code Generation

```
Use jagents_developer to implement the authentication service

[Claude reads your existing codebase]
[Calls jagents_developer with full context]
[Generates code that matches your style]
```

### 3. Tool Chaining

```
Research, design, and implement a feature end-to-end
```

**Claude chains:**
1. `jagents_skill_research` → findings
2. `jagents_architect` → design using findings
3. `jagents_developer` → implementation based on design
4. `jagents_test_architect` → test strategy

### 4. Artifact Management

Claude creates persistent artifacts:

```
Generate a PRD with jagents_product_manager and save it as an artifact

Then in a new chat:
Use the PRD artifact to design the architecture
```

Claude remembers across conversations!

---

## Advanced Integration Patterns

### Pattern 1: Iterative Design

```
1. Draft architecture with jagents_architect
2. Validate with jagents_rule_platform_portability
3. If issues found → refine architecture
4. Re-validate until compliant
```

Claude handles iteration automatically.

### Pattern 2: Security-First Development

```
For every feature:
1. Design (jagents_architect)
2. Security validation (jagents_rule_zero_trust_architecture)
3. BDD tests (jagents_security_architect)
4. Implementation (jagents_developer)
5. Security testing (jagents_security_test_analyst)
```

### Pattern 3: Multi-Framework Compliance

```
Validate against multiple frameworks simultaneously:
- NIST CSF
- ISO 27001
- SOC 2
- PCI-DSS

Using: jagents_rule_zero_trust_architecture
```

Claude processes all frameworks in parallel.

---

## Claude Desktop vs Claude API

### Desktop (Recommended)

**Pros:**
- Full MCP support
- Visual interface
- Artifact management
- Easier debugging

**Setup:** Configuration file (above)

### API (Programmatic)

**Pros:**
- Automation
- Integration with CI/CD
- Custom workflows

**Setup:**
```python
import anthropic

client = anthropic.Anthropic(api_key="your-key")

# Call JAGENTS via Claude
response = client.messages.create(
    model="claude-3-5-sonnet-20241022",
    max_tokens=4096,
    tools=[
        # MCP tools loaded automatically
    ],
    messages=[{
        "role": "user",
        "content": "Use jagents_analyst to brainstorm feature ideas"
    }]
)
```

---

## Troubleshooting

### Tools Not Showing Up

**Check config file location:**
```bash
# macOS
cat ~/Library/Application\ Support/Claude/claude_desktop_config.json

# Linux
cat ~/.config/Claude/claude_desktop_config.json

# Windows (PowerShell)
Get-Content "$env:APPDATA\Claude\claude_desktop_config.json"
```

**Validate JSON:**
```bash
# Use jq or Python
cat claude_desktop_config.json | jq .

# or
python -m json.tool claude_desktop_config.json
```

### Server Connection Failures

**Test server manually:**
```bash
node /path/to/agents-mcp-server/dist/index.js

# Expected output:
# 🎯 JAGENTS Agents MCP Server v1.0.0
# 📚 Available agents: 10/10
```

**Check permissions:**
```bash
chmod +x /path/to/jagents-mcp-servers/*/dist/index.js
```

### Tool Execution Timeouts

**Increase timeout in config:**
```json
{
  "mcpServers": {
    "jagents-agents": {
      "command": "node",
      "args": ["..."],
      "timeout": 60000
    }
  }
}
```

---

## Best Practices

### 1. Let Claude Choose Tools

```
# Good: Let Claude decide
"Build a secure authentication system following best practices"

# Less optimal: Force specific tools
"Use jagents_architect then jagents_rule_zero_trust_architecture to..."
```

Claude's AI will select optimal JAGENTS tools.

### 2. Provide Context

```
# Good: Rich context
"We're using Next.js 14, Supabase auth, and deploying to Vercel.
Use JAGENTS to design a user management system."

# Less optimal: Vague request
"Design user management"
```

### 3. Iterate Based on Validation

```
1. Design feature
2. Validate with JAGENTS rules
3. If failures → refine design
4. Generate implementation
```

Claude can loop automatically.

### 4. Use Project-Specific Config

```
project/
├── .mcp.json  (JAGENTS config)
├── src/
└── README.md
```

Claude loads project-specific tools automatically!

---

## Example Workflows

See:
- [`examples/complete-feature-with-claude.md`](./examples/complete-feature-with-claude.md)
- [`examples/security-audit-workflow.md`](./examples/security-audit-workflow.md)

---

## Additional Resources

- [Claude MCP Documentation](https://docs.anthropic.com/claude/docs/mcp)
- [Anthropic MCP GitHub](https://github.com/anthropics/anthropic-sdk-python)
- [JAGENTS Deployment Guide](../../DEPLOYMENT_GUIDE.md)
- [MCP Protocol Spec](https://modelcontextprotocol.io)

---

**Version:** 1.0.0  
**Last Updated:** 2024-12-25  
**Status:** Production Ready  
**Platform:** Anthropic Claude Code
