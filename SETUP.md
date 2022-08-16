# Initial Project Setup

This project has been generated using the `aws-nodejs-typescript` template from the [Serverless framework](https://www.serverless.com/).

- `serverless create --template aws-nodejs-typescript --path aws-serverless-typescript-api`

# ESLint

- [ESLint](https://eslint.org/) - static code analysis (+ code formatting)
- [Prettier](https://prettier.io/) - an opinionated code formatter

## Setup

- `npm init @eslint/config`
- `npm install --save-dev eslint-config-airbnb-typescript` for Airbnb with TypeScript ([see issue](https://stackoverflow.com/questions/59265981/typescript-eslint-missing-file-extension-ts-import-extensions))

## Options

- Modules: CommonJS , ESmodules
- JavaScript / TypeScript
- Code Style: Aibnb, Google, Common, XO

## Packages

- eslint
- [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import) - linting of ES2015+ (ES6+) import/export syntax.
- TypeScript
  - [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/parser) - An ESLint parser which allow for linting TypeScript source code.
  - [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin) - An ESLint plugin which provides lint rules for TypeScript codebases.
  - [eslint-import-resolver-typescript](https://github.com/import-js/eslint-import-resolver-typescript) - This plugin adds TypeScript support to eslint-plugin-import.
- Frameworks
  - React
    - [eslint-plugin-react]
	- [eslint-plugin-jsx-a11y]
	- [eslint-plugin-react-hooks]
  - Vue
    - [eslint-plugin-vue]
- Code Style
  - [Airbnb](https://github.com/airbnb/javascript)
    - [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) - Airbnb's .eslintrc as an extensible shared config (with React).
    - [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) - Airbnb's base JS .eslintrc (without React plugins) as an extensible shared config.
    - [eslint-config-airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript) - Enhances Airbnb's ESLint config with TypeScript support.
  - [Standard](https://github.com/standard/standard)
    - [eslint-config-standard]
	- [eslint-plugin-promise]
  - [Google](https://github.com/google/eslint-config-google)
  - [XO](https://github.com/xojs/eslint-config-xo)

### Resources

- `npm install --save-dev eslint-config-airbnb-typescript` (https://stackoverflow.com/questions/59265981/typescript-eslint-missing-file-extension-ts-import-extensions)
- Install eslint plugin in VS Code (or run on commant line: `npx eslint "src/**"` - quotes are important)


# Prettier

- `npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier`

## Packages

- [prettier](https://github.com/prettier/prettier) - Prettier is an opinionated code formatter
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) - Turns off all rules that are unnecessary or might conflict with Prettier.
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) - Runs Prettier as an ESLint rule and reports differences as individual ESLint issues.

# Middy

- `npm install @middy/validator`

# Serverless Offline

- `npm install --save-dev serverless-offline serverless-dynamodb-local`
- Install eslint plugin in VS Code (or run on commant line: `npx eslint "src/**"` - quotes are important)