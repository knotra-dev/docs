# Knotra documentation

Documentation and guides for the [Knotra engine](https://github.com/knotra-dev/engine)
and [desktop app](https://github.com/knotra-dev/desktop), built with
[OpenDocs](https://github.com/daltonmenezes/opendocs).

**Read the docs:** https://knotra-dev.github.io/docs/

## Develop locally

Use Node.js 24 and pnpm 11.25.0.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open http://localhost:3000/en/. No engine, database, or model provider is needed
for the documentation site. In the [development workspace](https://github.com/knotra-dev/dev),
use `make docs` and `make docs-check`.

## Write documentation

Edit MDX files in `apps/content/docs/en/`. Every page needs a `title` and
`description` in its YAML frontmatter. Add navigation entries to
`apps/web/src/config/docs.ts`. Link to another guide with `/docs/<slug>`;
the MDX link component adds the locale and deployment base path.

```mdx
---
title: Run a workflow
description: Validate a workflow and inspect its results.
---

## Validate the workflow

Describe the task and include commands verified against the engine.
```

The engine owns the API, schemas, and runtime reference material. Link to those
canonical files when appropriate; keep user guides here. Avoid publishing local
credentials, logs, or private workspace data.

## Check and build

```sh
pnpm lint
pnpm build
pnpm typecheck
pnpm test
```

The build exports static files to `apps/web/out/`. Tests check that all local
links and assets resolve under the GitHub Pages base path. `pnpm test` requires a
completed production build.

## Publish to GitHub Pages

`.github/workflows/pages.yml` checks pull requests and deploys `main` through
GitHub Actions. Repository **Settings → Pages → Source** must be **GitHub Actions**.
The site uses `/docs` as its production base path and always includes the English
locale (`/docs/en/`). The root page provides a static redirect.

Production defaults are in `apps/web/next.config.ts`. To use a custom domain or
another repository path, set both `NEXT_PUBLIC_APP_URL` and
`NEXT_PUBLIC_BASE_PATH` when building; see `.env.example`. No server or secret is
required. For a local production preview, serve `apps/web/out` mounted at `/docs/`.

## Screenshots

Guide screenshots show the bundled sample workspace and a completed guided demo
from desktop commit `70d68bda859e6afb4a5c1d0b862954ee4e2e6802`. They contain
prewritten sample data and no model calls. Refresh `apps/web/public/images/` when
the matching screens change.

## Template source and license

Based on OpenDocs commit `a4fc4d31a768a0f980314530ab1fafa13caf1fba`.
The original OpenDocs and shadcn MIT notices are preserved in [LICENSE.md](LICENSE.md).
