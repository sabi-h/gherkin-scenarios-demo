import { When, Then } from "@cucumber/cucumber";
import assert from "node:assert";

/**
 * Unicode emoji regex covering common emoji ranges:
 * - Emoji presentation characters
 * - Extended pictographic symbols
 */
const EMOJI_REGEX = /[\p{Emoji_Presentation}\p{Extended_Pictographic}]/u;

When("I reload the page", async function () {
  await this.page.reload();
  await this.page.waitForLoadState("networkidle");
});

Then("I should see an emoji next to {string}", async function (title) {
  const todoItem = this.page.locator(".todo-list li", { hasText: title });
  await todoItem.waitFor({ state: "visible", timeout: 5000 });

  const emojiEl = todoItem.locator(".emoji");
  await emojiEl.waitFor({ state: "visible", timeout: 5000 });

  const emojiText = await emojiEl.textContent();
  assert.match(
    emojiText.trim(),
    EMOJI_REGEX,
    `Expected an emoji next to "${title}" but found: "${emojiText}"`
  );
});
