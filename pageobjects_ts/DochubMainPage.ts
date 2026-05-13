import      { Page } from '@playwright/test';


export class DochubMainPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://dochub.com/');
    }

    async clickPricing() {
        await this.page.getByLabel('Site header with logo and').getByRole('link', { name: 'Pricing' }).click();
    }
    
    async clickFeatures() {
        await this.page.getByRole('link', { name: 'Features' }).click();
    }   

    async clickSignIn() {
        await this.page.getByRole('link', { name: 'Sign in' }).click();
    }
}