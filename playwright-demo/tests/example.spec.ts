import { test } from '@playwright/test';
import { TodoPage } from '../pages/TodoPage';

test('should allow me to add a new todo item', async ({ page }) => {
  const todoPage = new TodoPage(page);

  await todoPage.goto();
  await todoPage.addTodo('Learn Playwright with Typescript');
  await todoPage.assertFirstItemText('Learn Playwright with Typescript');
});

test('should allow me to mark a todo item as completed', async ({ page }) => {
  const todoPage = new TodoPage(page);

  // 1. Navigate and create the item
  await todoPage.goto();
  await todoPage.addTodo('Complete first Playwright module');

  // 2. Mark completed
  await todoPage.markFirstAsComplete();

  // 3. Verify status
  await todoPage.assertFirstItemCompleted();
});