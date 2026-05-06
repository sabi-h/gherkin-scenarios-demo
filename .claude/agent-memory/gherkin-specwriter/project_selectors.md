---
name: Frontend selector conventions
description: CSS selectors and aria-label patterns used in Playwright step definitions for the todo app frontend.
type: project
---

The frontend uses the following selector patterns for Playwright automation:

- **Todo input:** `input[aria-label="New todo title"]`
- **Checkbox:** `input[aria-label='Mark "${title}" as complete']`
- **Delete button:** `button[aria-label='Delete "${title}"']`
- **Todo text:** `.todo-list .title` with `hasText` filter
- **Completed todo:** `.todo-list li.completed` with `hasText` filter
- **Empty state:** `.empty` with `hasText` filter
- **Emoji element:** `.emoji` within `.todo-list li` (added for emoji feature)
- **Generic button:** `button:text("${buttonText}")`

**Why:** The frontend applies aria-label attributes to interactive elements for accessibility. Step definitions prefer these over CSS classes.

**How to apply:** When writing new step definitions, check for existing aria-label attributes before falling back to CSS class selectors. Use `hasText` for filtering list items by content.
