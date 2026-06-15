import { test, expect } from "@playwright/test";

// Läuft gegen die Storybook-iframe (baseURL: http://localhost:6006).
test.describe("Tic Tac Toe Cell", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/iframe.html?id=tic-tac-toe-cell--clickable&viewMode=story");
  });

  test("be clickable", async ({ page }) => {
    const cell = page.getByTestId("cell_1|2");
    await expect(cell).not.toContainText("X");
    await cell.click();
    await expect(cell).toContainText("X");
  });
});
