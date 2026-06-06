import { test } from '@playwright/test';

test('Testcase 04', async ({ page }) => {
    //Các bước đi màn hình chính-------------------------------------------------------  
    await test.step('Đi tới trang chủ material', async () => {
        await page.goto("https://material.playwrightvn.com/");
    });
    await test.step('Click vào bài 4: Personal Notes', async () => {
        await page.locator("//a[@href='04-xpath-personal-notes.html']").click();
    });
    //Các bước điều chỉnh thông tin------------------------------------------------------
    await test.step('Thêm mới note #1”', async () => {
        const actions = [
            {
                action: 'click',
                desc: 'Hàm click dùng để thực hiện click vào các phần tử trên trang web'
            },
            {
                action: 'fill',
                desc: 'Hàm fill dùng để điền văn bản vào các trường input hoặc textarea trên trang web'
            },
            {
                action: 'type',
                desc: 'Hàm type dùng để nhập từng ký tự một vào phần tử, mô phỏng hành vi gõ phím thực tế của người dùng'
            },
            {
                action: 'hover',
                desc: 'Hàm hover dùng để di chuyển con trỏ chuột đến vị trí của phần tử, kích hoạt các hiệu ứng hover'
            },
            {
                action: 'check',
                desc: 'Hàm check dùng để đánh dấu checkbox hoặc radio button, đảm bảo phần tử ở trạng thái checked'
            },
            {
                action: 'uncheck',
                desc: 'Hàm uncheck dùng để bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked'
            },
            {
                action: 'selectOption',
                desc: 'Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select dropdown'
            },
            {
                action: 'press',
                desc: 'Hàm press dùng để mô phỏng việc nhấn phím bàn phím như Enter, Tab, Escape hoặc các phím khác'
            },
            {
                action: 'dblclick',
                desc: 'Hàm dblclick dùng để thực hiện double click (nhấp đúp chuột) vào phần tử trên trang web'
            },
            {
                action: 'dragAndDrop',
                desc: 'Hàm dragAndDrop dùng để kéo một phần tử từ vị trí nguồn và thả vào vị trí đích trên trang web'
            }
        ]
        for (let i = 0; i < actions.length; i++) {
            const notes = actions[i];
            await page.locator("//input[@id='note-title']").fill(notes.action);
            await page.locator("//textarea[@id='note-content']").fill(notes.desc);
            await page.locator("//button[@id='add-note']").click();
        }
    });
    // await test.step('Thêm mới note #1”', async () => {
    //     await page.locator("//input[@id='note-title']").fill(`click`);
    //     await page.locator("//textarea[@id='note-desc']").fill(`Hàm click dùng để thực hiện click vào các phần tử trên trang web`);
    //     await page.locator("//button[@id='add-note']").click();
    // });
    // await test.step('Thêm mới note #2”', async () => {
    //     await page.locator("//input[@id='note-title']").fill(`fill`);
    //     await page.locator("//textarea[@id='note-desc']").fill(`Hàm fill dùng để điền văn bản vào các trường input hoặc textarea trên trang web`);
    //     await page.locator("//button[@id='add-note']").click();
    // });
    // await test.step('Thêm mới note #3”', async () => {
    //     await page.locator("//input[@id='note-title']").fill(`type`);
    //     await page.locator("//textarea[@id='note-desc']").fill(`Hàm type dùng để nhập từng ký tự một vào phần tử, mô phỏng hành vi gõ phím thực tế của người dùng`);
    //     await page.locator("//button[@id='add-note']").click();
    // });
    // await test.step('Thêm mới note #4”', async () => {
    //     await page.locator("//input[@id='note-title']").fill(`hover`);
    //     await page.locator("//textarea[@id='note-desc']").fill(`Hàm hover dùng để di chuyển con trỏ chuột đến vị trí của phần tử, kích hoạt các hiệu ứng hover`);
    //     await page.locator("//button[@id='add-note']").click();
    // });
    // await test.step('Thêm mới note #5”', async () => {
    //     await page.locator("//input[@id='note-title']").fill(`check`);
    //     await page.locator("//textarea[@id='note-desc']").fill(`Hàm check dùng để đánh dấu checkbox hoặc radio button, đảm bảo phần tử ở trạng thái checked`);
    //     await page.locator("//button[@id='add-note']").click();
    // });
    // await test.step('Thêm mới note #6”', async () => {
    //     await page.locator("//input[@id='note-title']").fill(`uncheck`);
    //     await page.locator("//textarea[@id='note-desc']").fill(`Hàm uncheck dùng để bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked`);
    //     await page.locator("//button[@id='add-note']").click();
    // });
    // await test.step('Thêm mới note #7”', async () => {
    //     await page.locator("//input[@id='note-title']").fill(`selectOption`);
    //     await page.locator("//textarea[@id='note-desc']").fill(`Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select dropdown`);
    //     await page.locator("//button[@id='add-note']").click();
    // });
    // await test.step('Thêm mới note #8”', async () => {
    //     await page.locator("//input[@id='note-title']").fill(`press`);
    //     await page.locator("//textarea[@id='note-desc']").fill(`Hàm press dùng để mô phỏng việc nhấn phím bàn phím như Enter, Tab, Escape hoặc các phím khác`);
    //     await page.locator("//button[@id='add-note']").click();
    // });
    // await test.step('Thêm mới note #9”', async () => {
    //     await page.locator("//input[@id='note-title']").fill(`dblclick`);
    //     await page.locator("//textarea[@id='note-desc']").fill(`Hàm dblclick dùng để thực hiện double click (nhấp đúp chuột) vào phần tử trên trang web`);
    //     await page.locator("//button[@id='add-note']").click();
    // });
    // await test.step('Thêm mới note #10”', async () => {
    //     await page.locator("//input[@id='note-title']").fill(`dragAndDrop`);
    //     await page.locator("//textarea[@id='note-desc']").fill(`Hàm dragAndDrop dùng để kéo một phần tử từ vị trí nguồn và thả vào vị trí đích trên trang web`);
    //     await page.locator("//button[@id='add-note']").click();
    // });
    //Tìm kiếm thông tin--------------------------------------------------------------------
    await test.step('Thực hiện search với keyword “một hoặc nhiều”', async () => {
        await page.locator("//input[@id='search']").fill("một hoặc nhiều");
    });

});