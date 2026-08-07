import { test, expect } from '@playwright/test';
import { TodoPage } from '../pages/TodoPage';

test('should allow me to add a new todo item', async ({ page }) => {
  // 1. Navigate to the Todo practice application.
  await page.goto('https://demo.playwright.dev/todomvc');

  // 2. Locate the input field and type a new todo item
  const todoInput = page.getByPlaceholder('What needs to be done?');
  await todoInput.fill('Learn Playwright with Typescript');
  await todoInput.press('Enter');

  // 3. Assert that the item was added to the list and is visible
  const firstItem = page.getByTestId('todo-title');
  await expect(firstItem).toHaveText('Learn Playwright with Typescript');
});