const {test,expect} = require("@playwright/test");

test.describe("Assignment 5", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("https://letcode.in/alert");
    });

    test("Alert", async ({ page }) => {
        await page.getByRole('button', { name: 'Simple Alert' }).click();
        await page.on('dialog', async dialog => {
            console.log(dialog.message());
            await dialog.accept();
        });
    });

    test("Confirm", async ({ page }) => {
        await page.getByRole('button', { name: 'Confirm' }).click();
        await page.on('dialog', async dialog => {
            console.log(dialog.message());
            await dialog.accept();
        });
    });

    test("Prompt", async ({ page }) => {
        await page.getByRole('button', { name: 'Prompt' }).click();
        await page.on('dialog', async dialog => {
            console.log(dialog.message());
            await dialog.accept("Hello World");
        });
    });

    test("Prompt with Cancel", async ({ page }) => {
        await page.getByRole('button', { name: 'Prompt' }).click();
        await page.on('dialog', async dialog => {
            console.log(dialog.message());
            await dialog.dismiss();
        });
    });
});