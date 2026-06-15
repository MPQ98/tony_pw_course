import { test, expect } from '@playwright/test';
/*--------------------------------------------------------------------------------*/

test.beforeEach(async ({ page }) => {
    await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
});
/*--------------------------------------------------------------------------------*/

test.describe('AUTH - Authentication', async () => { //Nhóm các testcase chung 1 nhóm
    test('AUTH_001_1: Kiểm tra các trường bắt buộc', async ({ page }) => {
        await expect(page.locator("//input[@id='user_login']")).toHaveAttribute('required', 'required');
        await expect(page.locator("//input[@id='user_pass']")).toHaveAttribute('required', 'required');
    });

    test('AUTH_001_2: Login không thành công - Sai username/password', async ({ page }) => {
        const username = "quymp";
        const password = "Zxc@123";
        await test.step('1. Nhập username/email', async () => {
            await page.locator("//input[@id='user_login']").fill(`${username}`);
        });
        await test.step('2. Nhập password', async () => {
            await page.locator("//input[@id='user_pass']").fill(`${password}`);
        });
        await test.step('3. Click Login', async () => {
            await page.locator("//input[@id='wp-submit']").click();
        });
        await expect(page.locator("//div[@id='login_error']")).toHaveText(`Error: The username ${username} is not registered on this site. If you are unsure of your username, try your email address instead.`);
    });

    test('AUTH_002: Login thành công - Đúng username/password', async ({ page }) => {
        const username = "betterbytes.academy.admin";
        const password = "StrongPass@BetterBytesAcademy";
        await test.step('1. Nhập username/email', async () => {
            await page.locator("//input[@id='user_login']").fill(`${username}`);
        });
        await test.step('2. Nhập password', async () => {
            await page.locator("//input[@id='user_pass']").fill(`${password}`);
        });
        await test.step('3. Click Login', async () => {
            await page.locator("//input[@id='wp-submit']").click();
        });
        await expect(page).toHaveURL(/.*wp-admin/);
        await expect(page.locator("//h1[text()='Dashboard']")).toBeVisible();
        await expect(page.locator("//h2[text()='Activity']")).toBeVisible();
        await expect(page.locator("//h2[text()='At a Glance']")).toBeVisible();
    });
});

