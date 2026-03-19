# QA Tests

## Tools Used
- Playwright

## Install dependencies

npm install

## Run tests
npx playwright test

## Runs the end-to-end tests visible
npx playwright test --headed
     
## Starts the interactive UI mode.
  npx playwright test --ui
    
## Runs the tests only on Desktop Chrome.
  npx playwright test --project=chromium
    
## Runs the tests in a specific file.
  npx playwright test example
    
## Runs the tests in debug mode.
  npx playwright test llc.spec.js --debug
    

##  Create a new branch 
git checkout -b feature/your-task-name

##  Make changes
git status
git add .
git commit -m "Add: implemented validation logic"
git push origin feature/your-task-name

##  Update Branch After Review (If Changes Requested)

git add .
git commit -m "Fix: address review comments"
git push

