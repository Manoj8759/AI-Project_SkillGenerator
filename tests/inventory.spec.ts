import { test, expect } from '../fixtures/pageFixtures';

test.describe('SauceDemo Inventory Management', () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.navigate();
        await loginPage.login('standard_user', 'secret_sauce');
    });

    test('Verify all products are listed', async ({ productsPage }) => {
        const count = await productsPage.getProductCount();
        expect(count).toBe(6);
    });

    test('Sort products by price (low to high)', async ({ productsPage }) => {
        await productsPage.selectSortOption('lohi');
        const price = await productsPage.getFirstProductPrice();
        expect(price).toBe('$7.99');
    });

    test('Add product to cart and verify badge count', async ({ productsPage }) => {
        await productsPage.addFirstProductToCart();
        const count = await productsPage.getCartCount();
        expect(count).toBe(1);
    });
});
