# Playwright Cucumber TypeScript Framework

This is a test automation framework built using **Playwright**, **CucumberJS**, and **TypeScript**. It is designed to run end-to-end tests for the [Swag Labs](https://www.saucedemo.com/) application.

## Features

- **Playwright**: For reliable and fast browser automation.
- **CucumberJS**: For BDD (Behavior Driven Development) style test scenarios.
- **TypeScript**: For type safety and better developer experience.
- **Page Object Model**: For maintainable and reusable code structure.
- **GitHub Actions**: For CI/CD integration.

## Prerequisites

- Node.js (v14 or higher)
- npm

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mkaganm/playwright-cucumber-ts-framework.git
   ```
2. Navigate to the project directory:
   ```bash
   cd playwright-cucumber-ts-framework
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Running Tests

To run the tests, execute the following command:

```bash
npm test
```

This command runs `cucumber-js`, which executes the feature files located in `src/features`.

## Project Structure

- `src/features`: Contains Cucumber feature files (`.feature`).
- `src/pages`: Contains Page Object classes.
- `src/steps`: Contains step definitions matching the feature steps.
- `src/support`: Contains support files like hooks and world configuration.
- `.github/workflows`: Contains CI/CD pipeline configurations.

## License

ISC
