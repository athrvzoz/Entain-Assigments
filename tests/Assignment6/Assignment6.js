const { test, expect } = require("@playwright/test");

class Assignment6Page {
    constructor(page) {
        this.page = page;
    }

    async Go() {
        await this.page.goto("https://www.saucedemo.com");
    }

    async ValidatePage() {
        await expect(this.page).toHaveTitle("Swag Labs");
        await expect(this.page).toHaveURL("https://www.saucedemo.com/");
        await expect(this.page.getByPlaceholder("Username")).toBeVisible();
        await expect(this.page.getByPlaceholder("Password")).toBeVisible();
        await expect(this.page.getByRole("button", { name: "Login" })).toBeVisible();
        await expect(this.page.getByText("Username")).toBeVisible();
        await expect(this.page.getByText("Password")).toBeVisible();
        await expect(this.page.getByText("Swag Labs")).toBeVisible();
        await expect(this.page.getByRole("button", { name: "Login" })).toBeEnabled();
        await expect(this.page.getByRole("button", { name: "Login" })).toHaveAttribute("type", "submit");
    }

    async Login(username, password) {
        await this.page.fill("#user-name", username);
        await this.page.fill("#password", password);
        await this.page.locator("#login-button").click();
    }
}

module.exports = { Assignment6Page };