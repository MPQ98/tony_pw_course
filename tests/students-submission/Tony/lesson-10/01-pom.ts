import { Page, Locator } from '@playwright/test';

export class MaterialBasePage {
    page: Page;
    xpathRegisterPage: string;
    xpathProductPage: string;
    cssTodoPage: string;
    personalNote: Locator;

    constructor(page: Page) {
        this.page = page;

    }

    openMaterialPage() {

    }
    gotoPage(pageName: string) {

    }
}
/*------------------------------------------------------------*/
export class RegisterPage extends MaterialBasePage {
    xpathUsername: string;
    xpathEmail: string;
    xpathGenderMale: string;
    xpathGenderFemale: string;

    constructor(page: Page) {
        super(page); 
    }
    fillUsername() {
        // Code xử lý điền username
    }
    fillEmail() {
        // Code xử lý điền email
    }
    checkGender(gender: string) {
        // Code xử lý chọn giới tính dựa vào tham số truyền vào
    }
}