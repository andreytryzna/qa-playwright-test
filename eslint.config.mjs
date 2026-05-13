import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import playwright from "eslint-plugin-playwright";

export default tseslint.config(
  {
    // Игнорируем системные папки
    ignores: ["test-results/", "playwright-report/", "node_modules/"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ...playwright.configs["flat/recommended"],
    files: ["tests/**"], // Применяем правила Playwright только к папке с тестами
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    rules: {
      "no-console": "warn", // Чтобы не забывал удалять console.log
      "@typescript-eslint/no-explicit-any": "error", // Запрещаем 'any' — это важно для Senior уровня 
      "playwright/no-wait-for-timeout": "error", // Запрещаем жесткие паузы (sleep)
      "playwright/expect-expect": "error", // Тест без проверок — не тест
    },
  }
);