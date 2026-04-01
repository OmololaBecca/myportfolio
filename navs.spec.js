const { test, expect } = require("@playwright/test");

test("nav loads", async ({ page }) => {
  await page.goto("https://omolola-becca.netlify.app/", {
    timeout: 60000, // 60 seconds
    waitUntil: "load",
  });

  await expect(page).toHaveTitle(/Omolola Becca Olaoye/);
  await page.locator("#barIcon").click();
  await page.locator("#about").click;
  await expect(page.locator("img").first()).toBeVisible();
});
