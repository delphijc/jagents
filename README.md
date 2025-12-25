# JAGENTS - AI-Powered Development Framework

**Version:** 2.0.0 (Modular MCP Architecture)  
**License:** MIT  
**Status:** Production Ready

[![MCP Compatible](https://img.shields.io/badge/MCP-Compatible-blue)](https://modelcontextprotocol.io)
[![Platforms](https://img.shields.io/badge/Platforms-5-green)](#platform-compatibility)
[![Tools](https://img.shields.io/badge/Tools-30-orange)](#architecture)

---

## Overview

JAGENTS is a comprehensive framework for AI-assisted development, providing 30 specialized MCP tools across 4 independent servers. Built on the Agile method and designed for platform portability, it enables structured, security-first development workflows across all major AI coding platforms.

**Architecture:** 4 independent MCP servers providing 30 specialized tools (10 agents, 9 skills, 5 workflows, 6 rules) for coordinated, composable AI-assisted development.

---

## Platform Compatibility

JAGENTS works seamlessly across all major AI coding platforms through the Model Context Protocol (MCP).

| Platform | Provider | MCP Support | Integration Guide | Status |
|----------|----------|-------------|-------------------|--------|
| **Gemini CLI** | Google | ✅ Native | [Setup Guide](./integrations/gemini-cli/README.md) | ✅ Tested |
| **Antigravity** | Google Deepmind | ✅ Native | [Setup Guide](./integrations/antigravity/README.md) | ✅ Tested |
| **Claude Code** | Anthropic | ✅ Native | [Setup Guide](./integrations/claude-code/README.md) | ✅ Ready |
| **Kiro AI** | Kiro | ✅ Native | [Setup Guide](./integrations/kiro/README.md) | ✅ Ready |
| **Qwen Code** | Alibaba | ✅ SDK | [Setup Guide](./integrations/qwen-code/README.md) | ✅ Ready |

**Universal:** Works with any MCP-compatible AI assistant through standard configuration.

---

## Quick Start

### 1. Build All Servers

```bash
git clone https://github.com/your-org/jagents.git
cd jagents/jagents-mcp-servers
./build-all.sh
```

### 2. Configure Your Platform

Choose your AI platform and follow the integration guide:

**Gemini CLI / Antigravity:**
```bash
BASE="/path/to/jagents/jagents-mcp-servers"
gemini mcp add jagents-agents node "$BASE/agents-mcp-server/dist/index.js"
gemini mcp add jagents-skills node "$BASE/skills-mcp-server/dist/index.js"
gemini mcp add jagents-workflows node "$BASE/workflows-mcp-server/dist/index.js"
gemini mcp add jagents-rules node "$BASE/rules-mcp-server/dist/index.js"
```

**Claude Desktop:**
Edit `~/Library/Application Support/Claude/claude_desktop_config.json`:
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

**Other Platforms:** See [Integration Guides](#integrations)

### 3. Verify Installation

```
List all JAGENTS MCP tools
```

Expected: 30 tools across 4 servers

---

## Architecture

```
JAGENTS 2.0 - Modular MCP Architecture
======================================

┌────────────────────────────────────┐
│    AI Platform (Any MCP Client)    │
└────────────────┬───────────────────┘
                 │
    ┌────────────┴─────────┐
    │                      │
    ▼                      ▼
┌─────────────┐      ┌──────────────┐
│   Agents    │─────▶│  Workflows   │
│  (10 tools) │      │  (5 tools)   │
└──────┬──────┘      └──────┬───────┘
       │                    │
       ▼                    ▼
┌─────────────┐      ┌──────────────┐
│   Skills    │      │    Rules     │
│  (9 tools)  │      │  (6 tools)   │
└─────────────┘      └──────────────┘
```

### 30 MCP Tools

#### Agents (10) - Core Development Roles
- `jagents_analyst` - Ideation & brainstorming
- `jagents_product_manager` - Requirements & PRD
- `jagents_architect` - System architecture
- `jagents_ux_designer` - User experience design
- `jagents_scrum_master` - Sprint planning
- `jagents_developer` - Implementation guidance
- `jagents_test_architect` - Test strategy
- `jagents_security_architect` - Security design
- `jagents_security_test_analyst` - BDD security testing
- `jagents_cso` - Executive security strategy

#### Skills (9) - Reusable Capabilities
- `jagents_skill_brainstorming` - Creative ideation
- `jagents_skill_design_thinking` - 5-phase UX process
- `jagents_skill_research` - Deep information gathering
- `jagents_skill_story_development` - User story creation
- `jagents_skill_grc_management` - Governance, Risk, Compliance
- `jagents_skill_devsecops` - CI/CD security
- `jagents_skill_content_creation` - Documentation
- `jagents_skill_image_creation` - Visual assets
- `jagents_skill_life_management` - Personal productivity

#### Workflows (5) - Multi-Step Orchestration
- `jagents_workflow_six_thinking_hats` - 6-perspective analysis
- `jagents_workflow_five_ws` - Structured questioning
- `jagents_workflow_scale_adaptive_planning` - Auto track selection
- `jagents_workflow_extensive_research` - 4-phase research
- `jagents_workflow_enterprise_security_assessment` - Full security audit

#### Rules (6) - Validation & Compliance
- `jagents_rule_platform_portability` - Cross-platform validation
- `jagents_rule_modular_architecture` - SOLID principles
- `jagents_rule_mandatory_context_loading` - Context requirements
- `jagents_rule_multi_org_isolation` - Multi-tenant security
- `jagents_rule_cloud_storage_sync` - Storage sync validation
- `jagents_rule_zero_trust_architecture` - Zero Trust compliance

---

## Example Workflow

### Building a New Feature (Agile Method)

```
1. Ideation
   → Use jagents_analyst with Six Thinking Hats
   → Output: Project Brief

2. Requirements
   → Use jagents_product_manager with Scale-Adaptive Planning
   → Output: PRD with user stories

3. Architecture
   → Use jagents_architect with BDD story generation
   → Validate with jagents_rule_platform_portability
   → Output: Architecture document

4. Security Design
   → Use jagents_security_architect
   → Validate with jagents_rule_zero_trust_architecture
   → Output: Security design + BDD tests

5. UX Design
   → Use jagents_ux_designer with Design Thinking
   → Output: UX design document

6. Sprint Planning
   → Use jagents_scrum_master
   → Output: Developer stories

7. Implementation
   → Use jagents_developer with context loading
   → Output: Implementation guidance

8. Security Testing
   → Use jagents_security_test_analyst
   → Output: BDD Gherkin scenarios
```

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for complete examples.

---

## Key Features

### 🔐 Security-First
- Built-in Zero Trust validation
- BDD security testing
- Multi-framework compliance (NIST, ISO, SOC2)
- Enterprise security assessment

### 🎯 Scale-Adaptive
- Automatic complexity detection
- 3 planning tracks (Quick/Agile/Enterprise)
- Context-appropriate depth

### 🧩 Modular & Composable
- 4 independent MCP servers
- Skills callable by any agent
- Workflows orchestrate skills
- Rules validate architecture

### 🌐 Platform Agnostic
- Works on 5+ AI platforms
- Standard MCP protocol
- No vendor lock-in
- Universal configuration

### 📊 Production Ready
- TypeScript with full type safety
- Comprehensive documentation
- 0 build errors
- Automated deployment

---

## Integrations

### Platform-Specific Guides

- **[Gemini CLI](./integrations/gemini-cli/README.md)** - Google's command-line AI
- **[Antigravity](./integrations/antigravity/README.md)** - Google Deepmind agent
- **[Claude Code](./integrations/claude-code/README.md)** - Anthropic's coding assistant
- **[Kiro AI](./integrations/kiro/README.md)** - Agentic IDE
- **[Qwen Code](./integrations/qwen-code/README.md)** - Alibaba's coding assistant (EN/中文)

### Universal MCP Configuration

Any MCP-compatible platform can use JAGENTS. See [MCP Protocol Documentation](https://modelcontextprotocol.io) for details.

---

## Documentation

### Core Documentation
- **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** - Complete setup & configuration
- **[WORKFLOW_DIAGRAMS.md](./jagents-mcp-servers/agents-mcp-server/WORKFLOW_DIAGRAMS.md)** - Visual workflow diagrams

### Server Documentation
- **[Agents MCP Server](./jagents-mcp-servers/agents-mcp-server/README.md)**
- **[Skills MCP Server](./jagents-mcp-servers/skills-mcp-server/README.md)**
- **[Workflows MCP Server](./jagents-mcp-servers/workflows-mcp-server/README.md)**
- **[Rules MCP Server](./jagents-mcp-servers/rules-mcp-server/README.md)**

### Integration Guides
- Platform-specific setup instructions
- Configuration examples
- Usage examples
- Troubleshooting

---

## Project Structure

```
jagents/
├── README.md                         # This file
├── DEPLOYMENT_GUIDE.md              # Complete deployment guide
├── jagents-mcp-servers/             # MCP server implementations
│   ├── build-all.sh                 # Build all servers
│   ├── agents-mcp-server/           # 10 development agents
│   ├── skills-mcp-server/           # 9 reusable skills
│   ├── workflows-mcp-server/        # 5 orchestration workflows
│   └── rules-mcp-server/            # 6 validation rules
├── integrations/                     # Platform integration guides
│   ├── gemini-cli/
│   ├── antigravity/
│   ├── claude-code/
│   ├── kiro/
│   └── qwen-code/
└── agents/                          # Original agent specifications
    skills/                          # Original skill specifications
    workflows/                       # Original workflow specifications
    rules/                           # Original rule specifications
```

---

## Use Cases

### Software Development
- Feature ideation to deployment
- Architecture design & validation
- Security-first development
- Agile sprint planning

### Security Engineering
- Zero Trust architecture validation
- Compliance assessment (NIST, ISO, SOC2)
- BDD security testing
- Multi-organization isolation

### Enterprise Projects
- Large-scale system design
- Multi-framework compliance
- GRC management
- DevSecOps integration

### Personal Projects
- Scale-adaptive planning
- Research & content creation
- Life management
- Quick prototyping

---

## Requirements

- **Node.js** v18 or higher
- **npm** v9 or higher  
- **AI Platform** with MCP support

---

## Contributing

Contributions welcome! Please:
1. Follow the modular architecture
2. Use TypeScript with strict mode
3. Document all MCP tools
4. Test across multiple platforms
5. Update integration guides

---

## License

MIT License - see [LICENSE](./LICENSE) file for details.

---

## Community

- **Issues:** [GitHub Issues](https://github.com/your-org/jagents/issues)
- **Discussions:** [GitHub Discussions](https://github.com/your-org/jagents/discussions)
- **Documentation:** [Full Docs](https://jagents.dev)

---

## Acknowledgments

- Built on the **Agile Method** framework
- Implements **Personal AI Infrastructure (PAI)** principles
- Utilizes the **Model Context Protocol (MCP)** by Anthropic
- Inspired by **modular development** best practices

---

## Quick Links

- 🚀 [Quick Start](#quick-start)
- 📚 [Documentation](#documentation)
- 🔌 [Integrations](#integrations)
- 🏗️ [Architecture](#architecture)
- 💡 [Examples](./DEPLOYMENT_GUIDE.md#complete-workflow-example)

---

**Built with the Agile Method | Ready for Production | Platform Agnostic**

**Version 2.0.0** | December 2024
