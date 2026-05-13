import { test, expect } from '../fixtures/baseTest';

test('Verify that the pricing page displays the correct heading', async ({ mainPage, pricingPage }) => {
    
    // 1. Open the main page and navigate to the pricing page
    await mainPage.goto();
    await mainPage.clickPricing();
    
    // 2. Verify the heading text on the pricing page
    const heading = pricingPage.getChoosePlanText();
    await expect(heading).toBeVisible();
    await expect(heading).toHaveText('Choose the DocHub plan that works for you');
});