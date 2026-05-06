# Step Definitions Guide

## Technology

Step definitions use Playwright to automate a headless Chromium browser and interact with the frontend UI.

## Patterns

- **Browser setup/teardown:** `Before` hook launches `chromium`, `After` hook closes it
- **Element selectors:** Use `aria-label` attributes — the frontend applies these to all interactive elements
- **Waiting:** Use `page.waitForLoadState("networkidle")` after actions that trigger API calls
- **Test data setup:** Use direct `fetch` calls to `http://localhost:8000` API for creating/clearing test data (faster than going through the UI)
- **Assertions:** Use `assert` from `node:assert`

## Selector Examples

```js
// Input field
page.fill('input[aria-label="New todo title"]', title);

// Checkbox
page.click(`input[aria-label='Mark "${title}" as complete']`);

// Delete button
page.click(`button[aria-label='Delete "${title}"']`);

// Todo text
page.locator(".todo-list .title", { hasText: title });

// Completed todo
page.locator(".todo-list li.completed", { hasText: title });

// Empty state
page.locator(".empty", { hasText: message });
```

## Important

- Always validate that new step definitions don't conflict with existing ones
- One step definition file per feature file (e.g., `todo.steps.js` for `todo.feature`)
- Frontend: `http://localhost:5173` | Backend API: `http://localhost:8000`
