# eslint-config-agilepixel

Shareable ESLint flat config for Agile Pixel projects. Bundles and configures a curated set of plugins with opinionated rules for modern JavaScript and TypeScript development.

## Requirements

- Node.js `>=20.10.0`
- ESLint `^9.0.0`

## Installation

```bash
npm install --save-dev eslint-config-agilepixel
```

## Usage

In your `eslint.config.js`:

```js
import agilePixel from 'eslint-config-agilepixel';

export default [
  ...agilePixel,
  // your project-specific overrides
];
```

## What's included

The config extends `eslint:recommended` and `unicorn:recommended`, then applies rules from the following plugins:

| Plugin | Purpose |
|---|---|
| `@typescript-eslint/parser` | TypeScript syntax support |
| `eslint-plugin-compat` | Browser compatibility warnings |
| `eslint-plugin-import-x` | Import ordering and hygiene |
| `eslint-plugin-jquery` | Discourage jQuery in favour of native APIs |
| `eslint-plugin-react` | React best practices |
| `eslint-plugin-unicorn` | Modern JS idioms and code quality |
| `eslint-plugin-vue` | Vue.js support |
| `eslint-config-prettier` | Disables formatting rules that conflict with Prettier |

### Rule highlights

- **Functions**: arrow/function expressions only (`func-style: expression`), no declarations
- **Imports**: grouped and ordered (builtin → external → parent → sibling → index) with newlines between groups; no CommonJS, no AMD
- **jQuery**: heavily restricted — `.ajax()`, `.animate()`, `.hide()`, `.show()` and others are errors; use native equivalents
- **Style**: single quotes, 4-space indent, unix linebreaks, trailing commas on multiline
- **Unicorn**: enforces modern equivalents — `Array.at()`, `addEventListener`, `querySelector`, `String.startsWith/endsWith`, etc.
- **Prettier**: appended last, always wins on formatting conflicts
