import { Given, When, Then, Before, After } from "@cucumber/cucumber";
import { chromium } from "@playwright/test";
import assert from "node:assert";

const APP_URL = "http://localhost:5173";
const API_URL = "http://localhost:8000";

Before(async function () {
  this.browser = await chromium.launch({ headless: true });
  const context = await this.browser.newContext();
  this.page = await context.newPage();
});

After(async function () {
  if (this.browser) await this.browser.close();
});

Given("I open the Todo app", async function () {
  await this.page.goto(APP_URL);
  await this.page.waitForLoadState("networkidle");
});

Given("the todo list is empty", async function () {
  const res = await fetch(`${API_URL}/todos`);
  const todos = await res.json();
  for (const todo of todos) {
    await fetch(`${API_URL}/todos/${todo.id}`, { method: "DELETE" });
  }
  await this.page.reload();
  await this.page.waitForLoadState("networkidle");
});

Given("I have a todo {string}", async function (title) {
  await fetch(`${API_URL}/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title }),
  });
  await this.page.reload();
  await this.page.waitForLoadState("networkidle");
});

When("I enter {string} in the todo input", async function (title) {
  await this.page.fill('input[aria-label="New todo title"]', title);
});

When("I click the {string} button", async function (buttonText) {
  await this.page.click(`button:text("${buttonText}")`);
  await this.page.waitForLoadState("networkidle");
});

When("I check the checkbox for {string}", async function (title) {
  await this.page.click(`input[aria-label='Mark "${title}" as complete']`);
  await this.page.waitForLoadState("networkidle");
});

When("I click the delete button for {string}", async function (title) {
  await this.page.click(`button[aria-label='Delete "${title}"']`);
  await this.page.waitForLoadState("networkidle");
});

Then("I should see {string} in the todo list", async function (title) {
  const item = this.page.locator(".todo-list .title", { hasText: title });
  await item.waitFor({ state: "visible", timeout: 5000 });
  assert.ok(await item.isVisible());
});

Then("{string} should be marked as completed", async function (title) {
  const li = this.page.locator(".todo-list li.completed", { hasText: title });
  await li.waitFor({ state: "visible", timeout: 5000 });
  assert.ok(await li.isVisible());
});

Then("I should not see {string} in the todo list", async function (title) {
  const item = this.page.locator(".todo-list .title", { hasText: title });
  await item.waitFor({ state: "hidden", timeout: 5000 });
  assert.strictEqual(await item.count(), 0);
});

Then("I should see the message {string}", async function (message) {
  const el = this.page.locator(`.empty`, { hasText: message });
  await el.waitFor({ state: "visible", timeout: 5000 });
  assert.ok(await el.isVisible());
});
