import { test, expect } from '@playwright/test';
import { RegisterPage } from './01.registerPage';
/*------------------------------------------------------------------------*/

test.describe('Bài 1: Register Page', async () => {
    test('TC01 - Register successfully', async ({ page }) => {
const data = {
    username: "Tony",
    email: "Tony@gmail.com",
    interests: ["technology", "art", "sports"],
    country: "canada",
    dob: "1998-07-06",
    profilePicture: "C:/Tony/4. Media/Image/Meme/13255927_689583897862394_8108160660528606699_n.jpg",
    biography: "Nothing here"
}
        const registerPage = new RegisterPage(page);
        await test.step('Đi tới trang chủ material', async () => {
            await registerPage.navigateToHome();
        });
        await test.step('Click vào bài 1 Register Page', async () => {
            await registerPage.clickRegisterPageLink();
        });
        await test.step('Nhập thông tin trường Username', async () => {
            await registerPage.fillUsername(data.username);
        });
        await test.step('Nhập thông tin trường Email', async () => {
            await registerPage.fillEmail(data.email);
        });
        await test.step('Nhập thông tin trường Gender', async () => {
            await registerPage.selectGenderMale();
        });
        await test.step('Nhập thông tin trường Hobbies', async () => {
            await registerPage.selectHobbies();
        });
        await test.step('Nhập thông tin trường Interests', async () => {
            await registerPage.selectInterests(data.interests);
        });
        await test.step('Nhập thông tin trường Country', async () => {
            await registerPage.selectCountry(data.country);
        });
        await test.step('Nhập thông tin trường Date of Birth', async () => {
            await registerPage.fillDateOfBirth(data.dob);
        });
        await test.step('Nhập thông tin trường Profile Picture', async () => {
            await registerPage.uploadProfilePicture(data.profilePicture);
        });
        await test.step('Nhập thông tin trường Biography', async () => {
            await registerPage.fillBiography(data.biography);
        });
        await test.step('Click button Register', async () => {
            await registerPage.clickRegister();
        });
        // Expect
        await test.step('Kiểm tra thông tin đã được đăng ký', async () => {
            await expect(registerPage.firstRowUsernameCell).toHaveText(data.username);

            await expect(registerPage.firstRowEmailCell).toHaveText(data.email);

            const infoCell = registerPage.firstRowInfoCell;
            //await expect(infoCell).toContainText("Gender: male");
            //await expect(infoCell).toContainText(`Hobbies: reading, cooking`);
            await expect(infoCell).toContainText(`Country: ${data.country}`);
            await expect(infoCell).toContainText(`Date of Birth: ${data.dob}`);
            await expect(infoCell).toContainText(`Biography: ${data.biography}`);
        });
    })
});