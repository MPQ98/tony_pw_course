import { test, expect } from '@playwright/test';
import { ProductPage } from './02.productPage';
/*------------------------------------------------------------------------*/

test.describe('Bài 2: Product Page', async () => {
    test('TC01 - Add products to cart successfully', async ({ page }) => {
        const productPage = new ProductPage(page);
        const orderData = [
            { id: 1, quantity: 2 }, // Sản phẩm #1: Thêm 2 cái
            { id: 2, quantity: 3 }, // Sản phẩm #2: Thêm 3 cái
            { id: 3, quantity: 1 }  // Sản phẩm #3: Thêm 1 cái
        ];
        await test.step('Đi tới trang chủ material', async () => {
            await productPage.navigateToHome();
        });
        await test.step('Click vào bài 2: Product page', async () => {
            await productPage.clickProductPageLink();
        });
        await test.step('Thêm 2 sản phẩm #1', async () => {
            await productPage.addProductToCart(orderData[0].id, orderData[0].quantity);
        });

        await test.step('Thêm 3 sản phẩm #2', async () => {
            await productPage.addProductToCart(orderData[1].id, orderData[1].quantity);
        });

        await test.step('Thêm 1 sản phẩm #3', async () => {
            await productPage.addProductToCart(orderData[2].id, orderData[2].quantity);
        });
        // Expect
        await test.step('Kiểm tra số lượng sản phẩm trong giỏ hàng', async () => {

        });
    });
});