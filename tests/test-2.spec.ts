import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://letcode.in/forms/');
  await page.locator('#firstname').click();
  await page.locator('#firstname').fill('afafafa');
  await page.locator('#lasttname').click();
  await page.locator('#lasttname').fill('gaga');
  await page.getByRole('textbox', { name: 'Email input' }).click();
  await page.getByRole('textbox', { name: 'Email input' }).fill('hello@com');
  await page.locator('form div').filter({ hasText: 'EmailCountry codeUSA (+1)UK' }).getByRole('combobox').selectOption('973');
  await page.getByRole('textbox', { name: 'Phone Number' }).click();
  await page.locator('form div').filter({ hasText: 'Postal-CodeCountryAfghanistan' }).getByRole('combobox').selectOption('India');
  await page.locator('form div').filter({ hasText: 'EmailCountry codeUSA (+1)UK' }).getByRole('combobox').selectOption('91');
});