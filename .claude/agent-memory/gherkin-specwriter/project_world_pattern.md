---
name: Cucumber World pattern for sharing page state
description: Step definitions use this.page and this.browser (Cucumber World) to share Playwright state across step definition files. Before/After hooks live in todo.steps.js.
type: project
---

Step definitions share Playwright browser/page state via the Cucumber World object (`this.page`, `this.browser`). The Before/After hooks that manage browser lifecycle live in `todo.steps.js`. All step definition files must use `this.page` (not module-scoped variables) so that state is accessible across files.

**Why:** The project follows "one step definition file per feature file" convention. Multiple feature files reuse shared Given/When/Then steps (e.g., "I open the Todo app"), so the Playwright page instance must be shared across step definition files via Cucumber's World.

**How to apply:** When adding new step definition files, always use `this.page` for Playwright interactions. Do not declare module-scoped `page` or `browser` variables. The Before/After hooks are already defined in `todo.steps.js` and should not be duplicated.
