/**
 * JAGENTS Skill: Life Management
 * Purpose: Personal productivity and life organization
 * Used by: Individual users for personal tasks
 * Note: Optional skill for personal use
 */

export interface LifeManagementInput {
    taskType: 'goal-setting' | 'time-management' | 'habit-tracking' | 'decision-making';
    context: string;
}

export const lifeManagementSkill = {
    toolDefinition: {
        name: 'jagents_skill_life_management',
        description: 'Personal productivity and life management skill. Helps with goal setting, time management, habit tracking, and decision making.',
        inputSchema: {
            type: 'object',
            properties: {
                taskType: {
                    type: 'string',
                    enum: ['goal-setting', 'time-management', 'habit-tracking', 'decision-making'],
                    description: 'Type of life management task',
                },
                context: {
                    type: 'string',
                    description: 'Context or specific goal/situation',
                },
            },
            required: ['taskType', 'context'],
        },
    },

    async execute(input: LifeManagementInput): Promise<string> {
        let output = `# Life Management Plan\n\n`;
        output += `**Focus Area:** ${input.taskType}\n`;
        output += `**Context:** ${input.context}\n\n`;

        switch (input.taskType) {
            case 'goal-setting':
                output += generateGoals(input.context);
                break;
            case 'time-management':
                output += generateTimeManagement();
                break;
            case 'habit-tracking':
                output += generateHabitTracker(input.context);
                break;
            case 'decision-making':
                output += generateDecisionFramework(input.context);
                break;
        }

        return output;
    },
};

function generateGoals(context: string): string {
    return `## SMART Goals Framework

### Specific
What exactly do you want to accomplish?
- [Clearly defined goal based on: ${context}]

### Measurable
How will you track progress?
- Metric 1: [Quantifiable measure]
- Metric 2: [Progress indicator]

### Achievable
Is this realistic?
- Resources needed: [List]
- Skills required: [List]

### Relevant
Why is this important?
- Alignment with values: [Connection]
- Long-term impact: [Benefit]

### Time-bound  
When will you achieve this?
- Start date: [Date]
- Milestones: [Timeline]
- Target completion: [Date]

## Action Plan
1. Week 1: [First steps]
2. Week 2-4: [Core actions]
3. Month 2-3: [Development]
4. Review & adjust: [Checkpoint]
`;
}

function generateTimeManagement(): string {
    return `## Time Management System

### Eisenhower Matrix
| Urgent & Important | Not Urgent & Important |
|--------------------|------------------------|
| Do First           | Schedule               |
| Crises, Deadlines  | Planning, Learning     |

| Urgent & Not Important | Not Urgent & Not Important |
|------------------------|----------------------------|
| Delegate               | Eliminate                  |
| Interruptions          | Time wasters               |

### Daily Schedule Template
**Morning (6-12):**
- 🌅 6:00 - Morning routine
- 🎯 7:00 - Deep work block 1
- ☕ 9:00 - Break
- 💼 9:15 - Meetings/collaboration

**Afternoon (12-18):**
- 🍽️ 12:00 - Lunch
- 🎯 13:00 - Deep work block 2
- 📧 15:00 - Email/admin
- 🤝 16:00 - Team sync

**Evening (18-22):**
- 🏃 18:00 - Exercise
- 🍽️ 19:00 - Dinner
- 📚 20:00 - Learning/reading
- 😴 21:30 - Wind down

### Weekly Review
- [ ] Review accomplishments
- [ ] Plan next week
- [ ] Adjust priorities
`;
}

function generateHabitTracker(habit: string): string {
    return `## Habit: ${habit}

### 30-Day Challenge
Track daily completion:

Week 1: ⬜⬜⬜⬜⬜⬜⬜
Week 2: ⬜⬜⬜⬜⬜⬜⬜
Week 3: ⬜⬜⬜⬜⬜⬜⬜
Week 4: ⬜⬜⬜⬜⬜⬜⬜

### Habit Stacking
**Trigger:** [Existing habit]
**New Habit:** ${habit}
**Reward:** [Positive reinforcement]

**Example:** After [trigger], I will [habit], then [reward]

### Obstacles & Solutions
| Obstacle | Solution |
|----------|----------|
| Lack of time | Wake up 30min earlier |
| Forget | Set phone reminder |
| Low motivation | Find accountability partner |

### Progress Metrics
- Streak: 0 days
- Success rate: 0%
- Target: 21 days (habit formation)
`;
}

function generateDecisionFramework(decision: string): string {
    return `## Decision: ${decision}

### Pros & Cons Analysis
| Pros | Cons |
|------|------|
| + Benefit 1 | - Risk 1 |
| + Benefit 2 | - Risk 2 |
| + Benefit 3 | - Cost/effort |

### Decision Matrix
| Option | Cost | Time | Impact | Risk | Total |
|--------|------|------|--------|------|-------|
| Option A | 3 | 2 | 5 | 2 | 12 |
| Option B | 4 | 4 | 4 | 1 | 13 |
| Option C | 2 | 3 | 3 | 3 | 11 |

*Scale: 1 (low) to 5 (high), lower risk is better*

### 10-10-10 Rule
- **10 minutes:** How will I feel?
- **10 months:** How will it affect me?
- **10 years:** What will be the long-term impact?

### Recommendation
Based on analysis: [Suggested option with reasoning]
`;
}
