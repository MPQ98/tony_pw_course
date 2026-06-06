import { test } from '@playwright/test';

test('Testcase 03', async ({ page }) => {
    //Các bước đi màn hình chính-------------------------------------------------------  
    await test.step('Đi tới trang chủ material', async () => {
        await page.goto("https://material.playwrightvn.com/");
    });
    await test.step('Click vào bài 3: Todo page', async () => {
        await page.locator("//a[@href='03-xpath-todo-list.html']").click();
    });
    //Các bước điều chỉnh thông tin------------------------------------------------------
    await test.step('Thêm mới 100 todo item có nội dung “Todo <i>”', async () => {
        for (let i = 1; i <= 100; i++) {
            await page.locator("//input[@id='new-task']").fill(`Việc số #${i}`);
            await page.locator("//button[@id='add-task']").click();
        }
    });
    await test.step('Xoá các todo có số lẻ”', async () => {
        page.on('dialog', async dialog => dialog.accept());
        for (let i = 99; i >= 0; i--) {
            if (i % 2 === 0) {
                await page.locator(`//button[@onclick='deleteTask(${i})']`).click();
            }
        }
    });
});



