const {test,expect} =require("@playwright/test");

test.describe("SauceDemo Login Automation",()=>{
    test.beforeEach(async({page})=>{
        await page.goto("https://www.saucedemo.com");
    })
    test("Automate login using Get by Role",async ({page})=>{
        // await page.goto("https://www.saucedemo.com");
        
        await page.getByRole("textbox",{name:"Username"}).fill("standard_user");
        await page.getByRole("textbox",{name:"Password"}).fill("secret_sauce");
        
        await page.getByRole("button",{name:"Login"}).click();
    })
    test("Using Id", async ({page}) => {
        // await page.goto("https://www.saucedemo   .com");

        await page.locator("#user-name").fill("standard_user");
        await page.locator("#password").fill("secret_sauce");
        await page.locator("#login-button").click();
    });

    test("Using Class", async ({page}) => {
        // await page.goto("https://www.saucedemo.com");

        await page.locator(".input_error").nth(0).fill("standard_user"); // Username
        await page.locator(".input_error").nth(1).fill("secret_sauce"); // Password
        await page.locator(".btn_action").click();
    });
    test("Using Data-test Attribute", async ({page}) => {
        // await page.goto("https://www.saucedemo.com");

        await page.locator('[data-test="username"]').fill("standard_user");
        await page.locator('[data-test="password"]').fill("secret_sauce");
        await page.locator("#login-button").click();
    });

    test("Using Xpath",async ({page})=>{
        await page.locator("//*[@id='user-name']").fill("standard_user");
        await page.locator("//*[@id='password']").fill("secret_sauce");
        await page.locator("//*[@id='login-button']").click();
    })
})

// test()
