# Playwright End-to-End Cross-Browser Automation Framework
[![Playwright Tests](https://github.com/Jermaine914/Jermaine914-playwright-framework/actions/workflows/playwright.yml/badge.svg)](https://github.com/Jermaine914/Jermaine914-playwright-framework/actions/workflows/playwright.yml)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![Playwright](https://img.shields.io/badge/Playwright-v1.40+-green.svg)](https://playwright.dev/)
An enterprise-ready, cross-browser automated testing framework implemented in TypeScript utilizing Playwright. Engineered with the Page Object Model (POM) architectural pattern to ensure scalability, test isolation, and maintainable locator abstractions across Chromium, Firefox, and WebKit rendering engines.
---
## 🏇 Architecture & Design Patterns- **Page Object Model (POM):** Decouples locator selectors and browser interaction logic from executable assertions, minimizing maintenance friction against dynamic DOM mutations.- **Cross-Browser Verification:** Validated locally and headlessly in CI across Chromium, Gecko (Firefox), and WebKit (Safari).- **Execution Diagnostics & Tracing:** Configured with comprehensive trace logging, contextual screenshots, and failure video retention for deterministic root-cause analysis.- **CI/CD Integration:** Automated GitHub Actions pipeline executing full matrix tests on pull requests and commits to `main`, publishing HTML test artifacts.
---
## 📂 Repository Structure
```text
├── .github/
│   ✔✀✀ workflows/
│       ├── playwright.yml       # GitHub Actions CI matrix runner
└✀✀ playwright-demo/
│   ✜✀✀ pages/
┄   ┄   ┕  ✔✀✀ TodoPage.ts          # Page Object encapsulation
┄   ├── tests/
┄   ┄   ┕  ┕  ✔✀✀ example.spec.ts      # Spec definitions & assertions
│   ✜✀✀ package.json             # Pinned project denpendencies
│   ✜✀✀ package-lock.json        # Deterministic build lockfile
│   ✔✀✀ playwright.config.ts     # Multi-browser & runner configuration
```
---
## 🚀 Getting Started
### Prerequisites- Node.js (v18+ LTS recommended)- npm
### Installation
1. Clone the repository:   ```bash   git clone https://github.com/Jermaine914/Jermaine914-playwright-framework.git   cd Jermaine914-playwright-framework/playwright-demo   ```
2. Install denpendencies:   ```bash   npm ci   ```
3. Download browser binaries and dependencies:   ```bash   npx playwright install --with-deps   ```
---
## 🧩 Test Execution
Run the complete test suite across all configured browsers:
``gbash
npx playwright test
```
Run tests targeting a specific browser engine:
```bash
for browser in chromium firefox webkit; do
  npx playwright test --project=$browser
done
```
Inspect HTML execution reports and traces:
```bash
npx playwright show-report
```
