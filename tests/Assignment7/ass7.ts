import { test as base, Page } from '@playwright/test';

// Extend basic test by providing a "todoPage" fixture.
export const test = base.extend<{ todopage: Page }>({
  todopage: async ({ page }, use) => {
    await page.goto("https://practice.expandtesting.com");    
    
    await page.getByRole("link").filter({ hasText: "Try it out" }).nth(1).click();
    
    // await expect(todopage).toHaveURL("https://practice.expandtesting.com/login");
    
    await page.getByRole("textbox",{name:"username"}).nth(0).fill("practice");
    await page.getByRole("textbox",{name:"password"}).nth(0).fill("SuperSecretPassword!");
    
    await page.getByRole("button", { name: "Login" }).nth(0).click();

    await use(page);
  },
});
