    import      { Page } from '@playwright/test';

export class DochubPricingPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }   

    //verify text "Choose the DocHub plan that works for you"
    getChoosePlanText() {
        return this.page.getByRole('heading', { name: 'Choose the DocHub plan that works for you' });
    }    
    
}
    