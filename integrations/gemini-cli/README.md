# JAGENTS Integration for Gemini CLI

Enable JAGENTS agents within Google's Gemini CLI using Model Context Protocol (MCP).

## Prerequisites

- [Gemini CLI](https://geminicli.com) installed
- Node.js 20+ installed
- JAGENTS repository cloned

---

## Installation

### Step 1: Build the MCP Server

```bash
cd jagents-mcp-servers/agents-mcp-server
npm install
npm run build
```

Verify the build succeeded:
```bash
ls dist/index.js  # Should exist
```

---

### Step 2: Configure Gemini CLI

You have two options for adding the JAGENTS MCP server:

#### **Option A: Using CLI Command (Recommended)**

The easiest way is using the `gemini mcp add` command:

```bash
# Add JAGENTS agents server
gemini mcp add jagents-agents node /absolute/path/to/jagents-mcp-servers/agents-mcp-server/dist/index.js

# Or for user-level configuration (available in all projects):
gemini mcp add -s user jagents-agents node /absolute/path/to/jagents-mcp-servers/agents-mcp-server/dist/index.js
```

**Replace `/absolute/path/to/`** with the actual path to your JAGENTS installation.

To find the absolute path:
```bash
cd /Users/delphijc/Projects/jagents/jagents-mcp-servers/agents-mcp-server
pwd  # Copy this path
# Then append /dist/index.js
```

#### **Option B: Manual Configuration**

Alternatively, manually edit your Gemini CLI settings file:

**Project-level config:** `.gemini/settings.json` (in your project directory)  
**User-level config:** `~/.gemini/settings.json` (available everywhere)

Add the following to your `settings.json`:

```json
{
  "mcpServers": {
    "jagents-agents": {
      "command": "node",
      "args": ["/absolute/path/to/jagents-mcp-servers/agents-mcp-server/dist/index.js"],
      "timeout": 30000
    }
  }
}
```

---

### Step 3: Verify Installation

Start Gemini CLI:
```bash
gemini
```

Check available MCP servers:
```
/mcp
```

You should see **jagents-agents** listed with status **Connected** and the available tools:
- `jagents_analyst`
- `jagents_product_manager`

To see detailed tool information:
```
What tools from the jagents-agents MCP server are available?
```

---

## Usage

### Agent 1: Analyst - Ideation

**Purpose:** Transform raw ideas into structured Project Briefs using creative brainstorming techniques.

**Example prompts:**

```
Use the jagents_analyst tool to help me brainstorm a mobile app 
for tracking personal carbon footprint. Use the six-thinking-hats workflow.
```

```
I want to build a security tool for penetration testing. 
Use the analyst agent with the five-ws workflow to refine this idea.
```

**What happens:**
1. Gemini calls the `jagents_analyst` tool
2. Agent executes selected brainstorming workflow
3. Returns a structured Project Brief
4. Gemini synthesizes and presents results

---

### Agent 2: Product Manager - Requirements

**Purpose:** Convert Project Briefs into detailed Product Requirements Documents (PRDs).

**Example prompts:**

```
Here's my Project Brief: [paste brief]

Use jagents_product_manager to create a detailed PRD 
using the agile-standard planning track.
```

```
I have a project brief for an enterprise security platform. 
Use the product manager agent with the enterprise planning track.
```

**Chaining Agents:**

```
Use jagents_analyst to brainstorm a task management app, 
then use jagents_product_manager to create the PRD from that brief.
```

Gemini will:
1. Call Analyst agent → Get Project Brief
2. Call Product Manager agent with the brief → Get PRD
3. Present complete workflow output

---

## Agile method Workflow in Gemini CLI

The agents implement the Agile method phases:

```
Your Idea
  ↓
[Gemini calls jagents_analyst]
  ↓
Project Brief (Phase 1)
  ↓
[Gemini calls jagents_product_manager]
  ↓
PRD/GDD (Phase 2)
  ↓
[Future: Architecture, Development, QA agents]
```

### Full Workflow Example

```
I want to build a mobile app for personal finance management.

Please:
1. Use jagents_analyst with six-thinking-hats to explore the idea
2. Use jagents_product_manager to create a PRD with agile-standard track
3. Synthesize the outputs into a comprehensive project plan
```

---

## Advanced Usage

### Providing Context

```
Use jagents_analyst to brainstorm an authentication system.

Context: This is for a healthcare application that must comply 
with HIPAA. Target users are doctors and nurses who need quick 
access on mobile devices.
```

### Specifying Planning Tracks

The Product Manager supports three planning tracks:

- **quick-flow**: Simple projects (< 2 weeks)
- **agile-standard**: Standard projects (2-12 weeks) [default]
- **enterprise**: Complex projects (12+ weeks)

```
Use jagents_product_manager with enterprise track because this 
project involves compliance, security, and multi-team coordination.
```

---

## Managing the MCP Server

### List Configured Servers

```bash
gemini mcp list
```

### Remove the Server

```bash
gemini mcp remove jagents-agents
```

### Update Server Configuration

To update, remove and re-add:
```bash
gemini mcp remove jagents-agents
gemini mcp add jagents-agents node /path/to/dist/index.js
```

---

## Troubleshooting

### Server Not Appearing

1. **Verify MCP server is built:**
   ```bash
   ls /absolute/path/to/jagents-mcp-servers/agents-mcp-server/dist/index.js
   ```

2. **Check if server was added:**
   ```bash
   gemini mcp list
   ```

3. **Check connection status:**
   ```
   /mcp
   ```
   Status should show "Connected"

4. **Restart Gemini CLI:**
   Exit and restart the CLI to reconnect to servers.

### Connection Errors

If the server shows "Error" status in `/mcp`:

1. **Check the command path is absolute:**
   ```bash
   # Wrong (relative path):
   node dist/index.js
   
   # Right (absolute path):
   node /Users/delphijc/Projects/jagents/jagents-mcp-servers/agents-mcp-server/dist/index.js
   ```

2. **Test the server directly:**
   ```bash
   cd jagents-mcp-servers/agents-mcp-server
   npm start
   # Should show: "JAGENTS Agents MCP Server running on stdio"
   # Press Ctrl+C to exit
   ```

3. **Check Gemini CLI logs:**
   Look for error messages in the CLI output when it connects to servers.

### Tools Not Working

If tools appear but don't execute:

1. **Check tool confirmation settings:**
   - Gemini CLI may require confirmation for tool execution
   - Approve when prompted

2. **Enable auto-trust (optional, for development):**
   ```bash
   gemini mcp add --trust jagents-agents node /path/to/dist/index.js
   ```
   
   ⚠️ **Warning:** Only use `--trust` with servers you control.

### Timeout Issues

If the server times out:

```bash
# Increase timeout to 60 seconds
gemini mcp add --timeout 60000 jagents-agents node /path/to/dist/index.js
```

---

## Configuration Options

When using `gemini mcp add`, you can specify:

- `-s, --scope`: `user` (global) or `project` (current dir) [default: project]
- `--timeout`: Connection timeout in ms [default: 30000]
- `--trust`: Bypass tool confirmation prompts
- `--description`: Human-readable description
- `-e, --env`: Environment variables (e.g., `-e API_KEY=secret`)

Example with options:
```bash
gemini mcp add \
  -s user \
  --timeout 60000 \
  --description "JAGENTS agents for Agile method" \
  jagents-agents \
  node /path/to/dist/index.js
```

---

## Current Limitations

**Available agents (POC):**
- ✅ Analyst
- ✅ Product Manager
- ⏳ Architect (coming soon)
- ⏳ UX Designer (coming soon)
- ⏳ Scrum Master (coming soon)
- ⏳ Developer (coming soon)
- ⏳ Test Architect (coming soon)
- ⏳ Security Architect (coming soon)
- ⏳ CSO (coming soon)

---

## Next Steps

1. ✅ **Try the agents** - Run through the examples above
2. 📝 **Provide feedback** - How do the agents work for you?
3. 🔧 **Suggest improvements** - What features would help?
4. 🚀 **Implement remaining agents** - Help expand the framework

---

## Learn More

- [JAGENTS Framework Documentation](../../README.md)
- [Agile method Overview](../../WALKTHROUGH.md)
- [Model Context Protocol Specification](https://modelcontextprotocol.io)
- [Gemini CLI MCP Documentation](https://goo.gle/gemini-cli-docs-mcp)
- [Gemini CLI Official Docs](https://geminicli.com)

---

**Built with JAGENTS | Platform-Agnostic AI Agent Framework**
