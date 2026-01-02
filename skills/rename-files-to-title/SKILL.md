# SKILL: Rename Files to Title

**Purpose:** Rename Markdown files based on their H1 title, with shortening and slugification.
**Domain:** Content Organization, File Management
**Type:** Utility Module

---

## Overview

The Rename Files to Title skill automates the organization of Markdown documentation by extracting the main title (H1) from each file and renaming the file to a URL-friendly slug derived from that title. It enforces a maximum length for the filenames to ensure compatibility and readability.

---

## Core Capabilities

1. **Title Extraction**
   - Read the first line of a Markdown file.
   - Extract text from `# Title` syntax.

2. **Slugification**
   - Convert title to alphanumeric dash-separated string.
   - Remove special characters.

3. **Truncation**
   - Enforce a maximum filename length (default 30 chars).
   - Ensure file extensions are preserved.

4. **Batch Processing**
   - Scan a directory for all `.md` files.
   - Rename them in place.
   - Generate a renaming log.

---

## Commands & Tools

### Primary Commands

- `rename-files-to-title` - Execute the renaming process.
  - `--directory` (or `-d`): Target directory to scan.
  - `--maxLength` (or `-l`): Maximum length of filename (default 30).

---

## Execution Pattern

1. **Scan**: List all `.md` files in the target directory.
2. **Process**: Loop through each file:
   - Read title.
   - Generate slug.
   - Truncate slug.
   - Check for collisions (append `-1` if needed).
3. **Execute**: Rename the file.
4. **Report**: Output a log mapping original filenames to new ones.
