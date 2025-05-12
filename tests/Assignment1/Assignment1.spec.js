const {test,expect}=require("@playwright/test");
test("SauceDemo Title Verification",async({page})=>{
    await page.goto("https://www.saucedemo.com");

    await expect(page).toHaveTitle("Swag Labs");
    await expect(page).toHaveURL("https://www.saucedemo.com/");

    await expect(page.getByPlaceholder("Username")).toBeVisible();
    await expect(page.getByPlaceholder("Password")).toBeVisible();
    await expect(page.getByRole("button", { name: "Login" })).toBeVisible();
    await expect(page.getByText("Username")).toBeVisible();
    await expect(page.getByText("Password")).toBeVisible(); 
    await expect(page.getByText("Swag Labs")).toBeVisible();

    await expect(page.getByRole("button", { name: "Login" })).toBeEnabled();
    await expect(page.getByRole("button", { name: "Login" })).toHaveAttribute("type", "submit");
})