import { test } from '@playwright/test';

test('Testcase 01', async ({ page }) => {
    await test.step('Đi tới trang chủ material', async () => {
        await page.goto("https://material.playwrightvn.com/");
    });
    await test.step('Click vào bài 1 Register Page', async () => {
        await page.locator("//a[@href='01-xpath-register-page.html']").click();
    });
    await test.step('Nhập thông tin trường Username', async () => {
        //await page.locator("//input[@id='username']").fill("Xin chào Việt Nam");
        await page.locator("//input[@id='username']").pressSequentially("Tony", { delay: 200 });
    });
    await test.step('Nhập thông tin trường Email', async () => {
        await page.locator("//input[@id='email']").pressSequentially("Tony@gmail.com", { delay: 200 });
    });
    await test.step('Nhập thông tin trường Gender', async () => {
        await page.locator("//input[@id='male']").check();
    });
    await test.step('Nhập thông tin trường Hobbies', async () => {
        await page.locator("//input[@id='reading']").check();
        await page.locator("//input[@id='cooking']").check();
    });
    await test.step('Nhập thông tin trường Interests', async () => {
        await page.locator("//select[@id='interests']").selectOption(['technology', 'art', 'sports']);
    });
    await test.step('Nhập thông tin trường Country', async () => {
        await page.locator("//select[@id='country']").selectOption(['canada']);
    });
    await test.step('Nhập thông tin trường Date of Birth', async () => {
        await page.locator("//input[@id='dob']").fill('1998-07-06');
    });
    await test.step('Nhập thông tin trường Profile Picture', async () => {
        await page.locator("//input[@id='profile']").setInputFiles('C:/Tony/4. Media/Image/Meme/13255927_689583897862394_8108160660528606699_n.jpg');
    });
    await test.step('Nhập thông tin trường Biography', async () => {
        await page.locator("//textarea[@id='bio']").fill('Nothing here');
    });
    await test.step('Click button Register', async () => {
        await page.locator("//button[@type='submit']").click();
    });
});