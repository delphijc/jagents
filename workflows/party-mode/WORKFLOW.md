# WORKFLOW: Party Mode

**Type:** Core Workflow
**Agents involved:** All available agents (dynamically selected)

---

## Purpose

Orchestrates multi-agent collaboration where 19+ agents can communicate in real-time to solve complex, cross-functional problems.

## Structure

1. **Initialization:** User invokes `*party-mode`.
2. **Role Selection:** The system or user selects the participating agents based on the context.
3. **Turn-Taking:** Agents contribute sequentially or conversationally based on the flow.
4. **Synthesis:** A lead agent (often Analyst or PM) synthesizes the discussion into actionable outputs.

## Trigger

- Command: `*party-mode`

## Dependencies

- Requires multiple active agents.
- Relies on Shared Context.
