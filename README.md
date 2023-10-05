# react-vite-boiler ❤️‍🔥

A modern minimal Vite + React + TypeScript template with pre-configured ESLint, Prettier, Testing with Jest and Git hooks with Husky out of the box 📦

## Features

- ⚡️ [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- ⚛️ [React 18](https://reactjs.org/) - A JavaScript library for building user interfaces
- 💎 [TypeScript](https://www.typescriptlang.org/) - Why not?!
- 🔨 [EsLint](https://eslint.org/) - Pluggable JavaScript linter
- 🌀 [Prettier](https://prettier.io) - Opinionated Code Formatter
- 🐺 [Husky](https://github.com/typicode/husky) - Native Git hooks
- ⚙️ [Jest](https://jestjs.io/) - Testing libraries
- ⌨️ Absolute Imports
- 📑 [Commitlint](https://commitlint.js.org/) - Linting your commits based on commit convention

## Usage

```bash
# to clone repository run:
npx degit marcin-kopanski/react-vite-boiler my-app

cd my-app

# Required if you want a repository and work with Git hooks
git init

yarn install

yarn dev
```

## Available commands

<p>In this project, you can run the following scripts:</p>

| Script             | Description                                                                 |
| ------------------ | --------------------------------------------------------------------------- |
| yarn dev           | Runs the app in the development mode.                                       |
| yarn build         | Builds the app for production to the `dist` folder.                         |
| yarn preview       | Builds the app for production to the `dist` folder, and run locally server. |
| yarn preview:watch | Same as above but also watches for file changes.                            |
| yarn lint          | Runs the Eslint and show code problems                                      |
| yarn lint:fix      | Runs the Eslint and fix the code problems                                   |
| yarn format        | Runs the Prettier and fix code style                                        |
| yarn compile       | Runs the TS Compiling                                                       |
| yarn test          | Run the app tests.                                                          |
| yarn commit        | Open the CZ CLI to create a message to your commit.                         |

## Microfrontend configuration

This project is a host app that uses react-vite-micro-demo microfrontend.

Run this project using `yarn dev` - runs vite local dev server on port 5000.
Run react-vite-micro-demo using `yarn preview:watch` - runs vite preview and vite build and is watchng
for file changes.

## License

[MIT](https://choosealicense.com/licenses/mit/)
