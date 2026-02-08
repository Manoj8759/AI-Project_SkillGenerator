import { Page, Locator, expect } from '@playwright/test';

export class ProductsPage {
    private readonly page: Page;
    private readonly inventoryItems: Locator;
    private readonly productSortContainer: Locator;
    private readonly shoppingCartBadge: Locator;

    constructor(page: Page) {
        this.page = page;
        this.inventoryItems = page.locator('.inventory_item');
        this.productSortContainer = page.locator('[data-test="product-sort-container"]');
        this.shoppingCartBadge = page.locator('.shopping_cart_badge');
    }

    async getProductCount() {
        return await this.inventoryItems.count();
    }

    async selectSortOption(option: string) {
        await this.productSortContainer.selectOption(option);
    }

    async getFirstProductPrice() {
        return await this.page.locator('.inventory_item_price').first().textContent();
    }

    async addFirstProductToCart() {
        await this.page.locator('button:has-text("Add to cart")').first().click();
    }

    async getCartCount() {
        const text = await this.shoppingCartBadge.textContent();
        return text ? parseInt(text) : 0;
    }
}
