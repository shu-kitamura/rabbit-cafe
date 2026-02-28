# Repository Guidelines

## Project Structure & Module Organization
This repository is a small Astro 5 site. Keep route files in `src/pages/`, shared UI in `src/components/`, and page shells in `src/layouts/`. Store bundled images and SVGs in `src/assets/`; put static files that must keep their URL in `public/`. Design artifacts live in `docs/` (`docs/gui-design.pen`). Build output goes to `dist/`, and Astro-generated metadata is written to `.astro/`; both are ignored.

## Design Workflow
For UI changes, start by updating the design in Pencil and keep the source of truth in `docs/gui-design.pen`. Once the design direction is settled, implement it in the Astro codebase under `src/` so the build matches the latest Pencil document.

## Build, Test, and Development Commands
Use `pnpm` from the repository root.

- `pnpm dev`: start the Astro dev server on the default local port.
- `pnpm build`: produce the production bundle in `dist/`.
- `pnpm preview`: serve the built output locally for a final check.
- `pnpm lint`: run `oxlint` over the codebase.
- `pnpm lint:fix`: apply safe lint fixes.
- `pnpm fmt`: check formatting with `oxfmt`.
- `pnpm fmt:fix`: rewrite files to match the formatter.
- `pnpm astro check`: run Astro diagnostics when you need framework-level validation.

## Coding Style & Naming Conventions
Follow the existing code style: tabs for indentation in `.astro` files, ESM imports, and concise frontmatter blocks. Name reusable Astro components in PascalCase (`Welcome.astro`), layouts in PascalCase (`Layout.astro`), and page files by route (`index.astro`, `about.astro`). Keep asset names lowercase with hyphens when adding new static files. Run `pnpm lint` and `pnpm fmt:fix` before opening a PR.

## Testing Guidelines
There is no automated test framework or coverage gate configured yet. For now, treat `pnpm build`, `pnpm lint`, and `pnpm fmt` as the minimum verification set, then smoke-test the changed route with `pnpm dev` or `pnpm preview`. If you add a new testing tool, keep tests close to the feature they exercise and document the command in `package.json`.

## Commit & Pull Request Guidelines
Match the current history: short, imperative commit subjects such as `Add linter and formatter` or `Remove .vscode`. Keep each commit focused on one change. Pull requests should include a brief summary, the commands you ran to verify the change, and screenshots for any visible UI updates. Link the relevant issue or task when one exists.
