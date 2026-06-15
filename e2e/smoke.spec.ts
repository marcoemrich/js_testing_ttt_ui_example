import { test, expect } from "@playwright/test";

test.describe("Tic Tac Toe", () => {
  test("should change the board", async ({ page }) => {
    await page.goto("/");

    await page.getByTestId("cell_1|1").click();
    await page.getByTestId("cell_2|0").click();
    await page.getByTestId("cell_2|1").click();
    await page.getByTestId("cell_2|2").click();
    await page.getByTestId("cell_0|1").click();

    await expect(page.getByTestId("win-message")).toContainText("Bob wins the game with X");
  });
});
