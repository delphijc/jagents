# JAGENTS + Qwen Code Integration

Integration guide for using JAGENTS MCP servers with Qwen Code CLI.

---

## Overview

Qwen Code is Alibaba's open-source AI coding assistant with native MCP support through the Qwen-Agent framework. It interfaces with all 4 JAGENTS MCP servers for enhanced development capabilities.

**What You Get:**
- 30 MCP tools integrated with Qwen3-Coder
- 256K context window (expandable to 1M tokens)
- Bilingual support (English/Chinese)
- Agile method + Qwen's code generation

---

## Prerequisites

1. **Qwen Code CLI** installed
2. **Node.js** v18+ installed
3. **JAGENTS MCP servers** built
4. **Qwen API key** (from Alibaba Cloud)

```bash
# Install Qwen Code
npm install -g qwen-code

# Build JAGENTS servers
cd /path/to/jagents/jagents-mcp-servers
./build-all.sh
```

---

## Configuration

### Global Configuration

Edit `~/.qwen/config.json`:

```json
{
  "apiKey": "your-qwen-api-key",
  "model": "qwen3-coder",
  "mcp": {
    "servers": {
      "jagents-agents": {
        "command": "node",
        "args": ["/absolute/path/to/jagents-mcp-servers/agents-mcp-server/dist/index.js"],
        "env": {},
        "description": "JAGENTS Agile Method Agents (Agile方法代理)"
      },
      "jagents-skills": {
        "command": "node",
        "args": ["/absolute/path/to/jagents-mcp-servers/skills-mcp-server/dist/index.js"],
        "env": {},
        "description": "JAGENTS Skills (可重用技能)"
      },
      "jagents-workflows": {
        "command": "node",
        "args": ["/absolute/path/to/jagents-mcp-servers/workflows-mcp-server/dist/index.js"],
        "env": {},
        "description": "JAGENTS Workflows (工作流程)"
      },
      "jagents-rules": {
        "command": "node",
        "args": ["/absolute/path/to/jagents-mcp-servers/rules-mcp-server/dist/index.js"],
        "env": {},
        "description": "JAGENTS Rules (架构规则)"
      }
    }
  }
}
```

### Project Configuration

Create `.qwen-mcp.json` in project root:

```json
{
  "servers": {
    "jagents-agents": {
      "command": "node",
      "args": ["../jagents-mcp-servers/agents-mcp-server/dist/index.js"]
    },
    "jagents-skills": {
      "command": "node",
      "args": ["../jagents-mcp-servers/skills-mcp-server/dist/index.js"]
    },
    "jagents-workflows": {
      "command": "node",
      "args": ["../jagents-mcp-servers/workflows-mcp-server/dist/index.js"]
    },
    "jagents-rules": {
      "command": "node",
      "args": ["../jagents-mcp-servers/rules-mcp-server/dist/index.js"]
    }
  }
}
```

---

## Verification

```bash
# List MCP servers
qwen-code mcp list

# Expected output:
# jagents-agents (10 tools)
# jagents-skills (9 tools)
# jagents-workflows (5 tools)
# jagents-rules (6 tools)

# Test a tool
qwen-code mcp call jagents_skill_brainstorming \
  '{"topic": "AI code assistant", "method": "structured"}'
```

---

## Usage Examples

### Example 1: Bilingual Development (English)

```bash
qwen-code chat

> Use the Six Thinking Hats workflow to analyze adding 
> AI-powered code search to our IDE

Qwen will:
1. Call jagents_workflow_six_thinking_hats
2. Analyze from 6 perspectives
3. Synthesize recommendations
4. Generate implementation plan
```

### Example 2: Bilingual Development (Chinese)

```bash
qwen-code chat

> 使用六顶思考帽工作流分析为我们的IDE添加AI驱动的代码搜索功能

Qwen will:
1. 调用 jagents_workflow_six_thinking_hats
2. 从6个角度分析
3. 综合建议
4. 生成实施计划
```

### Example 3: Security Analysis

```bash
qwen-code analyze --security

> @jagents-rules Validate Zero Trust Architecture for our auth system

> Architecture:
> - OAuth2 + OIDC
> - JWT tokens
> - API Gateway
> - Microservices

Qwen will:
1. Call jagents_rule_zero_trust_architecture
2. Check compliance against NIST SP 800-207
3. Score maturity
4. Provide recommendations (in English or Chinese)
```

### Example 4: Complete Feature Development

