import { test, expect } from "@playwright/test";

// Runs against the Storybook iframe (baseURL: http://localhost:6006).
test.describe("Tic Tac Toe MessageBox", () => {
  test("renders one list item per message", async ({ page }) => {
    await page.goto("/iframe.html?id=tic-tac-toe-messagebox--with-messages&viewMode=story");
    await expect(page.getByRole("listitem")).toHaveCount(3);
  });

  test("renders the message texts", async ({ page }) => {
    await page.goto("/iframe.html?id=tic-tac-toe-messagebox--with-messages&viewMode=story");
    await expect(page.getByText("Player X wins!")).toBeVisible();
  });

  test("renders no list items when empty", async ({ page }) => {
    await page.goto("/iframe.html?id=tic-tac-toe-messagebox--empty&viewMode=story");
    await expect(page.getByRole("listitem")).toHaveCount(0);
  });
});
