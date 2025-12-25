# JAGENTS MCP Servers - Deployment Guide

Complete guide for deploying and configuring all 4 JAGENTS MCP servers.

---

## Architecture Overview

```
┌─────────────────────────────────────────────┐
│           AI Assistant (Gemini CLI)          │
└────────────────┬────────────────────────────┘
                 │
        ┌────────┴─────────┐
        │                  │
        ▼                  ▼
┌──────────────┐    ┌──────────────┐
│   Agents     │───▶│  Workflows   │
│ MCP Server   │    │  MCP Server  │
│  (10 tools)  │    │  (5 tools)   │
└──────┬───────┘    └──────┬───────┘
       │                   │
       ▼                   ▼
┌──────────────┐    ┌──────────────┐
│   Skills     │    │    Rules     │
│ MCP Server   │    │  MCP Server  │
│  (9 tools)   │    │  (6 tools)   │
└──────────────┘    └──────────────┘
```

**Total:** 30 MCP tools across 4 independent servers

---

## Global Installation (Recommended)

For system-wide access from any project directory, install JAGENTS MCP servers globally using npm link:

### Automated Installation

```bash
cd /path/to/jagents/jagents-mcp-servers

# Build and link all servers globally
./link-all.sh
```

This will:
1. Install dependencies for all 4 servers
2. Build TypeScript to JavaScript
3. Create global symlinks for easy access

### Manual Installation

If you prefer to install servers individually:

```bash
cd /path/to/jagents/jagents-mcp-servers

# For each server
cd agents-mcp-server && npm install && npm run build && npm link && cd ..
cd skills-mcp-server && npm install && npm run build && npm link && cd ..
cd workflows-mcp-server && npm install && npm run build && npm link && cd ..
cd rules-mcp-server && npm install && npm run build && npm link && cd ..
```

### Verify Global Installation

```bash
# Check commands are available
which jagents-agents
which jagents-skills
which jagents-workflows
which jagents-rules

# All should return paths like: /usr/local/bin/jagents-agents
```

### Configure Gemini CLI for Global Commands

Update `~/.gemini/settings.json` to use the globally installed commands:

```json
{
  "mcpServers": {
    "jagents-agents": {
      "command": "jagents-agents",
      "description": "10 Agile method development agents"
    },
    "jagents-skills": {
      "command": "jagents-skills",
      "description": "9 reusable capability skills"
    },
    "jagents-workflows": {
      "command": "jagents-workflows",
      "description": "5 multi-step orchestration workflows"
    },
    "jagents-rules": {
      "command": "jagents-rules",
      "description": "6 architectural and security rule validators"
    }
  }
}
```

**Benefits of Global Installation:**
- ✅ Access from any directory
- ✅ No hardcoded absolute paths
- ✅ Works across all projects
- ✅ Easier to update (rebuild + relink)
- ✅ Simpler configuration

### Uninstalling

```bash
cd /path/to/jagents/jagents-mcp-servers
./unlink-all.sh
```

---

## Quick Start (Local Installation)

