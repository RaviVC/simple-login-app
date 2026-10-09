const { test, expect } = require('@playwright/test');

test('admin login sanity', async ({ page }) => {

    await page.goto('http://localhost:3000/login.html');

    await page.fill('#username', 'admin');

    await page.fill('#password', 'admin123');

    await page.click('#loginBtn');

    await expect(page.locator('h1'))

        .toHaveText('Login Successful');

});