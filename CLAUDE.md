# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A shareable ESLint flat config package (`eslint-config-agilepixel`) for Agile Pixel projects. It exports a single ESLint config array from `index.js` targeting ESLint 9+.

## Commands

```bash
# Install dependencies
npm install

# Run the linter (this IS the test — lints test.ts against the config itself)
npm test
# equivalent: eslint --config index.js test.ts
```

There is no build step. The package ships `index.js` directly.

## Architecture

- **`index.js`** — the exported config. An ESM array of flat config objects consumed by ESLint 9+. Extends `js.configs.recommended` and `unicorn.configs.recommended`, then adds a custom rule block, and appends `prettier` last to disable formatting rules.
- **`test.ts`** — sample TypeScript code used as the lint target to validate the config works.
- **`alert.ts`** — imported by `test.ts`; uses `sweetalert2` (the sole devDependency), which exercises the compat and import rules during testing.

## Key rule philosophy

- jQuery usage is heavily warned/errored to discourage it in favour of native APIs.
- Unicorn plugin is enabled with `recommended` plus explicit overrides — prefer modern JS idioms.
- `import/order` enforces grouped imports: builtin → external → parent → sibling → index with newlines between groups.
- `func-style: expression` — functions must be arrow/function expressions, not declarations.
- Prettier is appended last so its rules always win over formatting conflicts.

## Adding or changing rules

Edit the rules object in `index.js`, then run `npm test` to confirm the test file still lints cleanly (or intentionally violates the new rule to verify it fires).
