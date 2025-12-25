# RULE: Platform Portability and Agnosticism

**Domain:** Architecture, Tooling, Vendor Independence  
**Type:** Architectural Requirement  
**Priority:** High  
**Source:** Requirements Document (jagent97.md)

---

## Rule Statement

THE Development Environment SHALL use platform-agnostic file formats and standards for all specifications and configurations, enabling migration between AI-integrated IDEs without rebuilding the environment.

---

## User Story

As a security engineer, I want my specs and code to work across different AI-integrated IDEs, so that I can migrate to better tools without rebuilding my environment.

---

## Acceptance Criteria

### AC1: Standard Markdown Format
THE Development Environment SHALL store all specs in standard Markdown format following a consistent structure.

**Validation:**
- All specs are valid.md files
- Consistent frontmatter/structure
- Parseable by standard tools
- No proprietary extensions required

### AC2: Platform-Agnostic Formats
THE Development Environment SHALL use platform-agnostic file formats (Markdown, YAML, JSON, standard programming languages) for all specifications and configurations.

**Validation:**
- Only open standard formats used
- No binary or proprietary formats
- Human-readable content
- Tool-independent parsing

### AC3: No Platform-Specific Features
THE Development Environment SHALL avoid platform-specific features or extensions in core spec documents.

**Validation:**
- Specs work across Kiro, Cursor, VS Code, Claude
- No IDE-specific syntax
- Standard rendering in all platforms
- Graceful degradation of advanced features

### AC4: Widely-Supported Technologies
WHEN creating implementation code, THE Development Environment SHALL use widely-supported languages and frameworks that function independently of the IDE.

**Validation:**
- Standard language versions (not bleeding edge)
- Framework independence
- CLI-executable without IDE
- Docker/container compatibility

### AC5: Separated Platform Integrations
THE Development Environment SHALL document any platform-specific integrations separately from core specs to enable easy substitution.

**Validation:**
- Platform integrations in separate files
- Clear documentation of dependencies
- Substitution guide provided
- Core functionality IDE-independent

---

## Implementation Guidelines

### File Format Standards

**Specifications:**
- Format: Markdown (.md)
- Metadata: YAML frontmatter
- Diagrams: Mermaid or standard formats

**Configuration:**
- Format: YAML or JSON
- Schema: Documented and validated
- Comments: Supported and used

**Code:**
- Languages: Python, JavaScript, Go, etc.
- Standards: PEP 8, StandardJS, etc.
- No IDE-specific syntax

### Spec Structure Template
```markdown
---
title: [Spec Title]
type: [agent|skill|workflow|rule]
version: 1.0.0
created: YYYY-MM-DD
---

# [Title]

**[Type]:** [Value]
**Domain:** [Value]

## Overview
[Content]

## [Sections...]
```

### Platform Integration Separation

**Core Specs:**
- `/specs/agents/`
- `/specs/skills/`
- `/specs/workflows/`
- `/specs/rules/`

**Platform-Specific:**
- `/integrations/cursor/`
- `/integrations/kiro/`
- `/integrations/vscode/`

---

## Supported Platforms

### AI-Integrated IDEs
- ✅ Cursor
- ✅ Kiro
- ✅ VS Code + extensions (GitHub Copilot, etc.)
- ✅ Claude Code
- ✅ Gemini Code Assist

### Spec Interpretation
All platforms should be able to:
- Parse Markdown specifications
- Load YAML/JSON configurations
- Execute workflows
- Interpret agent roles

---

## Migration Path

### From Platform A to Platform B

1. **Preserve Core Assets**
   - Move spec files (markdown)
   - Move configuration (YAML/JSON)
   - Move code (standard languages)

2. **Update Platform Integrations**
   - Remove Platform A specific integration
   - Add Platform B specific integration
   - Update documentation

3. **Verify Functionality**
   - Test spec parsing
   - Validate workflows
   - Run integration tests

---

## Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|-----------|
| Platform-specific drift | High | Regular audits, linting |
| Missing features in target platform | Medium | Core/optional feature separation |
| Performance differences | Low | Platform benchmarking |
| Lock-in through convenience | Medium | Strict review process |

---

## Testing Requirements

1. **Cross-Platform Validation**
   - Parse specs in multiple IDEs
   - Render markdown consistently
   - Execute workflows across platforms

2. **Format Compliance**
   - Validate markdown structure
   - Check YAML/JSON schemas
   - Lint for proprietary extensions

3. **Migration Testing**
   - Test Cursor → Kiro migration
   - Test VS Code → Claude migration
   - Verify no data loss

---

## Related Rules

- [Cloud Storage Synchronization](#) - Repository accessibility
- [Modular Architecture](#) - Component independence

---

## Compliance

- Open standard adherence
- Vendor independence principles
- Portability best practices
