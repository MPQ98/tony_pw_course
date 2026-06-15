import { test, expect } from '@playwright/test';
/*--------------------------------------------------------------------------------*/

test.beforeEach(async ({ page }) => {//Khai báo các bước mặc định đầu tiên của mỗi testcase khi bước đầu của chúng giống nhau
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
/*--------------------------------------------------------------------------------*/

test.describe('ACCOUNT - Account: Tạo user', async () => { //Nhóm các testcase chung 1 nhóm
    test('ACC_001_1: Tạo user có nhóm quyền editor', async ({ page }) => {
        const addUser = page.locator("//a[@href='https://pw-practice-dev.playwrightvn.com/wp-admin/user-new.php' and text()='Add User']");
        const className = "k23";
        const name = "quy"
        const password = "Zxc@6798123123";
        const email = "maiphuquy98@gmail.com";
        const firstName = className;
        const lastName = name;
        await test.step('1. Vào menu Users', async () => {
            await page.locator("//div[text()='Users']").click();
            await expect(page.locator("//h1[normalize-space()='Users']")).toBeVisible();
            await expect(addUser).toBeEnabled();
        });
        await test.step('2. Click Add User. Điền thông tin hợp lệ và submit', async () => {
            await addUser.click();
            await page.locator("//input[@id='user_login']").fill(`${className}_${name}`);
            await page.locator("//input[@id='email']").fill(`${email}`);
            await page.locator("//input[@id='first_name']").fill(`${firstName}`);
            await page.locator("//input[@id='last_name']").fill(`${lastName}`);
            await page.locator("//input[@id='pass1']").clear(); //Clear mật khẩu hệ thống tự gen
            await page.locator("//input[@id='pass1']").pressSequentially(`${password}`, { delay: 200 });
            // if (await page.locator("//tr[@class = 'pw_weak' and @style='display: table-row;']").isVisible()) {
            //     await page.locator("//input[@name = 'pw_weak']").isChecked();
            // };
            await page.locator("//select[@id='role']").selectOption(['editor']);
            await page.locator("//input[@id='createusersub']").click();
            await expect(page.locator("//div[@id = 'message']")).toContainText('New user created.');
        });
        await test.step('3. Kiểm tra đăng nhập tài khoản mới', async () => {
            await page.locator("//li [@id = 'wp-admin-bar-my-account']").hover();
            await page.locator("//a[contains(text(), 'Log Out')]").click();
            await page.waitForTimeout(2000);
            await page.locator("//input[@id='user_login']").fill(`${className}_${name}`);
            await page.locator("//input[@id='user_pass']").pressSequentially(`${password}`, { delay: 200 });
            await page.locator("//input[@id='wp-submit']").click();
            await expect(page).toHaveURL(/.*wp-admin/);
            await expect(page.locator("//div[text()='Appearance']")).not.toBeVisible();
            await expect(page.locator("//div[contains(text(), 'Plugins')]")).not.toBeVisible();
            await expect(page.locator("//div[text()='Users']")).not.toBeVisible();
            await expect(page.locator("//div[contains(text(), 'Dashboard')]")).toBeVisible();
            await expect(page.locator("//div[contains(text(), 'Posts')]")).toBeVisible();
            await expect(page.locator("//div[contains(text(), 'Media')]")).toBeVisible();
            await expect(page.locator("//div[contains(text(), 'Pages')]")).toBeVisible();
            await expect(page.locator("//div[contains(text(), 'Comments')]")).toBeVisible();
            await expect(page.locator("//div[contains(text(), 'Tools')]")).toBeVisible();
            await expect(page.locator("//div[contains(text(), 'Profile')]")).toBeVisible();
        });
    });
    test('ACC_001_2: Xóa user editor vừa tạo', async ({ page }) => {
        const className = "k23";//Cần check lại chỗ này có gom được với trên kia không?
        const name = "quy"//Cần check lại chỗ này có gom được với trên kia không?
        await test.step('1. Vào menu Users, tìm user vừa tạo', async () => {
            await page.locator("//div[text()='Users']").click();
            await page.locator("//input[@id='user-search-input']").fill(`${className}_${name}`);
            await page.locator("//input[@id='search-submit']").click();
        });
        await test.step('2. Sau khi tìm kiếm, xóa user cần xóa', async () => {
            await page.locator(`//a[contains(text(), '${className}_${name}')]`).hover();
            await page.locator(`//a[contains(text(), 'Delete')]`).click();
            await page.locator(`//input[@id = 'delete_option0']`).click();
            await page.locator(`//input[@id = 'submit']`).click();
            await expect(page.locator("//div[@id = 'message']")).toContainText('User deleted.');
        });
    });
    test('ACC_002_1: Tạo user có nhóm quyền subscriber', async ({ page }) => {
        const addUser = page.locator("//a[@href='https://pw-practice-dev.playwrightvn.com/wp-admin/user-new.php' and text()='Add User']");
        const className = "k23";
        const name = "quy"
        const password = "Zxc@6798123123";
        const email = "maiphuquy98@gmail.com";
        const firstName = className;
        const lastName = name;
        await test.step('1. Vào menu Users', async () => {
            await page.locator("//div[text()='Users']").click();
            await expect(page.locator("//h1[normalize-space()='Users']")).toBeVisible();
            await expect(addUser).toBeEnabled();
        });
        await test.step('2. Click Add User. Điền thông tin hợp lệ và submit', async () => {
            await addUser.click();
            await page.locator("//input[@id='user_login']").fill(`${className}_${name}`);
            await page.locator("//input[@id='email']").fill(`${email}`);
            await page.locator("//input[@id='first_name']").fill(`${firstName}`);
            await page.locator("//input[@id='last_name']").fill(`${lastName}`);
            await page.locator("//input[@id='pass1']").clear(); //Clear mật khẩu hệ thống tự gen
            await page.locator("//input[@id='pass1']").pressSequentially(`${password}`, { delay: 200 });
            // if (await page.locator("//tr[@class = 'pw_weak' and @style='display: table-row;']").isVisible()) {
            //     await page.locator("//input[@name = 'pw_weak']").isChecked();
            // };
            await page.locator("//select[@id='role']").selectOption(['subscriber']);
            await page.locator("//input[@id='createusersub']").click();
            await expect(page.locator("//div[@id = 'message']")).toContainText('New user created.');
        });
        await test.step('3. Kiểm tra đăng nhập tài khoản mới', async () => {
            await page.locator("//li [@id = 'wp-admin-bar-my-account']").hover();
            await page.locator("//a[contains(text(), 'Log Out')]").click();
            await page.waitForTimeout(2000);
            await page.locator("//input[@id='user_login']").fill(`${className}_${name}`);
            await page.locator("//input[@id='user_pass']").pressSequentially(`${password}`, { delay: 200 });
            await page.locator("//input[@id='wp-submit']").click();
            await expect(page).toHaveURL(/.*wp-admin/);
            await expect(page.locator("//div[text()='Appearance']")).not.toBeVisible();
            await expect(page.locator("//div[text()='Users']")).not.toBeVisible();
            await expect(page.locator("//div[contains(text(), 'Plugins')]")).not.toBeVisible();
            await expect(page.locator("//div[contains(text(), 'Posts')]")).not.toBeVisible();
            await expect(page.locator("//div[contains(text(), 'Media')]")).not.toBeVisible();
            await expect(page.locator("//div[contains(text(), 'Pages')]")).not.toBeVisible();
            await expect(page.locator("//div[contains(text(), 'Comments')]")).not.toBeVisible();
            await expect(page.locator("//div[contains(text(), 'Tools')]")).not.toBeVisible();
            await expect(page.locator("//div[contains(text(), 'Dashboard')]")).toBeVisible();
            await expect(page.locator("//div[contains(text(), 'Profile')]")).toBeVisible();
        });
    });
    test('ACC_002_2: Xóa user subcriber vừa tạo', async ({ page }) => {
        const className = "k23";//Cần check lại chỗ này có gom được với trên kia không?
        const name = "quy"//Cần check lại chỗ này có gom được với trên kia không?
        await test.step('1. Vào menu Users, tìm user vừa tạo', async () => {
            await page.locator("//div[text()='Users']").click();
            await page.locator("//input[@id='user-search-input']").fill(`${className}_${name}`);
            await page.locator("//input[@id='search-submit']").click();
        });
        await test.step('2. Sau khi tìm kiếm, xóa user cần xóa', async () => {
            await page.locator(`//a[contains(text(), '${className}_${name}')]`).hover();
            await page.locator(`//a[contains(text(), 'Delete')]`).click();
            //await page.locator(`//input[@id = 'delete_option0']`).click();
            await page.locator(`//input[@id = 'submit']`).click();
            await expect(page.locator("//div[@id = 'message']")).toContainText('User deleted.');
        });
    });
});
