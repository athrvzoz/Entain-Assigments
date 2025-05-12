const { test, expect } = require("@playwright/test");

test.describe("Practice ExpandTesting - Basic Validations", () => {
  test("Open Chrome, go to practice.expandtesting.com, validate URL, title, and elements", async ({ page }) => {
    await page.goto("https://practice.expandtesting.com");

    // Validate Title
    await expect(page).toHaveTitle("Automation Testing Practice for QA and Developers | UI and API");

    // Validate some elements on the page
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
  });
});
