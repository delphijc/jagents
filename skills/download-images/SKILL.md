# SKILL: Download Images

**Purpose:** Download images from URLs or extract and download images from Markdown/HTML files.
**Domain:** Content Management, Asset Archiving
**Type:** Reusable Module (Command/Fabric Pattern)

---

## Overview

The Download Images skill provides capabilities to fetch images from remote sources and save them locally. It supports processing entire Markdown or HTML pages to make them self-contained by downloading referenced images and updating link paths.

---

## Core Capabilities

1. **Full Page Copying**
   - Parse Markdown or HTML files
   - Identify image references
   - Download all images
   - Rewrite file content with local references

2. **Image Only Download**
   - Download specific images from a list of URLs
   - Save to a specified directory

---

## Commands & Tools

### Primary Commands

- `download-images` - Main command to execute image downloading tasks.
  - `--fpc` (Full Page Copying): Download page content and all images.
  - `--io` (Image Only): Download images only.
  - `--tuof` (Target URL or File): The source file or URL to process.

---

## Execution Pattern

1. **Input Analysis**
   - Determine mode (Full Page vs Image Only)
   - Validate target (File path or URL)

2. **Processing**
   - **Full Page:**
     - Read file content.
     - Extract all image URLs.
     - Download images to `images/` subdirectory.
     - Generate hashed filenames for uniqueness.
     - Replace original URLs with relative local paths.
     - Save updated content.
   - **Image Only:**
     - Download images from provided URLs.
     - Save to target directory.

3. **Output**
   - Summary of downloaded images.
   - Path to updated file (if Full Page mode).

---

## Tool Chaining Example

1. Use `read_url_content` (or similar) to fetch a page.
2. Use `download-images --fpc` to make it local.

---

## Integration Points

- **Input:** Target file path or URL, mode flags.
- **Output:** JSON summary of actions, modified file content.
