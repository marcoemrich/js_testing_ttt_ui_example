import { test, expect } from "@playwright/test";

// Runs against the Storybook iframe (baseURL: http://localhost:6006).
test.describe("Tic Tac Toe Board", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/iframe.html?id=tic-tac-toe-board--clickable-board-test&viewMode=story");
  });

  test("be clickable", async ({ page }) => {
    const cell = page.getByTestId("cell_1|1");
    await cell.click();
    await expect(cell).toContainText("X");
  });
});
