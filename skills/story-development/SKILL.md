# SKILL: Story Development

**Purpose:** User story and developer story creation with context injection  
**Domain:** Agile development, requirement breakdown, task management  
**Type:** Agile method Module

---

## Overview

The Story Development skill converts high-level requirements into executable developer stories with embedded context. It ensures just-in-time context delivery for implementation teams.

---

## Core Capabilities

1. **Story Drafting**
   - User story to developer story conversion
   - Acceptance criteria definition
   - Subtask breakdown

2. **Context Injection**
   - Sharded document embedding
   - Relevant architecture inclusion
   - Just-in-time context delivery

3. **Story Sequencing**
   - Dependency management
   - Logical ordering
   - Construction flow validation

4. **Corrective Planning**
   - Mid-project pivots
   - Scope adjustments
   - Epic regeneration

---

## Workflow Integration

### Primary Workflows

- `workflows/draft-story.md` - Convert user story to developer story
- `workflows/inject-context.md` - Embed relevant context
- `workflows/correct-course.md` - Mid-project replanning

### Commands

- `*draft 1.1` - Draft specific story by number
- `*correct course` - Analyze progress and adjust plan
- `*verify sequence` - Validate story dependencies

---

## Context Management

### Sharded Document Access

The skill automatically accesses:
- `prd_shards/*.md` - Requirements context
- `architecture_shards/*.md` - Technical context
- `tech_stack.md` - Technology specifications
- `coding_standards.md` - Development standards

### Just-in-Time Delivery

- Only relevant context embedded per story
- Massive token savings (90%+)
- Clear, focused developer guidance

---

## Story Structure

Each Developer Story contains:

1. **Story Overview**
   - Parent user story reference
   - Business value
   - Success criteria

2. **Technical Context**
   - Relevant architecture sections
   - Technology stack requirements
   - Coding standards

3. **Acceptance Criteria**
   - Testable requirements
   - Definition of done
   - Quality gates

4. **Subtasks**
   - Implementation steps
   - Testing requirements
   - Documentation needs

---

## Dependency Management

- No story depends on a later story
- Logical construction sequence
- Foundation-first approach
- Incremental delivery support

---

## Integration Points

- **Input:** User stories from PM, Architecture from Architect
- **Output:** Self-contained Developer Stories
- **Used By:** Scrum Master agent
- **Consumed By:** Developer agent
- **Context Sources:** Sharded PRD and Architecture documents
