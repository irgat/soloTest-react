SoloTest React
---

[![ci](https://github.com/irgat/soloTest-react/actions/workflows/ci.yml/badge.svg)](https://github.com/irgat/soloTest-react/actions/workflows/ci.yml)

React TypeScript Code Example

### About:

A peg solitaire game for the web, built with React, TypeScript and PixiJS.

### Prerequisites:

- [nvm](https://nodejs.org/en/download/package-manager)

  ```
  $ nvm install
  $ nvm use
  ```

- [yarn](https://classic.yarnpkg.com/lang/en/docs/install)
  ```
  $ npm install --global yarn
  ```

### How to set up:

```
$ git clone https://github.com/irgat/soloTest-react.git soloTest-react
$ cd soloTest-react
$ yarn
```

### Dev mode:

```
$ yarn dev
```

### Production build:

```
$ yarn build
```

The build output goes to `dist`. To serve that output locally:

```
$ yarn preview
```

### Tests:

```
$ yarn test
```

With a coverage report, written to `coverage`:

```
$ yarn test:coverage
```

### Before committing:

```
$ yarn verify
```

This runs the linter, the format check, the type check and the tests. CI runs the same checks, plus a production build with `yarn build`. The linter treats warnings as errors. If the format check fails, run `yarn format`.
