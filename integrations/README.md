# Platform Integrations Overview

This directory contains integration guides for using JAGENTS MCP servers with various AI coding platforms.

---

## Available Integrations

### ✅ Production Ready

| Platform | Provider | Guide | Features |
|----------|----------|-------|----------|
| **Gemini CLI** | Google | [Setup](./gemini-cli/README.md) | Native MCP, CLI tools |
| **Antigravity** | Google Deepmind | [Setup](./antigravity/README.md) | Task boundaries, artifacts |
| **Claude Code** | Anthropic | [Setup](./claude-code/README.md) | Desktop + API, tool chaining |
| **Kiro AI** | Kiro | [Setup](./kiro/README.md) | Workspace integration, Git |
| **Qwen Code** | Alibaba | [Setup](./qwen-code/README.md) | Bilingual (EN/中文), 256K context |

---

## Quick Selection Guide

### Choose Based on Your Needs

**For Enterprise Development:**
→ **Claude Code** or **Kiro AI**
- Best tool selection
- Professional workflows
- Team collaboration

**For Chinese Teams:**
→ **Qwen Code**
- Bilingual support
- Alibaba Cloud integration
- Large context window

**For Google Ecosystem:**
→ **Gemini CLI** or **Antigravity**
- Google Workspace integration
- Task tracking
- Artifact management

**For Visual Development:**
→ **Kiro AI**
- IDE experience
- Visual debugging
- Terminal integration

---

## What's Included in Each Guide

Every integration guide provides:

✅ **Prerequisites** - What you need installed  
✅ **Configuration** - Step-by-step setup  
✅ **Verification** - How to test it works  
✅ **Usage Examples** - Real-world workflows  
✅ **Platform-Specific Features** - Unique capabilities  
✅ **Troubleshooting** - Common issues & solutions  
✅ **Best Practices** - Tips for optimal use

---

## General Setup Pattern

All platforms follow this pattern:

### 1. Build JAGENTS Servers

```bash
cd /path/to/jagents/jagents-mcp-servers
./build-all.sh
```

### 2. Configure MCP Servers

Each platform uses JSON configuration:

```json
{
  "mcpServers": {
    "jagents-agents": {
      "command": "node",
      "args": ["/path/to/agents-mcp-server/dist/index.js"]
    },
    "jagents-skills": {
      "command": "node",
      "args": ["/path/to/skills-mcp-server/dist/index.js"]
    },
    "jagents-workflows": {
      "command": "node",
      "args": ["/path/to/workflows-mcp-server/dist/index.js"]
    },
    "jagents-rules": {
      "command": "node",
      "args": ["/path/to/rules-mcp-server/dist/index.js"]
    }
  }
}
```

### 3. Verify Installation

```
List all JAGENTS MCP tools
```

Expected: 30 tools across 4 servers

---

## Platform-Specific Configuration Locations

| Platform | Configuration File |
|----------|-------------------|
| Gemini CLI | Via `gemini mcp add` command |
| Antigravity | `~/.gemini/settings.json` |
| Claude Desktop | `~/Library/Application Support/Claude/claude_desktop_config.json` |
| Kiro | `~/Library/Application Support/Kiro/settings.json` or `.kiro/mcp.json` |
| Qwen Code | `~/.qwen/config.json` or `.qwen-mcp.json` |

---

## Testing Your Integration

### Basic Test

```
Use jagents_skill_brainstorming to generate ideas for:
"AI-powered code review tool"

Method: structured
```

### Complete Workflow Test

```
1. Ideation: jagents_analyst (Six Thinking Hats)
2. Requirements: jagents_product_manager (Agile Standard)
3. Architecture: jagents_architect (with BDD)
4. Security: jagents_rule_zero_trust_architecture
5. Implementation: jagents_developer
```

If all 5 steps work, integration is successful!

---

## Common Issues

### Servers Not Found

**Solution:** Check absolute paths in configuration
```bash
# Get absolute path
cd /path/to/jagents-mcp-servers/agents-mcp-server
pwd
# Use full output in config (no ~or relative paths)
```

### Tool Execution Fails

**Solution:** Test server manually
```bash
node /path/to/agents-mcp-server/dist/index.js
# Should output server info with 10 agents
```

### Permission Errors

**Solution:** Make scripts executable
```bash
chmod +x jagents-mcp-servers/*/dist/index.js
```

---

## Multi-Platform Usage

You can use JAGENTS on multiple platforms simultaneously!

**Example:**
- **Gemini CLI** for quick terminal commands
- **Claude Desktop** for complex feature development
- **Kiro** for visual debugging

All share the same JAGENTS servers - just configure each platform.

---

## Getting Help

1. **Check platform-specific guide** first
2. **See [DEPLOYMENT_GUIDE.md](../DEPLOYMENT_GUIDE.md)** for general setup
3. **Review [MCP Protocol Docs](https://modelcontextprotocol.io)** for MCP details
4. **Open GitHub issue** for persistent problems

---

## Contributing

Have a new platform integration? Please contribute!

1. Create `integrations/[platform-name]/`
2. Write `README.md` following the template
3. Add configuration examples
4. Test thoroughly
5. Submit PR

---

**Last Updated:** December 2024  
**Version:** 1.0.0
