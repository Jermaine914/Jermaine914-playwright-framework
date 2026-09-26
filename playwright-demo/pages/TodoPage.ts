import { Page, Locator, expect } from '@playwright/test';

export class TodoPage {
  readonly page: Page;
  readonly todoInput: Locator;
  readonly firstItem: Locator;
  readonly toggleCheckbox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.todoInput = page.getByPlaceholder('What needs to be done?');
    this.firstItem = page.getByTestId('todo-title');
    this.toggleCheckbox = page.getByRole('checkbox', { name: 'Toggle Todo' });
  }

  async goto() {
    await this.page.goto('https://demo.playwright.dev/todomvc');
  }

  async addTodo(text: string) {
    await this.todoInput.fill(text);
    await this.todoInput.press('Enter');
  }

  async markFirstAsComplete() {
    await this.toggleCheckbox.check();
  }

  async assertFirstItemText(expectedText: string) {
    await expect(this.firstItem).toHaveText(expectedText);
  }

  async assertFirstItemCompleted() {
    const firstListItem = this.page.locator('ul.todo-list li').first();
    await expect(firstListItem).toHaveClass(/completed/);
  }
}