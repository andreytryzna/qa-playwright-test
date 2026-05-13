import { test, expect } from '../fixtures/baseTest';

test('Invalid login shows error message', async ({ loginPage, mainPage }) => {
    
    // 1. Open the main page and navigate to the login page
    await mainPage.goto();
    await mainPage.clickSignIn();
    
    // 2. Enter an invalid email and password
    await loginPage.login('invalid@email.com', 'wrongpassword');
    
    // 3. Click the login button (handled in login method)
    // 4. Verify the authorization error message appears
    await expect(loginPage.getErrorMessage()).toBeVisible();
});