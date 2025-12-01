import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

Given('I am on the login page', async function () {
    const page = (this as any).page;
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
});

When('I login with username {string} and password {string}', async function (username: string, password: string) {
    const page = (this as any).page;
    const loginPage = new LoginPage(page);
    await loginPage.login(username, password);
});

Then('I should see the products page', async function () {
    const page = (this as any).page;
    const loginPage = new LoginPage(page);
    const isVisible = await loginPage.isProductsPageVisible();
    expect(isVisible).toBeTruthy();
});

Then('I should see an error message {string}', async function (expectedMessage: string) {
    const page = (this as any).page;
    const loginPage = new LoginPage(page);
    const actualMessage = await loginPage.getErrorMessage();
    expect(actualMessage).toContain(expectedMessage);
});
