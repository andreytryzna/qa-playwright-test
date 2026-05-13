import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import playwright from "eslint-plugin-playwright";
import prettier from "eslint-config-prettier";

export default tseslint.config(
  {
    ignores: ["test-results/", "playwright-report/", "node_modules/"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["tests/**"],
    plugins: {
      playwright, // Явно регистрируем плагин
    },
    rules: {
      ...playwright.configs["flat/recommended"].rules, // Подтягиваем стандартные правила
      "playwright/no-wait-for-timeout": "error",
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
      "no-console": "warn",
    },
  },
  prettier
);