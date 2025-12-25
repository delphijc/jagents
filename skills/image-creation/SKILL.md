# SKILL: Image Creation

**Purpose:** AI-powered image generation and visual asset creation  
**Domain:** Visual content, header images, design assets  
**Type:** Reusable Module (Command/Fabric Pattern)

---

## Overview

The Image Creation skill provides AI-powered image generation capabilities through reusable commands and Fabric patterns. It enables automatic creation of contextually relevant visual assets.

---

## Core Capabilities

1. **Custom Image Generation**
   - Context-aware image creation
   - Brand-aligned visuals
   - Multiple style options

2. **Header Image Creation**
   - Blog post headers
   - Article banners
   - Social media graphics

3. **Caption Generation**
   - Alt text creation
   - Image descriptions
   - SEO-optimized captions

4. **Tool Chaining**
   - Automatic selection of image generation tools
   - Integration with content workflows
   - Multi-format export

---

## Commands & Tools

### Primary Commands

- `create-custom-image` - Generate custom images based on context
- `create-header` - Create blog/article header images
- `generate-caption` - Generate image captions and alt text

### External Services

- Image generation APIs
- Style transfer services
- Format conversion tools

---

## Execution Pattern

1. **Context Analysis**
   - Read content context (e.g., blog post)
   - Extract visual requirements
   - Determine style parameters

2. **Image Generation**
   - Apply appropriate generation model
   - Enforce brand guidelines
   - Generate variations if needed

3. **Caption Creation**
   - Generate descriptive caption
   - Create alt text for accessibility
   - Optimize for SEO

4. **Integration**
   - Add to content
   - Apply formatting
   - Verify placement

---

## Tool Chaining Example

The `create-custom-image` command demonstrates tool chaining power:
1. Read blog post content
2. Extract theme and tone
3. Generate contextually perfect header image
4. Create caption and alt text
5. Return embedded image reference

---

## Fabric Framework Integration

Utilizes Fabric's open-source framework for:
- Image generation patterns
- Style templates
- Format specifications

---

## Integration Points

- **Input:** Content context, style requirements, dimensions
- **Output:** Generated images, captions, embedded references
- **Context:** Brand guidelines, style preferences, content theme
- **MCPs:** Image generation services, style transfer APIs
- **Chaining:** Works with Content Creation skill for complete content packages
