import { test as base } from '@playwright/test';
import { DochubLoginPage } from '../pageobjects_ts/DochubLoginPage';
import { DochubMainPage } from '../pageobjects_ts/DochubMainPage';
import { DochubPricingPage } from '../pageobjects_ts/DochubPricingPage';

// Объявляем типы для наших страниц
type MyFixtures = {
  loginPage: DochubLoginPage;
  mainPage: DochubMainPage;
  pricingPage: DochubPricingPage;
};

// Экспортируем кастомный "test", который уже знает про наши страницы
export const test = base.extend<MyFixtures>({
  
    loginPage: async ({ page }, use) => {
    // Создаем экземпляр страницы
    const loginPage = new DochubLoginPage(page);
    // Передаем его в тест
    await use(loginPage);
  },


    mainPage: async ({ page }, use) => {
    const mainPage = new DochubMainPage(page);
    await use(mainPage);
  },

  pricingPage: async ({ page }, use) => {
    const pricingPage = new DochubPricingPage(page);
    await use(pricingPage);
  }

});

export { expect } from '@playwright/test';