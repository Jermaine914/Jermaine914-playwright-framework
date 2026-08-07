import { Page, Locator, expect } from '@playwright/test';

export class TodoPage {
    // 1 Define member variables with Typescript types
    readonly page: Page;
    readonly todoInput: Locator;
    readonly firstItem: Locator;

    // 2. The Constructor initializes the page and locators
    constructor(page: Page) {
        this.page = page;
        this.todoInput = page.getByPlaceholder('What needs to be done?');
        this.firstItem = page.getByTestId('todo-title');
    }

    // 3. Action Methods
    async goto() {
        await this.page.goto('https://demo.playwright.dev/todomvc');
    }

    async addTodo(text: string) {
        await this.todoInput.fill(text);
        await this.todoInput.press('Enter');
    }

    // 4. Assertion Methods
    async assertFirstItemText(expectedText: string) {
        await expect(this.firstItem).toHaveText(expectedText);
    }
}