import { z } from "zod";

/**
 * JAGENTS Agent: CIS Brainstorming Coach (Carson)
 * Role: Energetic Facilitator
 * Domain: Ideation and Creative Thinking
 */

export interface BrainstormingInput {
  topic: string;
  technique?: "free-form" | "six-thinking-hats" | "scamper" | "random-word";
  context?: string;
}

export const brainstormingCoach = {
  toolDefinition: {
    name: "jagents_cis_brainstorming_coach",
    description:
      "Carson: Energetic brainstorming facilitator using structured techniques like Six Thinking Hats and SCAMPER.",
    inputSchema: {
      type: "object",
      properties: {
        topic: {
          type: "string",
          description: "Topic, problem, or idea to brainstorm about",
        },
        technique: {
          type: "string",
          enum: ["free-form", "six-thinking-hats", "scamper", "random-word"],
          description: "Brainstorming technique to use. Default: free-form",
        },
        context: {
          type: "string",
          description: "Additional context or constraints",
        },
      },
      required: ["topic"],
    },
  },

  async execute(input: BrainstormingInput): Promise<string> {
    const technique = input.technique || "free-form";

    let prompt = `# Brainstorming Session with Carson ⚡️\n\n`;
    prompt += `**Topic:** ${input.topic}\n`;
    prompt += `**Technique:** ${technique}\n`;

    if (input.context) {
      prompt += `**Context:** ${input.context}\n\n`;
    } else {
      prompt += `\n`;
    }

    prompt += `## Facilitation Guide\n`;

    switch (technique) {
      case "six-thinking-hats":
        prompt += `Let's look at this from six distinct perspectives:\n\n`;
        prompt += `1. **⚪️ White Hat (Data):** What facts do we know? What information is missing?\n`;
        prompt += `2. **🔴 Red Hat (Feelings):** What is your gut reaction? Emotions?\n`;
        prompt += `3. **⚫️ Black Hat (Risks):** What could go wrong? Weaknesses?\n`;
        prompt += `4. **🟡 Yellow Hat (Benefits):** What is the value? The upside?\n`;
        prompt += `5. **🟢 Green Hat (Creativity):** New ideas, alternatives, "what if"?\n`;
        prompt += `6. **🔵 Blue Hat (Process):** What is our next step? Summary.\n`;
        break;
      case "scamper":
        prompt += `Let's remix this idea using SCAMPER:\n\n`;
        prompt += `- **S**ubstitute: What can we replace?\n`;
        prompt += `- **C**ombine: What can we merge with this?\n`;
        prompt += `- **A**dapt: What else is like this?\n`;
        prompt += `- **M**odify: Change meaning, color, motion?\n`;
        prompt += `- **P**ut to another use: Who else could use this?\n`;
        prompt += `- **E**liminate: What can we remove?\n`;
        prompt += `- **R**everse: What if we did the opposite?\n`;
        break;
      case "random-word":
        prompt += `Let's trigger new connections using a random stimuli.\n`;
        prompt += `*Imagine the concept of "Ocean" applied to your topic...*\n\n`;
        prompt += `- How does "Depth" relate to ${input.topic}?\n`;
        prompt += `- How does "Flow" relate?\n`;
        prompt += `- How does "Waves" relate?\n`;
        break;
      case "free-form":
      default:
        prompt += `Let's generate a high volume of ideas! No judgement yet.\n\n`;
        prompt += `- Go for quantity over quality right now.\n`;
        prompt += `- Build on other ideas ("Yes, and...").\n`;
        prompt += `- Encourage wild ideas.\n`;
        break;
    }

    prompt += `\n## Output Template\n`;
    prompt += `Structure the output using the template at: \`templates/cis/brainstorm_log.md\`\n`;

    return prompt;
  },
};
