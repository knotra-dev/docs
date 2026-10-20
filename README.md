# Knotra documentation

[Guides](https://knotra-dev.github.io/docs/) for the [Knotra engine](https://github.com/knotra-dev/engine)
and [desktop app](https://github.com/knotra-dev/desktop).

## Develop

Install Bun 1.3.10, Node.js 24, and Make, then run:

```sh
make install
make dev
```

Open [localhost:3000/en/](http://localhost:3000/en/). The site needs no engine,
database, or model provider. In the [development workspace](https://github.com/knotra-dev/dev),
use `make docs` and `make docs-check`.

Run `make check` to lint, build, type-check, and test exported links and assets.
`make build` exports the site to `apps/web/out/`; `make help` lists all commands.

## Edit

Edit MDX files under `apps/content/docs/en/` with `title` and `description` frontmatter.
Update navigation in `apps/web/src/config/docs.ts`. Internal links use
`/docs/<slug>`; the site adds the locale and deployment base path.

Keep user guides here and link to the engine's canonical API, schemas, and runtime
references. See [Technical setup](https://knotra-dev.github.io/docs/en/docs/contributing/)
for workspace and product contribution instructions. Keep credentials and private
workspace data out of published pages.

## Deploy

[GitHub Actions](.github/workflows/pages.yml) checks pull requests and deploys
`main` to GitHub Pages. Set **Settings → Pages → Source** to **GitHub Actions**.
Production uses `/docs/en/`; set both variables in [.env.example](.env.example)
when using a custom domain or base path. No server or secret is needed.

## Sources and license

Based on [OpenDocs](https://github.com/daltonmenezes/opendocs) commit
`a4fc4d31a768a0f980314530ab1fafa13caf1fba`. Original OpenDocs and shadcn MIT
notices are preserved in [LICENSE.md](LICENSE.md).

Screenshots in `apps/web/public/images/` show the bundled sample workspace and
completed guided demo from desktop commit `70d68bda859e6afb4a5c1d0b862954ee4e2e6802`,
using prewritten sample data and no model calls. Refresh them when those screens change.
