const { test, expect } = require('@playwright/test');
const path = require('path');

test.describe('Assignment 10', () => {
    test('Upload a file', async ({ page }) => {
        // const filePath = 'C:/Users/AD115408/Pictures/Screenshots/Screenshot (1).png';
        await page.goto('http://127.0.0.1:5500/file-upload-demo.html');
        const fileChooserPromise = page.waitForEvent('filechooser');
        await page.locator('#fileInput').click();
        const fileChooser = await fileChooserPromise;
        await fileChooser.setFiles(path.join(__dirname, 'upload.png'));

        await page.getByRole('button',{name:"Upload"}).click();

        await expect(page.getByText("Successfully uploaded!")).toBeVisible();
    });

});