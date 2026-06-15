import { test } from '@playwright/test';
/*--------------------------------------------------------------------------------*/
test.beforeAll(async ({ page }) => {//Khai báo các bước mặc định đầu tiên trước khi chạy testcase
    console.log("Bắt đầu chạy tất cả testcase");
});
test.afterAll(async ({ page }) => {//Khai báo các bước mặc định cuối cùng sau khi chạy testcase
    console.log("Kết thúc chạy tất cả testcase");
});
test.beforeEach(async ({ page }) => {//Khai báo các bước mặc định đầu tiên của mỗi testcase khi bước đầu của chúng giống nhau
    await page.goto("https://material.playwrightvn.com/");
});

test.afterEach(async ({ page }) => {//Khai báo các bước mặc định cuối cùng của mỗi testcase khi bước cuối của chúng giống nhau
    console.log("Kết thúc test");
});
/*--------------------------------------------------------------------------------*/
test.describe('Tên test suite', async () => { //Nhóm các testcase chung 1 nhóm
    test('Bài thực hành 01', async ({ page }) => //Khai báo một test case với tên "Bài thực hành 01"
    {
        await test.step('Click vào bài 1 "Form"', async () => {
            await page.locator("//a[@href='01-xpath-register-page.html']").click();
        });
        await test.step('Điền vào ô input username: xinchaovietnam', async () => {
            await page.locator("//input[@id='username']").fill("Xin chào Việt Nam");
            await page.locator("//input[@id='email']").pressSequentially("Xin chào Việt Nam", { delay: 200 });
        });
    });
    test('Bài thực hành 02', async ({ page }) => //Khai báo một test case với tên "Bài thực hành 02"
    {
        await test.step('Click vào bài 1 "Form"', async () => {
            await page.locator("//a[@href='01-xpath-register-page.html']").click();
        });
        await test.step('Điền vào ô input username: xinchaovietnam', async () => {
            await page.locator("//input[@id='username']").fill("Xin chào Việt Nam");
            await page.locator("//input[@id='email']").pressSequentially("Xin chào Việt Nam", { delay: 200 });
        });
    });
});


test.beforeAll(async ({ page }) => {//Khai báo các bước mặc định đầu tiên của mỗi testcase khi bước đầu của chúng giống nhau
    const username = "betterbytes.academy.admin";
    const password = "StrongPass@BetterBytesAcademy";
    await test.step('1. Truy cập link', async () => {
        await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
    });
    await test.step('2. Nhập username/email', async () => {
        await page.locator("//input[@id='user_login']").fill(`${username}`);
    });
    await test.step('3. Nhập password', async () => {
        await page.locator("//input[@id='user_pass']").fill(`${password}`);
    });
    await test.step('4. Click Login', async () => {
        await page.locator("//input[@id='wp-submit']").click();
    });
});