# JAGENTS Skills MCP Server

MCP server that exposes all JAGENTS skills as callable tools for agents and workflows.

## Overview

This server provides 9 reusable skills that can be invoked by any AI assistant, agent, or workflow through the Model Context Protocol.

## Installation

```bash
cd jagents-mcp-servers/skills-mcp-server
npm install
npm run build
```

## Usage

### Running the Server

```bash
npm start
```

The server runs on stdio and communicates via MCP protocol.

### Available Skills

#### 1. Brainstorming

**Tool:** `jagents_skill_brainstorming`

Creative ideation with three methods:

- Free-form: Unstructured idea generation
- Structured: Categorized brainstorming
- Brainwriting: 6-3-5 collaborative method

**Example:**

```json
{
  "name": "jagents_skill_brainstorming",
  "arguments": {
    "topic": "AI-powered code review tool",
    "method": "structured"
  }
}
```

---

#### 2. Design Thinking

**Tool:** `jagents_skill_design_thinking`

User-centered design process with 5 phases:

- Empathize: Understand users
- Define: Articulate the problem
- Ideate: Generate solutions
- Prototype: Build quick versions
- Test: Gather feedback

---

#### 3. Research

**Tool:** `jagents_skill_research`

Deep information gathering with three depth levels:

- Quick: High-level overview
- Standard: Comprehensive analysis
- Extensive: Deep dive with comparisons

---

#### 4. Story Development

**Tool:** `jagents_skill_story_development`

Creates well-formed user stories with:

- As-a / I-want / So-that format
- Given-When-Then acceptance criteria
- Story metadata and Definition of Done

---

#### 5. GRC Management

**Tool:** `jagents_skill_grc_management`

Governance, Risk, and Compliance management:

- Gap analysis
- Risk assessment
- Compliance audit

Supports: NIST CSF, ISO 27001, SOC2, PCI-DSS, HIPAA

---

#### 6. DevSecOps

**Tool:** `jagents_skill_devsecops`

Security integration for CI/CD pipelines:

- SASTCheck (Static code analysis)
- DAST (Dynamic testing)
- SCA (Dependency scanning)
- Container security
- Infrastructure as Code (IaC) validation

---

#### 7. Content Creation

**Tool:** `jagents_skill_content_creation`

Generates professional content:

- Documentation
- README files
- Tutorials
- Blog posts
- Presentations

---

#### 8. Image Creation

**Tool:** `jagents_skill_image_creation`

Visual asset specifications:

- Mermaid diagrams
- Wireframes
- Icon descriptions
- Illustration prompts

---

#### 9. Life Management

**Tool:** `jagents_skill_life_management`

Personal productivity tools:

- SMART goal setting
- Time management (Eisenhower Matrix)
- Habit tracking (30-day challenge)
- Decision frameworks (Pros/Cons, 10-10-10)

---

#### 10. Core Tasks

**Tool:** `jagents_skill_core_tasks`
**Purpose:** Index docs, Adversarial review, Shard documents

#### 11. CIS Innovation Strategy

**Tool:** `jagents_skill_cis_innovation_strategy`
**Purpose:** Apply Blue Ocean Strategy & Strategy Canvas

#### 12. CIS Problem Solving

**Tool:** `jagents_skill_cis_problem_solving`
**Purpose:** Apply 5 Whys, Fishbone, Solution Matrix

---

## Configuration

### Gemini CLI

Add to MCP servers:

```bash
gemini mcp add jagents-skills node /opt/homebrew/bin/jagents-skills
```

Or in `settings.json`:

```json
{
  "mcpServers": {
    "jagents-skills": {
      "command": "node",
      "args": ["/opt/homebrew/bin/jagents-skills"]
    }
  }
}
```

---

## Architecture

Skills are:

- ✅ **Stateless** - No persistent state
- ✅ **Composable** - Can be combined
- ✅ **Reusable** - Called by any agent
- ✅ **Independent** - No dependencies on other services

---

## Development

### Project Structure

```
skills-mcp-server/
├── src/
│   ├── index.ts                    # Main server
│   └── skills/
│       ├── brainstorming.ts
│       ├── design-thinking.ts
│       ├── research.ts
│       ├── story-development.ts
│       ├── grc-management.ts
│       ├── devsecops.ts
│       ├── content-creation.ts
│       ├── image-creation.ts
│       └── life-management.ts
├── dist/                           # Compiled output
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
