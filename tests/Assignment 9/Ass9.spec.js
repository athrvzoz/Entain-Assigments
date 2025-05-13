const {test,expect}=require("@playwright/test")

test("Form Submission",async ({page})=>{
    await page.goto("https://letcode.in/forms");

    await page.locator("#firstname").fill("Atharva");
    await page.locator("#lasttname").fill("Deshmukh");
    await page.getByRole("textbox",{name:"Email"}).fill("hello@com");
    await page.locator('form div').filter({ hasText: 'EmailCountry codeUSA (+1)UK' }).getByRole('combobox').selectOption('91');
    await page.getByRole('textbox', { name: 'Address Line-1' }).click();
    await page.getByRole('textbox', { name: 'Address Line-1' }).fill('aaaaaaaaaa');
    await page.getByRole('textbox', { name: 'Address Line-2' }).click();
    await page.getByRole('textbox', { name: 'Address Line-2' }).fill('xxxxxxxxxxxxxxxxx');
    await page.locator('input[type="date"]').fill("2025-05-05");
    await page.locator('form div').filter({ hasText: 'Postal-CodeCountryAfghanistan' }).getByRole('combobox').selectOption('India');
    await page.getByRole('radio', { name: 'Male', exact: true }).check();
    await page.getByRole('checkbox', { name: 'I agree to the terms and' }).check();
    await page.getByRole("button", { name: "Submit" }).click();
    // await expect(page.getByText("Form submitted successfully")).toBeVisible();
})