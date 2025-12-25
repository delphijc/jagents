# RULE: Mandatory Context Loading

**Domain:** AI Architecture, Context Management, Reliability  
**Type:** Architectural Requirement  
**Priority:** Critical  
**Source:** Personal AI Infrastructure (PAI) Architecture (jagent99.md)

---

## Rule Statement

THE Personal AI Infrastructure SHALL enforce a four-layer mandatory context loading protocol to ensure AI agents read foundational knowledge before executing tasks, preventing the AI from claiming knowledge it hasn't loaded.

---

## Background

The Mandatory Context Loading Protocol (MCLP) is fundamental to PAI reliability. The system and orchestration are more important than the model's raw intelligence. Consistency is achieved by guiding the LLM with minimal, high-signal context required for each specific task.

Failure to load context before acting is explicitly defined as **"lying to the user"**.

---

## Four-Layer Enforcement System

### Layer 1: Context System Documentation

**Component:** Master context file (e.g., `CLAUDE.md`)  
**Purpose:** Define entire context structure and system rules  
**Mechanism:** First context agent loads

**Requirements:**
- Placed in root context directory
- Contains complete system architecture
- Defines all mandatory reading
- Specifies enforcement rules

### Layer 2: UserPromptSubmit Hook

**Component:** Custom code hook (e.g., `user-prompt-submit-context-loader.ts`)  
**Purpose:** System-level enforcement via prompt interception  
**Mechanism:** Intercepts every user message before LLM processing

**Operation:**
1. Hook intercepts user message
2. Injects mandatory instructions into prompt stream
3. Forces AI to load critical context files
4. Requires observable tool usage
5. AI processes request only after context loading

**Location:** `~/.claude/hooks/` or equivalent

### Layer 3: Aggressive Instructions

**Component:** Explicit language in context files  
**Purpose:** Psychological enforcement and clarity  
**Mechanism:** Aggressive, unambiguous language with tool requirements

**Example Instructions:**
```markdown
🚨 MANDATORY FIRST ACTION

Before processing ANY user request, you MUST:

1. Read the following files using the Read tool:
   - ~/.claude/context/CLAUDE.md
   - ~/.claude/context/tools/CLAUDE.md
   - ~/.claude/context/projects/<current-project>/CONTEXT.md

2. Confirm loading with: ✅ Context system loaded

DO NOT LIE ABOUT LOADING THESE FILES.
You must use observable tool usage (Read tool) to verify.
```

**Characteristics:**
- ALL CAPS for critical requirements
- Emoji for visual emphasis (🚨, ✅)
- Explicit prohibition of lying
- Observable tool requirement
- Confirmation syntax

### Layer 4: Redundant Symlinks

**Component:** Symbolic links in file hierarchy  
**Purpose:** Redundancy and discoverability  
**Mechanism:** Critical instructions accessible from multiple paths

**Example:**
```
~/.claude/context/CLAUDE.md
~/.claude/CLAUDE.md -> context/CLAUDE.md
~/.claude/README.md -> context/CLAUDE.md
```

---

## Acceptance Criteria

### AC1: Observable Tool Usage Required
WHEN an agent must load context, THE system SHALL require observable tool usage (Read tool) to verify the files were actually loaded.

**Validation:**
- Tool calls appear in execution log
- Specific files listed
- Confirmation message sent

### AC2: Hook Interception
THE system SHALL intercept every user prompt and inject mandatory context loading instructions.

**Validation:**
- Hook executes on every message
- Injection appears in prompt stream
- No bypass mechanism exists

### AC3: Aggressive Language
THE context files SHALL use aggressive, unambiguous language to emphasize critical requirements.

**Validation:**
- ALL CAPS for mandatory actions
- Explicit "DO NOT LIE" statements
- Clear consequences specified

### AC4: Redundant Access
THE critical context files SHALL be accessible from multiple paths via symlinks.

**Validation:**
- At least 2 paths to critical files
- Symlinks properly configured
- All paths functional

---

## Implementation Guidelines

### Unified File-Based Context (UFC) Structure

```
~/.claude/
  /context/
    CLAUDE.md              # Master context (Layer 1)
    /tools/
      CLAUDE.md            # Tool documentation
    /projects/
      /project-a/
        CONTEXT.md         # Project-specific context
    /skills/
      /research/
        CONTEXT.md
  /hooks/
    user-prompt-submit-context-loader.ts  # Layer 2
  CLAUDE.md -> context/CLAUDE.md         # Layer 4 symlink
```

### Hook Implementation (TypeScript Example)

```typescript
// user-prompt-submit-context-loader.ts
export function onUserPromptSubmit(prompt: string): string {
  const mandatoryContext = `
🚨 MANDATORY FIRST ACTION

Before processing the user's request, you MUST:

1. Use the Read tool to load these files:
   - ~/.claude/context/CLAUDE.md
   - ~/.claude/context/tools/CLAUDE.md
   
2. Confirm with: ✅ Context system loaded

DO NOT PROCEED WITHOUT LOADING THESE FILES.
This is a system requirement, not optional.

--- USER'S ACTUAL REQUEST ---
${prompt}
`;
  
  return mandatoryContext;
}
```

---

## Targeted Context Hydration

The MCLP enables **Targeted Context Hydration**: loading the "exact right amount of context at the exact right time."

**Benefits:**
- Crystal clarity and laser focus
- Prevents context pollution
- Minimizes token usage
- Maximizes relevance

**Process:**
1. Identify task domain
2. Load only relevant context
3. Progressive disclosure as needed
4. Just-in-time context delivery

---

## Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|-----------|
| Hook failure | Critical | Layer 3 backup (aggressive instructions) |
| AI ignoring instructions | High | Observable tool requirement, monitoring |
| Context file corruption | High | Version control, validation |
| Performance overhead | Low | Efficient context caching |

---

## Testing Requirements

1. **Hook Verification**
   - Confirm hook executes every prompt
   - Verify injection works
   - Test with various inputs

2. **Tool Usage Validation**
   - Confirm Read tool calls
   - Verify correct files loaded
   - Check confirmation messages

3. **Enforcement Testing**
   - Attempt to bypass (should fail)
   - Test with aggressive prompts
   - Verify compliance

---

## Related Rules

- [Modular Architecture](#) - Context organization
- [Platform Portability](#) - Hook implementation varies by platform

---

## Compliance

- AI reliability standards
- Context management best practices
- Observable behavior requirements
