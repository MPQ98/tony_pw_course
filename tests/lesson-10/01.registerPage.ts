import { Page, Locator } from '@playwright/test';

export class RegisterPage {
    // Properties
    page: Page;
    registerPageURL: Locator;
    usernameInput: Locator;
    emailInput: Locator;
    genderRadio: Locator;
    readingCheckbox: Locator;
    cookingCheckbox: Locator;
    interestsSelect: Locator;
    countrySelect: Locator;
    dobInput: Locator;
    profileInput: Locator;
    bioTextarea: Locator;
    registerButton: Locator;
    firstRowUsernameCell: Locator;
    firstRowEmailCell: Locator;
    firstRowInfoCell: Locator;

    // Constructor
    constructor(page: Page) {
        this.page = page;
        this.registerPageURL = page.locator("//a[@href='01-xpath-register-page.html']");
        this.usernameInput = page.locator("//input[@id='username']");
        this.emailInput = page.locator("//input[@id='email']");
        this.genderRadio = page.locator("//input[@id='male']");
        this.readingCheckbox = page.locator("//input[@id='reading']");
        this.cookingCheckbox = page.locator("//input[@id='cooking']");
        this.interestsSelect = page.locator("//select[@id='interests']");
        this.countrySelect = page.locator("//select[@id='country']");
        this.dobInput = page.locator("//input[@id='dob']");
        this.profileInput = page.locator("//input[@id='profile']");
        this.bioTextarea = page.locator("//textarea[@id='bio']");
        this.registerButton = page.locator("//button[@type='submit']");
        this.firstRowUsernameCell = page.locator("//table[@id='userTable']/tbody/tr[1]/td[2]");
        this.firstRowEmailCell = page.locator("//table[@id='userTable']/tbody/tr[1]/td[3]");
        this.firstRowInfoCell = page.locator("//table[@id='userTable']/tbody/tr[1]/td[4]");
    }

    // Methods
    async navigateToHome() {
        await this.page.goto("https://material.playwrightvn.com/");
    }

    async clickRegisterPageLink() {
        await this.registerPageURL.click();
    }

    async fillUsername(username: string) {
        await this.usernameInput.pressSequentially(username, { delay: 200 });
    }

    async fillEmail(email: string) {
        await this.emailInput.pressSequentially(email, { delay: 200 });
    }

    async selectGenderMale() {
        await this.genderRadio.check();
    }

    async selectHobbies() {
        await this.readingCheckbox.check();
        await this.cookingCheckbox.check();
    }

    async selectInterests(interests: string[]) {
        await this.interestsSelect.selectOption(interests);
    }

    async selectCountry(country: string) {
        await this.countrySelect.selectOption([country]);
    }

    async fillDateOfBirth(dob: string) {
        await this.dobInput.fill(dob);
    }

    async uploadProfilePicture(filePath: string) {
        await this.profileInput.setInputFiles(filePath);
    }

    async fillBiography(bio: string) {
        await this.bioTextarea.fill(bio);
    }

    async clickRegister() {
        await this.registerButton.click();
    }
}