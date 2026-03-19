import { test, expect } from '@playwright/test';
import { DochubLoginPage } from '../pageobjects_ts/DochubLoginPage';

test('Invalid login shows error message', async ({ page }) => {
    const loginPage = new DochubLoginPage(page);
    
    // 1. Open the login page
    await loginPage.goto();
    
    // 2. Enter an invalid email and password
    await loginPage.login('invalid@email.com', 'wrongpassword');
    
    // 3. Click the login button (handled in login method)
    // 4. Verify the authorization error message appears
    await expect(loginPage.getErrorMessage()).toBeVisible();
});