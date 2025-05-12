const {test,expect} = require('@playwright/test');

test.describe('Assignment 8', () => {

    test("Drag and drop using mouse actions", async ({ page }) => {
        await page.goto('https://practice.expandtesting.com/drag-and-drop');

        const source = await page.locator('#column-a');
        const target = await page.locator('#column-b');

        const sourceBox = await source.boundingBox();
        const targetBox = await target.boundingBox();

        if (sourceBox && targetBox) {
            await page.mouse.move(
                sourceBox.x + sourceBox.width / 2,
                sourceBox.y + sourceBox.height / 2
            );
            await page.mouse.down();
            await page.mouse.move(
                targetBox.x + targetBox.width / 2,
                targetBox.y + targetBox.height / 2
            );
            await page.mouse.up();
        } else {
            throw new Error('Could not find bounding boxes for drag and drop');
        }
    });

    test("Drop Down using keyboard actions", async ({ page }) => {
        await page.goto('https://practice.expandtesting.com/dropdown');

        const dropdown = await page.locator('#dropdown');
        await dropdown.click();

        // Use keyboard actions to select the option
        await page.keyboard.press('ArrowDown');
        await expect(page.locator('text=Option 2')).toHaveText('Option 2');
        await page.keyboard.press('Enter'); 

        await page.locator('#elementsPerPageSelect').click();
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        
        // Verify the selected option
        await page.locator('#elementsPerPageSelect').click();
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('Enter');
        
        await page.locator('#country').click();
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('Enter');
    });

    test("Slider using keyboard actions", async ({ page }) => {
        await page.goto('https://letcode.in/slider/');

        const slider = await page.locator('#generate');
        const value=await page.locator('#generate').innerText();

        const sliderBox = await slider.boundingBox();


        if (sliderBox) {
            await page.mouse.move(
                sliderBox.x + sliderBox.width / 2,
                sliderBox.y + sliderBox.height / 2
            );
            await page.mouse.down();
            await page.keyboard.press('ArrowRight');
            await page.keyboard.press('ArrowRight');
            await page.keyboard.press('ArrowRight');
            await page.mouse.up();
        } else {
            throw new Error('Could not find bounding box for slider');
        }

        // Verify the slider value
        const sliderValue = await page.locator('#generate').innerText();

        let ans=sliderValue.split(' ')[1]-value.split(' ')[1];
        await expect(ans).not.toBe(0);
        // await expect(sliderValue).not.toBe(value);
    });
});