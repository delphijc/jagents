# JAGENTS + Antigravity Integration

Integration guide for using JAGENTS MCP servers with Google Deepmind's Antigravity agent.

---

## Overview

Antigravity is Google Deepmind's agentic AI coding assistant with native MCP support. Since you're currently using Antigravity, integrating JAGENTS gives you 30 additional specialized tools for Agile method development.

**What You Get:**
- 30 MCP tools seamlessly integrated
- Task boundary compatibility
- Google Workspace integration
-Full Agile method workflow support

---

## Prerequisites

1. **Antigravity** (already installed - you're using it!)
2. **Node.js** v18+ installed
3. **JAGENTS MCP servers** built

```bash
# Build all JAGENTS servers
cd /Users/delphijc/Projects/jagents/jagents-mcp-servers
./build-all.sh
```

---

## Configuration

### Method 1: Global Installation (Recommended)

Install JAGENTS MCP servers globally for access from any project directory:

```bash
# Build and link all JAGENTS servers globally
cd /Users/delphijc/Projects/jagents/jagents-mcp-servers
./link-all.sh
```

Then update `~/.gemini/antigravity/mcp-config.json`:

```json
{
  "mcpServers": {
    "jagents-agents": {
      "command": "node",
      "args": [
        "/opt/homebrew/lib/node_modules/@jagents/agents-mcp-server/dist/index.js"
      ],
      "description": "10 Agile method development agents"
    },
    "jagents-workflows": {
      "command": "node",
      "args": [
        "/opt/homebrew/lib/node_modules/@jagents/workflows-mcp-server/dist/index.js"
      ],
      "description": "5 multi-step orchestration workflows"
    },
    "jagents-skills": {
      "command": "node",
      "args": [
        "/opt/homebrew/lib/node_modules/@jagents/skills-mcp-server/dist/index.js"
      ],
      "description": "9 reusable capability skills"
    },
    "jagents-rules": {
      "command": "node",
      "args": [
        "/opt/homebrew/lib/node_modules/@jagents/rules-mcp-server/dist/index.js"
      ],
      "description": "6 architectural and security rule validators"
    }
  }
}
```

**Why Global Installation?**
- ✅ Works from any project directory
- ✅ No hardcoded paths
- ✅ Easier to update
- ✅ Simpler configuration

### Method 2: Local Installation (Alternative)

If you prefer project-specific installation, edit `~/.gemini/antigravity/mcp-config.json` with absolute paths:

Edit `~/.gemini/antigravity/mcp-config.json`:

```json
{
  "mcpServers": {
    "jagents-agents": {
      "command": "node",
      "args": [
        "/opt/homebrew/lib/node_modules/@jagents/agents-mcp-server/dist/index.js"
      ],
      "description": "10 Agile method development agents"
    },
    "jagents-workflows": {
      "command": "node",
      "args": [
        "/opt/homebrew/lib/node_modules/@jagents/workflows-mcp-server/dist/index.js"
      ],
      "description": "5 multi-step orchestration workflows"
    },
    "jagents-skills": {
      "command": "node",
      "args": [
        "/opt/homebrew/lib/node_modules/@jagents/skills-mcp-server/dist/index.js"
      ],
      "description": "9 reusable capability skills"
    },
    "jagents-rules": {
      "command": "node",
      "args": [
        "/opt/homebrew/lib/node_modules/@jagents/rules-mcp-server/dist/index.js"
      ],
      "description": "6 architectural and security rule validators"
    }
  }
}
```

---

## Verification

### Check Global Installation

```bash
# Verify commands are available
which jagents-agents
which jagents-skills
which jagents-workflows
which jagents-rules

# Test command execution
echo '{"jsonrpc":"2.0","id":1,"method":"tools/list"}' | jagents-agents
```

### Test with Antigravity

Since you're using Antigravity right now, try:

```
List all available JAGENTS MCP tools
```

You should see 30 tools across 4 servers.

---

## Usage Examples

### Example 1: Ideation with Antigravity's Task Boundaries

```
Use the jagents_analyst tool with Six Thinking Hats to brainstorm 
ideas for improving our JAGENTS framework.

userIdea: "Add visual workflow designer"
workflow: "six-thinking-hats"
```

**Antigravity Benefits:**
- Task boundaries automatically track progress
- Artifacts created in `.gemini/antigravity/brain/`
- Screenshots/recordings auto-saved

### Example 2: Security Assessment

```
Use jagents_workflow_enterprise_security_assessment to evaluate 
our current JAGENTS MCP architecture.

organizationName: "JAGENTS"
scope: "MCP Servers"
frameworks: ["NIST CSF", "ISO 27001"]
includeDevSecOps: true
```

**Antigravity Benefits:**
- Real-time status updates
- Automatic artifact generation
- Integration with Google Workspace

### Example 3: Complete Development Workflow with Task Tracking

```
Let's build a new feature using the full Agile method:

1. Use jagents_analyst to ideate
2. Use jagents_product_manager to create PRD  
3. Use jagents_architect to design architecture
4. Use jagents_rule_zero_trust_architecture to validate security
5. Use jagents_ux_designer for UX design
6. Use jagents_scrum_master for sprint planning
7. Use jagents_developer for implementation guidance
8. Use jagents_security_test_analyst for BDD tests
```

**Antigravity Benefits:**
- Each step tracked in task boundaries
- All artifacts linked together
- Progress visible in real-time
- Video recording of entire workflow

---

## Antigravity-Specific Features

### 1. Task Boundary Integration

JAGENTS tools work seamlessly with Antigravity's task tracking:

```
[Task: Planning New Feature]
├── Step 1: jagents_analyst (ideation)
├── Step 2: jagents_product_manager (PRD)
├── Step 3: jagents_architect (design)
└── Step 4: jagents_scrum_master (stories)
```

All tracked automatically!

### 2. Artifact Management

Artifacts created by JAGENTS are saved in:
```
~/.gemini/antigravity/brain/{conversation-id}/
├── implementation_plan.md  (from agents)
├── task.md                 (progress tracking)
└── walkthrough.md          (completed work)
```

### 3. Browser Integration

```
Use jagents_skill_research to investigate Zero Trust Architecture, 
then open the references in browser
```

Antigravity can:
- Execute research
- Open URLs automatically
- Capture screenshots
- Record browsing session

### 4. File System Access

```
Use jagents_developer to create implementation plan for files 
in /Users/delphijc/Projects/jagents/jagents-mcp-servers
```

Antigravity automatically provides file context!

---

## Best Practices with Antigravity

### 1. Use Task Boundaries

Let Antigravity track your JAGENTS workflow:

```
Create a new feature using Agile method:
[Antigravity creates task boundary automatically]

Phase 1: Ideation → jagents_analyst
Phase 2: Planning → jagents_product_manager  
Phase 3: Architecture → jagents_architect
Phase 4: Security → jagents_rule_zero_trust_architecture
```

### 2. Leverage Artifacts

```
Generate PRD with jagents_product_manager and save it as an artifact

Then: Reference it in next step
Use the PRD artifact with jagents_architect to design the system
```

### 3. Combine with Antigravity Tools

```
# Use JAGENTS + Antigravity tools together
1. jagents_skill_research (gather info)
2. search_web (Antigravity - validate findings)
3. jagents_architect (design system)
4. write_to_file (Antigravity - save design)
5. jagents_rule_platform_portability (validate)
```

### 4. Visual Workflow Tracking

Antigravity shows progress in real-time:

```
Task: "Build Authentication System"
├── ✅ Ideation (jagents_analyst)
├── ✅ Requirements (jagents_product_manager)
├── 🔄 Architecture (jagents_architect) ← Current
├── ⏳ Security Validation
└── ⏳ Implementation Plan
```

---

## Advanced Integration

### Calling JAGENTS from Python (Antigravity Scripts)

```python
import subprocess
import json

def call_jagents_tool(server, tool, args):
    """Call JAGENTS MCP tool from Antigravity script"""
    cmd = [
        "node",
        f"/Users/delphijc/Projects/jagents/jagents-mcp-servers/{server}-mcp-server/dist/index.js"
    ]
    
    # MCP protocol
    request = {
        "jsonrpc": "2.0",
        "id": 1,
        "method": "tools/call",
        "params": {
            "name": tool,
            "arguments": args
        }
    }
    
    result = subprocess.run(
        cmd,
        input=json.dumps(request),
        capture_output=True,
        text=True
    )
    
    return json.loads(result.stdout)

# Example: Call analyst
response = call_jagents_tool(
    server="agents",
    tool="jagents_analyst",
    args={
        "userIdea": "AI code review",
        "workflow": "six-thinking-hats"
    }
)

print(response["result"]["content"][0]["text"])
```

---

## Troubleshooting

### Tools Not Appearing

**For global installation:**

```bash
# Check if commands exist
which jagents-agents

# Verify they're in PATH
echo $PATH | grep -q "$(npm config get prefix)/bin" && echo "✅ In PATH" || echo "❌ Not in PATH"

# Rebuild and relink if needed
cd /Users/delphijc/Projects/jagents/jagents-mcp-servers
./link-all.sh
```

**For local installation:**

**Current session:**
```
gemini mcp list
```

**Check installation:**
```bash
ls -la /Users/delphijc/Projects/jagents/jagents-mcp-servers/*/dist/index.js
```

**Rebuild if needed:**
```bash
cd /Users/delphijc/Projects/jagents/jagents-mcp-servers
./build-all.sh
```

### Tool Execution Fails

```bash
# Test server manually
node /Users/delphijc/Projects/jagents/jagents-mcp-servers/agents-mcp-server/dist/index.js

# Should output:
# 🎯 JAGENTS Agents MCP Server v1.0.0
# 📚 Available agents: 10/10
```

### Artifacts Not Saving

Check artifacts directory:
```bash
ls -la ~/.gemini/antigravity/brain/bf7522fc-67eb-4648-9dfe-231e8e7439b6/
```

---

## Performance Tips

### 1. Preload Servers

Add to Antigravity startup:
```bash
# In ~/.zshrc or ~/.bashrc
alias antigravity-jagents="gemini mcp list"
```

### 2. Use Specific Servers

```
# Good: Specific server
Use jagents_skill_research from the skills server

# Less optimal: Search all servers
Use research tool
```

### 3. Cache Results

Antigravity automatically caches MCP responses. For repeated calls:
```
Cache this research for reuse:
jagents_skill_research topic="Zero Trust" depth="extensive"
```

---

## Example Workflow (Current Session)

**You can try this right now:**

```
1. Use jagents_workflow_six_thinking_hats to analyze:
   topic: "Adding a visual MCP server monitor to JAGENTS"
   
2. Use jagents_product_manager to create PRD based on the analysis

3. Use jagents_architect to design the system

4. Use jagents_rule_platform_portability to validate web compatibility

5. Save all artifacts to this conversation's brain directory
```

**Antigravity will:**
- Track progress with task boundaries
- Create artifacts automatically
- Link everything together
- Provide completion summary

---

## Additional Resources

- [Antigravity Documentation](https://deepmind.google/technologies/gemini/antigravity)
- [JAGENTS Deployment Guide](../../DEPLOYMENT_GUIDE.md)
- [MCP Protocol Spec](https://modelcontextprotocol.io)

---

**Version:** 1.0.0  
**Last Updated:** 2024-12-25  
**Status:** Production Ready  
**Platform:** Google Deepmind Antigravity
