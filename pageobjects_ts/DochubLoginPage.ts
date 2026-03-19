import { Page, Locator } from '@playwright/test';

export class DochubLoginPage {
    private page: Page;
    private emailInput: Locator;
    private passwordInput: Locator;
    private signInButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.getByLabel('Email address');
        this.passwordInput = page.locator('input[type="password"]');
        this.signInButton = page.getByRole('button', { name: 'Sign in with password' });
    }

    async goto() {
        await this.page.goto('https://dochub.com/sign-in');
    }

    async login(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.signInButton.click();
    }

    getErrorMessage() {
        return this.page.getByText('Error: Username and password entered did not match our records');
    }
}