```bash
# 1. Ideation
qwen-code chat
> @mcp jagents_analyst userIdea="实时协作编辑" workflow="six-thinking-hats"

# 2. Requirements
> @mcp jagents_product_manager projectBrief="..." planningTrack="agile-standard"

# 3. Architecture
> @mcp jagents_architect prd="..." generateBddStories=true

# 4. Security Validation
> @mcp jagents_rule_zero_trust_architecture architecture="..."

# 5. Implementation
> @mcp jagents_developer story="..." architecture="..."
```

---

## Qwen Code-Specific Features

### 1. Large Context Window

Qwen Code can load entire codebases (256K-1M tokens):

```bash
qwen-code analyze --full-context

> @jagents-skills Research security best practices for this codebase

Qwen loads entire repo + calls research skill
```

### 2. Function Calling Optimization

Qwen3-Coder is optimized for MCP function calling:

```bash
# Qwen automatically selects best tools
qwen-code solve "Create a secure authentication system"

# Qwen may call:
# 1. jagents_workflow_scale_adaptive_planning
# 2. jagents_architect
# 3. jagents_rule_zero_trust_architecture
# 4. jagents_security_architect
```

### 3. Bilingual Output

```bash
# English output
qwen-code --lang=en mcp call jagents_skill_research \
  '{"topic": "Zero Trust", "depth": "standard"}'

# Chinese output (中文输出)
qwen-code --lang=zh mcp call jagents_skill_research \
  '{"topic": "零信任", "depth": "standard"}'
```

---

## Integration with Qwen-Agent Framework

For advanced use cases, integrate JAGENTS with Python:

```python
from qwen_agent.agents import Assistant
from qwen_agent.tools.mcp import MCPTool

# Initialize Qwen agent with JAGENTS MCP servers
jagents_tools = [
    MCPTool(server="jagents-agents"),
    MCPTool(server="jagents-skills"),
    MCPTool(server="jagents-workflows"),
    MCPTool(server="jagents-rules"),
]

agent = Assistant(
    llm="qwen3-coder",
    name="JagentsQwenAgent",
    description="AI development agent with Agile Method",
    function_list=jagents_tools
)

# Use agent
response = agent.run("Create a PRD for AI code review feature", 
                     lang="en")  # or "zh" for Chinese
```

---

## Troubleshooting

### API Key Issues

```bash
# Set API key
export QWEN_API_KEY="your-key-here"

# Or in config
qwen-code config set apiKey "your-key-here"
```

### MCP Server Connection Failed

```bash
# Test server manually
node /path/to/agents-mcp-server/dist/index.js

# Check Qwen Code logs
qwen-code debug --mcp

# Clear MCP cache
qwen-code mcp clear-cache
```

### Chinese Character Encoding

```bash
# Ensure UTF-8 encoding
export LANG=en_US.UTF-8
export LC_ALL=en_US.UTF-8
```

---

## Performance Optimization

### 1. Use Local Model (optional)

```bash
# Download Qwen3-Coder locally
qwen-code download-model qwen3-coder-7b

# Use local model
qwen-code --local mcp call jagents_analyst ...
```

### 2. Enable MCP Caching

```json
{
  "mcp": {
    "cacheEnabled": true,
    "cacheTTL": 3600
  }
}
```

### 3. Parallel Tool Execution

```bash
# Qwen can call multiple JAGENTS tools in parallel
qwen-code solve "Validate security and portability of auth system"

# Calls simultaneously:
# - jagents_rule_zero_trust_architecture
# - jagents_rule_platform_portability
```

---

## Best Practices

### 1. Leverage Qwen's Context

```bash
# Good: Let Qwen analyze codebase
qwen-code analyze --mcp
> @jagents-architect Design microservices architecture for this monolith

# Qwen provides full context to architect agent
```

### 2. Bilingual Development

```bash
# Write requirements in Chinese, get code in English
> 需求：创建用户认证系统with MFA support
> @jagents-product-manager 创建PRD

# PRD will be bilingual with English code samples
```

### 3. Security-First Development

```bash
# Always validate with rules
qwen-code workflow:
1. Design feature
2. @jagents-rule-zero-trust-architecture validate
3. @jagents-security-architect generate BDD tests
4. Implement
```

---

## Example Workflows

See:
- [`examples/bilingual-development.md`](./examples/bilingual-development.md)
- [`examples/microservices-architecture.md`](./examples/microservices-architecture.md)

---

## Additional Resources

- [Qwen Code Documentation](https://github.com/QwenLM/Qwen-Code)
- [Qwen-Agent MCP Guide](https://qwen-agent.readthedocs.io)
- [JAGENTS Deployment Guide](../../DEPLOYMENT_GUIDE.md)

---

**Version:** 1.0.0  
**Last Updated:** 2024-12-25  
**Status:** Production Ready  
**Language Support:** English (EN) / 中文 (ZH)
