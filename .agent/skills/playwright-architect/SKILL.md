---
name: playwright-architect
description: Architects and scaffolds enterprise-grade Playwright JS/TS automation frameworks from scratch. Uses Page Object Model (POM), custom reporters, and industry best practices. Triggered when the user wants to start a new automation project or automate a specific domain.
---

# Playwright Architect

Transform a domain and a set of instructions into a complete, scalable Playwright automation framework.

## When to use this skill
- User says: "Create a Playwright framework for [domain]"
- User says: "Help me automate [X] using the Page Object Model"
- Starting a new JS/TS testing project from scratch.

## Workflow
1. [ ] **Requirement Analysis**: Ask for the Domain URL and the specific features/user flows to automate (e.g., Login, Checkout, Profile Management).
2. [ ] **Environment Setup**: 
    - Check if `package.json` exists; if not, initialize one.
    - Install necessary dependencies (`@playwright/test`, `typescript`).
3. [ ] **Architecture Scaffolding**: 
    - Create `playwright.config.ts`.
    - Create directory structure: `pages/`, `tests/`, `utils/`, `data/`.
4. [ ] **POM Implementation**: 
    - Generate BasePage and specific Page Objects for the domain.
    - Implement locators and action methods with proper wait strategies.
5. [ ] **Test Generation**: 
    - Create clean, readable tests using the Page Objects.
    - Implement fixtures for cleaner test setup.
6. [ ] **Reporting & CI**:
    - Configure custom reporters (HTML, List, or Allure).
    - Add a `README.md` with execution commands.

## Instructions

### 1. Framework Structure
Always enforce this hierarchy:
- `/tests` - Spec files.
- `/pages` - Class-based Page Objects.
- `/fixtures` - Custom test fixtures.
- `/utils` - Common helpers (API clients, string manipulation).

### 2. Implementation Rules
- **Locators**: Use user-facing locators (GetByRole, GetByText) instead of fragile CSS/XPath where possible.
- **POM**: Methods in Page Objects should return `this` for chaining or another Page Object if navigation occurs.
- **Config**: Ensure `playwright.config.ts` includes trace collection on first retry and video in failure.
- **Types**: Use strict TypeScript interfaces for test data.

### 3. Execution Plan
Always provide the user with clear next steps:
- `npx playwright test`
- `npx playwright show-report`

## Resources
- [Framework Templates](resources/framework-templates.md)
