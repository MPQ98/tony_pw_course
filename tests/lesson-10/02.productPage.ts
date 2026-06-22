import { Page, Locator } from '@playwright/test';

export class ProductPage {
    // Properties
    page: Page;
    productPageURL: Locator;
    totalPriceCell: Locator;

    // Constructor
    constructor(page: Page) {
        this.page = page;
        this.productPageURL = page.locator("//a[@href='02-xpath-product-page.html']");
        this.totalPriceCell = page.locator("//table/tfoot/tr/td[@class='total-price']");
    }

    // Methods
    async navigateToHome() {
        await this.page.goto("https://material.playwrightvn.com/");
    }

    async clickProductPageLink() {
        await this.productPageURL.click();
    }
    async addProductToCart(productId: number, qty: number) {
        const addToCartButton = this.page.locator(`//button[@class='add-to-cart' and @data-product-id='${productId}']`);
        for (let i = 0; i < qty; i++) {
            await addToCartButton.click();
        }
    }
    getCartItemQuantityLocator(productName: string): Locator {
        return this.page.locator(`//tbody[@id='cart-items']/tr[td[text()='${productName}']]/td[3]`);
    }
    getCartItemTotalLocator(productName: string): Locator {
        return this.page.locator(`//tbody[@id='cart-items']/tr[td[text()='${productName}']]/td[4]`);
    }
}
