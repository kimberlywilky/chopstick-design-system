<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/chopstick-logo-light.png">
  <source media="(prefers-color-scheme: light)" srcset="assets/chopstick-logo-dark.png">
  <img alt="Chopstick Design System" src="assets/chopstick-logo-dark.png" width="200">
</picture>

# Chopstick Design System

A personal, multi-brand design system built with Web Components using [Lit](https://lit.dev/). Designed to be lightweight and fully customizable for personal projects, side projects, and anything in between.

## Packages

| Package | Description |
|---|---|
| `@chopstick/tokens` | Design tokens powered by [Style Dictionary](https://amzn.github.io/style-dictionary/) |
| `@chopstick/components` | Web components built with [Lit](https://lit.dev/) |

## Getting Started

### Prerequisites

- Node.js >= 18
- pnpm >= 9

### Install
```bash
pnpm install
```

### Build
```bash
pnpm build
```

Tokens must be built first since components depend on them.

### Run Storybook
```bash
pnpm dev
```

## Tech Stack

- **Components:** Lit (Web Components)
- **Tokens:** Style Dictionary (DTCG format)
- **Build:** tsup
- **Monorepo:** pnpm workspaces
- **Documentation:** Storybook

## License

MIT