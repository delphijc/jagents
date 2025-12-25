# Contributing to JAGENTS

Thank you for your interest in contributing to JAGENTS! This document provides guidelines and instructions for contributing.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Coding Standards](#coding-standards)
- [Submitting Changes](#submitting-changes)
- [Adding Platform Integrations](#adding-platform-integrations)

---

## Code of Conduct

This project follows a professional, inclusive code of conduct. Please:

- Be respectful and constructive
- Welcome newcomers
- Focus on what's best for the community
- Show empathy towards others

---

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce**
- **Expected vs actual behavior**
- **Platform and version information**
- **Code samples** (if applicable)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. Include:

- **Clear use case**
- **Current limitations**
- **Proposed solution**
- **Alternative approaches considered**

### Pull Requests

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test thoroughly
5. Commit with clear messages
6. Push to your fork
7. Open a Pull Request

---

## Development Setup

### Prerequisites

- Node.js v18+
- npm v9+
- Git
- TypeScript knowledge

### Initial Setup

```bash
# Clone repository
git clone https://github.com/your-org/jagents.git
cd jagents

# Build all servers
cd jagents-mcp-servers
./build-all.sh

# Run in dev mode
cd agents-mcp-server
npm run dev
```

### Project Structure

```
jagents/
├── jagents-mcp-servers/
│   ├── agents-mcp-server/
│   │   └── src/
│   │       ├── index.ts
│   │       └── agents/
│   ├── skills-mcp-server/
│   ├── workflows-mcp-server/
│   └── rules-mcp-server/
└── integrations/
```

---

## Coding Standards

### TypeScript

- Use **strict mode**
- Provide **type annotations**
- No `any` types without justification
- Export interfaces for all input types

### Naming Conventions

- **Tools:** `jagents_[category]_[name]` (e.g., `jagents_skill_research`)
- **Files:** kebab-case (e.g., `six-thinking-hats.ts`)
- **Classes/Interfaces:** PascalCase
- **Functions/Variables:** camelCase

### Code Style

```typescript
// Good
export interface ResearchInput {
  topic: string;
  depth?: 'quick' | 'standard' | 'extensive';
}

export const researchSkill = {
  toolDefinition: {
    name: 'jagents_skill_research',
    description: 'Deep research skill...',
    inputSchema: { /* ... */ },
  },
  
  async execute(input: ResearchInput): Promise<string> {
    // Implementation
  },
};
```

### Documentation

- **JSDoc comments** for all public APIs
- **README.md** for each MCP server
- **Integration guides** for new platforms
- **Inline comments** for complex logic

---

## Submitting Changes

### Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat(agents): add data analyst agent
fix(skills): correct brainstorming method selection
docs(integration): add VS Code integration guide
refactor(workflows): simplify six thinking hats logic
test(rules): add zero trust validation tests
```

### Pull Request Process

1. **Update documentation** - README, integration guides, etc.
2. **Add tests** (if applicable)
3. **Build successfully** - `npm run build` passes
4. **Update CHANGELOG** - Add entry under "Unreleased"
5. **Request review** - Tag relevant maintainers

### Review Process

- At least 1 maintainer approval required
- All CI checks must pass
- No merge conflicts
- Documentation updated

---

## Adding New Components

### New Agent

1. Create `src/agents/your-agent.ts`:

```typescript
export interface YourAgentInput {
  // Define inputs
}

export const yourAgent = {
  toolDefinition: {
    name: 'jagents_your_agent',
    description: 'Clear description',
    inputSchema: { /* ... */ },
  },
  
  async execute(input: YourAgentInput): Promise<string> {
    // Implementation
  },
};
```

2. Export from `src/index.ts`
3. Add to README.md
4. Update documentation

### New Skill

Same pattern as agents, in `skills-mcp-server/src/skills/`

### New Workflow

Same pattern, in `workflows-mcp-server/src/workflows/`

### New Rule

Same pattern, in `rules-mcp-server/src/rules/`

---

## Adding Platform Integrations

### 1. Create Directory Structure

```bash
mkdir -p integrations/[platform-name]/examples
```

### 2. Write Integration Guide

Create `integrations/[platform-name]/README.md`:

```markdown
# JAGENTS + [Platform Name] Integration

## Overview
[Brief description]

## Prerequisites
[What's needed]

## Configuration
[Step-by-step setup]

## Verification
[How to test]

## Usage Examples
[Real examples]

## Platform-Specific Features
[Unique capabilities]

## Troubleshooting
[Common issues]
```

### 3. Add Configuration Examples

Create example config files in YAML/JSON

### 4. Test Thoroughly

- Build all servers
- Configure platform
- Test all 30 tools
- Document any issues

### 5. Update Main Docs

- Add to main `README.md` platform table
- Add to `integrations/README.md`
- Update `DEPLOYMENT_GUIDE.md`

---

## Testing

### Manual Testing

```bash
# Build servers
./build-all.sh

# Test server manually
node agents-mcp-server/dist/index.js

# Verify tools list
# (Platform-specific command)
```

### Integration Testing

Test complete workflows:

1. Ideation → Requirements → Architecture
2. Security validation
3. Implementation guidance

---

## Release Process

1. Update version in all `package.json` files
2. Update `CHANGELOG.md`
3. Create git tag: `git tag -a v2.1.0 -m "Version 2.1.0"`
4. Push tag: `git push origin v2.1.0`
5. Create GitHub release
6. Update documentation links

---

## Questions?

- **General questions:** GitHub Discussions
- **Bug reports:** GitHub Issues
- **Security issues:** Email security@jagents.dev (if applicable)

---

## Recognition

Contributors will be recognized in:
- `CONTRIBUTORS.md` file
- GitHub contributors page
- Release notes

Thank you for contributing to JAGENTS!

---

**Last Updated:** December 2024
