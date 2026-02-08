import { test, expect } from '../fixtures/pageFixtures';

test.describe('SauceDemo Login Tests', () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.navigate();
    });

    test('Successful login with standard_user', async ({ loginPage, page }) => {
        await loginPage.login('standard_user', 'secret_sauce');
        await expect(page).toHaveURL(/inventory.html/);
    });

    test('Failed login with locked_out_user', async ({ loginPage }) => {
        await loginPage.login('locked_out_user', 'secret_sauce');
        const error = await loginPage.getErrorMessage();
        expect(error).toContain('Sorry, this user has been locked out');
    });

    test('Failed login with invalid credentials', async ({ loginPage }) => {
        await loginPage.login('invalid_user', 'wrong_password');
        const error = await loginPage.getErrorMessage();
        expect(error).toContain('Username and password do not match any user in this service');
    });
});
