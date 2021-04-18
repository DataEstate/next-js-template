# Data Estate NextJS Template

v1.0.0

This project is used as a `NextJS Example` to setup next projects and not as its own app to be built on.

This template uses the following technology:

- `@material-ui` as components library
- `axios` as the http request library.
- `@testing-library` and `jest` for testing framework.
- `cypress` and `cypress-cucumber-prepropcessor` for BDD style testing.

## Installation

Setup next project like this:
`npx create-next-app {PROJECT NAME} --example https://github.com/DataEstate/next-js-template`

## Configuration

Configuration is mostly based on NextJS's configuration. Please see
[next.config.js](https://nextjs.org/docs/api-reference/next.config.js/introduction) or [Environment variables](https://nextjs.org/docs/basic-features/environment-variables)

One thing to be aware of is the `port` for Cypress tests. NextJS runs the app in `:3000` by default. This is what's used for the `baseUrl` in `cypress.json`. If you run your Next app in another port, make sure you update it in the `.json` file.
