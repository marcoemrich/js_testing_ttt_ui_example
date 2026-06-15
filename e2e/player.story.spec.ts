import { test, expect } from "@playwright/test";

// Läuft gegen die Storybook-iframe (baseURL: http://localhost:6006).
test.describe("Tic Tac Toe Player", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/iframe.html?id=tic-tac-toe-player--default&viewMode=story");
  });

  test("renders the label", async ({ page }) => {
    await expect(page.getByText("X", { exact: true })).toBeVisible();
  });

  test("shows the name in upper case", async ({ page }) => {
    await expect(page.getByTestId("player")).toHaveValue("BOB");
  });

  test("updates the name in upper case while typing", async ({ page }) => {
    const input = page.getByTestId("player");
    await input.fill("alice");
    await expect(input).toHaveValue("ALICE");
  });
});
