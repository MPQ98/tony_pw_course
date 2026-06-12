import { test } from '@playwright/test';

test('Testcase 02', async ({ page }) => {
    //Các bước đi màn hình chính------------------------------------------------------  
    await test.step('Đi tới trang chủ material', async () => {
        await page.goto("https://material.playwrightvn.com/");
    });
    await test.step('Click vào bài 2: Product page', async () => {
        await page.locator("//a[@href='02-xpath-product-page.html']").click();
    });
    //Các bước điều chỉnh thông tin-----------------------------------------------------
    await test.step('Thêm 2 sản phẩm #1', async () => {
        await page.locator("//button[@data-product-id='1']").dblclick();
    });
    await test.step('Thêm 3 sản phẩm #2', async () => {
        await page.locator("//button[@data-product-id='2']").click({ clickCount: 3 }); //Áp dụng khi cần click nhiều lần
    });
    await test.step('Thêm 1 sản phẩm #3', async () => {
        await page.locator("//button[@data-product-id='3']").click();
    });
});