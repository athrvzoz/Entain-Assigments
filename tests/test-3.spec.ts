import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://letcode.in/forms/');
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByRole('checkbox', { name: 'I agree to the terms and' }).check();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.locator('#firstname').click();
  await page.locator('#firstname').fill('aaaa');
  await page.locator('#lasttname').click();
  await page.locator('#lasttname').fill('aaaa');
  await page.getByRole('textbox', { name: 'Email input' }).click();
  await page.getByRole('textbox', { name: 'Email input' }).fill('hello@com');
  await page.getByRole('textbox', { name: 'Phone Number' }).click();
  await page.getByRole('textbox', { name: 'Phone Number' }).fill('1111111111');
  await page.getByRole('textbox', { name: 'Address Line-1' }).click();
  await page.getByRole('textbox', { name: 'Address Line-1' }).fill('aaaaaaaaaa');
  await page.getByRole('textbox', { name: 'Address Line-2' }).click();
  await page.getByRole('textbox', { name: 'Address Line-2' }).fill('xxxxxxxxxxxxxxxxx');
  await page.getByRole('textbox', { name: 'State' }).click();
  await page.getByRole('textbox', { name: 'State' }).fill('Maha');
  await page.getByRole('textbox', { name: 'Postal-Code' }).click();
  await page.getByRole('textbox', { name: 'Postal-Code' }).fill('411041');
  await page.locator('#Date').fill('2020-10-03');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('textbox', { name: 'Phone Number' }).fill('1111111111');
  await page.getByRole('button', { name: 'Submit' }).click();
});