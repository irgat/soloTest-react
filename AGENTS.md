# What this is

Solo Test is a peg solitaire game for the web, built with Vite, React, TypeScript and PixiJS.

- Targets desktop, tablet and mobile browsers, landscape only. Orientation cannot be locked on the web, so landscape is a design target, not something to enforce in code.
- The repository is public. Assume anything written into it is readable by anyone.

# Layout

- `src/` holds the app. `src/game/` holds the PixiJS board.
- `src/__tests__/` holds tests, mirroring the path of the code they cover.
- `public/` holds static files served as is.
- There is no `@/` alias. Imports are relative.
- `tsconfig.app.json` includes `src` only, and `tsconfig.node.json` includes `vite.config.ts` only. Anything outside those two paths is formatted but never type-checked.
- ESLint's only rule block is gated on `**/*.{ts,tsx}`, so a `.js` file gets no rules at all — including inside `src`.

# Working with the author

- The author writes the code. Explain, review and answer questions.
- Do not produce implementation code unless asked for it in plain words.
- Confirm scope before starting anything that takes more than one step.
- Ask rather than guess when a request is ambiguous.

# Commands

- Yarn 1 classic is the package manager. Never npm or pnpm.
- Run `yarn verify` before reporting a change as finished. If the format check fails, run `yarn format`.
- Never name a script `check`. It is a Yarn 1 built-in and silently replaces the script.
- CI lists the four checks in `yarn verify` separately rather than calling the script. A check added to `verify` must be added to the workflow too.
- CI also runs `yarn build`. `yarn verify` does not build.
- Changing `.github/workflows/review.yml` on a branch stops the review running on that pull request. The action compares the file with the copy on `main` and skips when they differ, with a message that reads like a failure. The new version takes effect from the next pull request.
- `yarn lint` fails on warnings. Fix them rather than silencing them with `eslint-disable`.
- Bump `vitest` and `@vitest/coverage-v8` together. The coverage package declares an exact peer on vitest, not a range.

# Architecture

- No `@pixi/react`. `src/game/GameBoard.tsx` mounts a plain PixiJS `Application` through `useEffect` and a ref. The `cancelled` and `initialised` flags handle StrictMode's double mount and are deliberate.
- `Application.init()` returns a promise that can reject, in a real browser as well as in tests. Keep the `.catch()`.
- Screens take props and do not read global state. Use stub props until the game rules exist.
- That rule is reviewed once real state lands. Follow it until then, and say so if it starts to hurt.

# Tests

- Vitest with jsdom and `@testing-library/react`.
- The Vitest config lives in `vite.config.ts`, which imports `defineConfig` from `vitest/config`. Do not add a `vitest.config.ts` — it would take over and drop the React plugin and the jsdom environment.
- `test: { globals: true }` is load-bearing. Tests use bare `describe`, `it`, `expect` and `vi`.

# TypeScript

- Three tsconfigs with project references. `typecheck` is `tsc -b`, not `--noEmit`.
- Append to the `types` array in `tsconfig.app.json`. Never replace it. TypeScript 6.0 changed the default to `[]`, so both entries are load-bearing: `vite/client` types the Vite globals and `vitest/globals` types the bare `describe`, `it`, `expect` and `vi`.
- No `any` without a comment saying why.
- `erasableSyntaxOnly` is on. No enums, namespaces or parameter properties. A cell-state enum is the obvious thing to reach for and it will not compile.
