import test from '@playwright/test';

test("first test", async ({ page }) => {

   await page.goto('https://demowebshop.tricentis.com');

   await page.getByRole('link', { name: 'Tricentis' }).first().click();


});