> **Note:** For easier access from any directory, see [Global Installation](#global-installation-recommended) above. This section covers local installation with absolute paths.

### 1. Build All Servers

```bash
cd /path/to/jagents/jagents-mcp-servers

# Build all servers
cd agents-mcp-server && npm install && npm run build && cd ..
cd skills-mcp-server && npm install && npm run build && cd ..
cd workflows-mcp-server && npm install && npm run build && cd ..
cd rules-mcp-server && npm install && npm run build && cd ..
```

### 2. Configure Gemini CLI

Add all servers to Gemini CLI:

```bash
# Set base path (adjust for your system)
BASE_PATH="/Users/delphijc/Projects/jagents/jagents-mcp-servers"

# Add all 4 MCP servers
gemini mcp add jagents-agents node "${BASE_PATH}/agents-mcp-server/dist/index.js"
gemini mcp add jagents-workflows node "${BASE_PATH}/workflows-mcp-server/dist/index.js"
gemini mcp add jagents-skills node "${BASE_PATH}/skills-mcp-server/dist/index.js"
gemini mcp add jagents-rules node "${BASE_PATH}/rules-mcp-server/dist/index.js"
```

### 3. Verify Installation

```bash
gemini mcp list
```

Expected output:
```
jagents-agents
jagents-workflows
jagents-skills
jagents-rules
```

---

## Gemini CLI Configuration File

Alternatively, add to `~/.gemini/settings.json`:

```json
{
  "mcpServers": {
    "jagents-agents": {
      "command": "node",
      "args": ["/path/to/jagents-mcp-servers/agents-mcp-server/dist/index.js"],
      "description": "10 Agile method development agents"
    },
    "jagents-workflows": {
      "command": "node",
      "args": ["/path/to/jagents-mcp-servers/workflows-mcp-server/dist/index.js"],
      "description": "5 multi-step orchestration workflows"
    },
    "jagents-skills": {
      "command": "node",
      "args": ["/path/to/jagents-mcp-servers/skills-mcp-server/dist/index.js"],
      "description": "9 reusable capability skills"
    },
    "jagents-rules": {
      "command": "node",
      "args": ["/path/to/jagents-mcp-servers/rules-mcp-server/dist/index.js"],
      "description": "6 architectural and security rule validators"
    }
  }
}
```

---

## MCP Server Details

### 1. Agents MCP Server

**Port:** stdio  
**Tools:** 10  
**Purpose:** Core Agile method development agents

**Available Agents:**
- `jagents_analyst` - Ideation & brainstorming
- `jagents_product_manager` - Requirements & PRD
- `jagents_architect` - System architecture
- `jagents_ux_designer` - User experience design
- `jagents_scrum_master` - Sprint planning & stories
- `jagents_developer` - Code implementation guidance
- `jagents_test_architect` - Test strategy & QA
- `jagents_security_architect` - Security design
- `jagents_security_test_analyst` - BDD security testing
- `jagents_cso` - Executive security strategy

**Example Usage:**
```bash
gemini run jagents_analyst userIdea="AI code reviewer" workflow="six-thinking-hats"
```

---

### 2. Workflows MCP Server

**Port:** stdio  
**Tools:** 5  
**Purpose:** Multi-step orchestration processes

**Available Workflows:**
- `jagents_workflow_six_thinking_hats` - Multi-perspective analysis
- `jagents_workflow_five_ws` - Structured questioning
- `jagents_workflow_scale_adaptive_planning` - Complexity-based planning
- `jagents_workflow_extensive_research` - Deep research process
- `jagents_workflow_enterprise_security_assessment` - Security evaluation

**Example Usage:**
```bash
gemini run jagents_workflow_six_thinking_hats topic="Microservices migration"
```

---

### 3. Skills MCP Server

**Port:** stdio  
**Tools:** 9  
**Purpose:** Reusable capabilities

**Available Skills:**
- `jagents_skill_brainstorming` - Creative ideation
- `jagents_skill_design_thinking` - User-centered design
- `jagents_skill_research` - Information gathering
- `jagents_skill_story_development` - User story creation
- `jagents_skill_grc_management` - Governance, Risk, Compliance
- `jagents_skill_devsecops` - Security in CI/CD
- `jagents_skill_content_creation` - Documentation generation
- `jagents_skill_image_creation` - Visual asset specs
- `jagents_skill_life_management` - Personal productivity

**Example Usage:**
```bash
gemini run jagents_skill_research topic="Zero Trust Architecture" depth="extensive"
```

---

### 4. Rules MCP Server

**Port:** stdio  
**Tools:** 6  
**Purpose:** Architectural and security validation

**Available Rules:**
- `jagents_rule_platform_portability` - Cross-platform validation
- `jagents_rule_modular_architecture` - SOLID principles check
- `jagents_rule_mandatory_context_loading` - Context requirements
- `jagents_rule_multi_org_isolation` - Multi-tenant security
- `jagents_rule_cloud_storage_sync` - Storage sync validation
- `jagents_rule_zero_trust_architecture` - Zero Trust compliance

**Example Usage:**
```bash
gemini run jagents_rule_zero_trust_architecture architecture="..." controls='["mfa", "segmentation"]'
```

---

## Complete Workflow Example

### Building a New Feature

```bash
# 1. Ideation with Analyst
gemini run jagents_analyst \
  userIdea="User authentication system" \
  workflow="six-thinking-hats"

# 2. Requirements with Product Manager
gemini run jagents_product_manager \
  projectBrief="..." \
  planningTrack="agile-standard"

# 3. Architecture Design
gemini run jagents_architect \
  prd="..." \
  generateBddStories=true

# 4. Security Validation
gemini run jagents_rule_zero_trust_architecture \
  architecture="..." \
  controls='["mfa", "encryption"]'

# 5. UX Design
gemini run jagents_ux_designer \
  prd="..." \
  researchMethod="user-interviews"

# 6. Sprint Planning
gemini run jagents_scrum_master \
  prd="..." \
  uxDesign="..."

# 7. Implementation Guidance
gemini run jagents_developer \
  story="..." \
  architecture="..."

# 8. Test Strategy
gemini run jagents_test_architect \
  implementation="..." \
  complianceFrameworks='["ISO27001"]'
```

---

## Troubleshooting

### Server Not Starting

```bash
# Check if Node.js is installed
node --version  # Should be v18+

# Rebuild server
cd jagents-mcp-servers/agents-mcp-server
npm run build

# Test manually
node dist/index.js
```

### Tools Not Appearing

```bash
# Verify MCP server registration
gemini mcp list

# Remove and re-add
gemini mcp remove jagents-agents
gemini mcp add jagents-agents node /path/to/dist/index.js

# Restart Gemini CLI
```

### Global Installation Issues

**Commands not found after linking:**

```bash
# Verify npm global bin directory is in PATH
npm config get prefix
# Should output something like /usr/local or ~/.npm-global

# Check if global bin is in PATH
echo $PATH | grep -q "$(npm config get prefix)/bin" && echo "✅ In PATH" || echo "❌ Not in PATH"

# Add to PATH if needed (add to ~/.zshrc or ~/.bashrc)
export PATH="$(npm config get prefix)/bin:$PATH"
source ~/.zshrc  # or ~/.bashrc
```

**Link conflicts:**

```bash
# If you get "already exists" errors
cd /path/to/jagents/jagents-mcp-servers
./unlink-all.sh
./link-all.sh
```

**Stale links after updates:**

```bash
# After updating JAGENTS code, rebuild and relink
cd /path/to/jagents/jagents-mcp-servers
./link-all.sh  # Rebuilds automatically
```

### Permission Errors

```bash
# Make sure scripts are executable
chmod +x jagents-mcp-servers/*/dist/index.js
```

---

## Development Mode

### Watch Mode

```bash
# Terminal 1: Agents server
cd agents-mcp-server && npm run dev

# Terminal 2: Skills server
cd skills-mcp-server && npm run dev

# Terminal 3: Workflows server
cd workflows-mcp-server && npm run dev

# Terminal 4: Rules server
cd rules-mcp-server && npm run dev
```

### Testing Individual Servers

```bash
# Test agents server
cd agents-mcp-server
echo '{"method":"tools/list"}' | node dist/index.js

# Should output list of 10 agents
```

---

## Performance Optimization

### Lazy Loading

Servers start on-demand. First call may be slower (~1-2s), subsequent calls are instant.

### Resource Usage

Each server uses ~50-100MB RAM when active. All 4 servers: ~300MB total.

### Scaling

- Run servers on different machines
- Use message queue for async operations
- Cache frequently used tool results

---

## Security Considerations

### Local Development

- Servers run locally via stdio (no network exposure)
- No authentication needed for local use
- Data stays on your machine

### Production Deployment

If deploying remotely:
- Add authentication layer
- Use TLS for transport
- Implement rate limiting
- Add audit logging

---

## Monitoring

### Health Checks

```bash
# Check if servers respond
gemini mcp list

# Test each server
gemini run jagents_analyst userIdea="test"
gemini run jagents_workflow_five_ws topic="test"
gemini run jagents_skill_brainstorming topic="test"
gemini run jagents_rule_platform_portability architecture="test"
```

### Logs

Servers log to stderr:

```bash
# View logs (if running manually)
node dist/index.js 2> server.log
```

---

## Updating Servers

```bash
# Pull latest code
cd /path/to/jagents
git pull

# Rebuild all servers
cd jagents-mcp-servers
for server in agents-mcp-server skills-mcp-server workflows-mcp-server rules-mcp-server; do
  cd $server
  npm install
  npm run build
  cd ..
done

# Restart Gemini CLI to reload
```

---

## Backup & Recovery

### Backup

```bash
# Backup server configurations
cp ~/.gemini/settings.json ~/.gemini/settings.json.backup

# Backup compiled servers
tar -czf jagents-mcp-servers-backup.tar.gz jagents-mcp-servers/*/dist
```

### Recovery

```bash
# Restore configuration
cp ~/.gemini/settings.json.backup ~/.gemini/settings.json

# Rebuild if needed
cd jagents-mcp-servers
./build-all.sh  # Create this script
```

---

## Next Steps

1. ✅ Install and configure all 4 servers
2. ✅ Test with example workflows
3. 🔄 Integrate into your development process
4. 📚 Explore individual tool documentation
5. 🎯 Customize agents for your needs

---

**Support:** See individual server READMEs for detailed docs  
**Version:** 2.0.0  
**Last Updated:** 2024-12-24
