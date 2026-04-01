const { test, expect } = require("@playwright/test");

test("homepage loads", async ({ page }) => {
  await page.goto("https://omolola-becca.netlify.app/");
  await expect(page).toHaveTitle(/Omolola Becca Olaoye/);

  await page.locator("#modeIcon").click();
  await expect(page.locator("body")).toHaveClass(/dark/);
  await expect(page.locator("body")).toContainText("Hi");
  await page.locator("#barIcon").click();
  await page.getByRole("link", { name: "ABOUT" }).click();
  await page.locator("#modeIcon").click();
  await page.getByRole("heading", { name: "OMOLOLA" }).click();
  await expect(page.locator("#modeIcon")).toBeVisible();
  await page.getByRole("link").nth(3);
  await page.locator('a[href*="linkedin"]');
  await page.goBack();
});
