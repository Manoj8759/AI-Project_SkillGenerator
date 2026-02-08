# Saucedemo Playwright Framework

This is an enterprise-grade automation framework for Saucedemo.com using Playwright, TypeScript, and the Page Object Model (POM).

## 📁 Architecture
- `pages/`: Page Object classes defining selectors and actions.
- `tests/`: Spec files using custom fixtures.
- `fixtures/`: Playwright test extensions for easy Page Object access.
- `playwright.config.ts`: Global configuration (retries, timeouts, multi-browser).

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Install Playwright Browsers
```bash
npx playwright install chromium
```

### 3. Run Tests
- **All Tests**: `npx playwright test`
- **Headed Mode**: `npx playwright test --headed`
- **Specific File**: `npx playwright test tests/login.spec.ts`
- **Show Report**: `npx playwright show-report`

## 🛠️ Best Practices Applied
- **Page Object Model**: Strict separation between test logic and UI selectors.
- **Custom Fixtures**: Automatic instantiation of Page Objects per test.
- **Path Aliasing**: Clean imports using TypeScript paths.
- **Reporting**: HTML and List reporters configured by default.
- **Stability**: Built-in Playwright auto-waiting and trace collection on failure.

*Note: Registration flow is not available on Saucedemo, so work concentrated on Login and Inventory flows.*
