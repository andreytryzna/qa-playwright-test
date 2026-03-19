# 🎭 Playwright QA Automation

This repository contains end-to-end tests built with **Playwright**.

## 🛠️ Tech Stack
* **Framework:** [Playwright](https://playwright.dev/)
* **Runner:** Playwright Test Runner

---

## 🚀 Getting Started

### 1. Installation
Clone the repository and install dependencies:

npm install && npx playwright install --with-deps

## 🧪 Running Tests

| Command | Description |
| :--- | :--- |
| `npx playwright test` | Runs all tests in **headless** mode |
| `npx playwright test --headed` | Runs tests with a **visible** browser window |
| `npx playwright test --ui` | Opens the **Interactive UI mode** |
| `npx playwright test --project=chromium` | Runs tests only on **Desktop Chrome** |
| `npx playwright test example` | Runs tests in a **specific file** |
| `npx playwright test --debug` | Opens the **Inspector** to step through tests |

---

## 🌿 Contribution Workflow

### 1. Create a Branch
`git checkout -b feature/your-task-name`

### 2. Commit & Push
`git add .`  
`git commit -m "feat: implemented validation logic"`  
`git push origin feature/your-task-name`

### 3. Update After Review
`git add .`  
`git commit -m "fix: address review comments"`  
`git push`