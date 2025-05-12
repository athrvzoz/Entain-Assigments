const { test, expect } = require("@playwright/test");
const { Assignment6Page } = require("./Assignment6.js");

test.describe("Page Object Model Refactoring", () => {
    test("Login and validation using POM", async ({ page }) => {
        const ass6 = new Assignment6Page(page);
        await ass6.Go();
        await ass6.ValidatePage();
        await ass6.Login("standard_user", "secret_sauce");
    });
});