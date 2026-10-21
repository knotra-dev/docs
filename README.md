# Knotra documentation

[Guides](https://knotra-dev.github.io/docs/) for the [Knotra engine](https://github.com/knotra-dev/engine)
and [desktop app](https://github.com/knotra-dev/desktop).

Start with the [interactive tour](https://knotra-dev.github.io/docs/en/docs/getting-started/),
[model sources](https://knotra-dev.github.io/docs/en/docs/guides/connect-models/),
and [block connections](https://knotra-dev.github.io/docs/en/docs/guides/block-connections/).
Separate guides cover [external MCP tools](https://knotra-dev.github.io/docs/en/docs/guides/mcp-tools/)
and [controlling the open app with MCP](https://knotra-dev.github.io/docs/en/docs/guides/control-knotra/).

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

General `.webp` screenshots in `apps/web/public/images/`, outside the `beginner-*`
and `guide-*` series, were captured at 1440 × 940
(1440 × 1100 for the Inbox), with focused Settings crops at 1000 × 747 for MCP
tools and 1000 × 755 for app control, from desktop commit
`8c1e037e8396d0cc9794d14757790893cfabaeaf` on October 21, 2026.
They show the real browser-rendered app and interactive tour in isolated workspaces.
Saved model sources, MCP tools and client configuration, engine status, runs,
review requests, and artifact contents use illustrative fixtures; no credentials,
personal workspace data, service requests, or model calls were used.

The ten `beginner-*` screenshots follow one fresh **My first pipeline**:
**Answer → Human**, a named Ollama source, local engine setup, a greeting run,
a string review response, and the completed run's `values.answer` output.
The pipeline was created through the interactive tour; its guide was closed before
each capture. The first image shows the newly created Answer block. They use the
same desktop commit and isolated browser fixtures; the example model catalog,
greeting, and engine responses are prewritten. No model call was made and this
lesson produces no artifact file. The initial view is 1440 × 940 and the reply view
is 1440 × 1000. Focused captures are 340 × 454 (instructions), 860 × 598 (Add node),
660 × 253 (connected blocks), 1000 × 562 (model source), 340 × 717 (block model),
1000 × 245 (local engine), 610 × 580 (run dialog), and 1218 × 410 (completed output).

The `guide-*` screenshots use the same desktop commit and isolated browser fixtures,
with the tour dismissed. Focused control captures show provider forms, saved-source
actions, the existing-engine form, MCP tools, agent permissions, and code environments.
The publication captures use the bundled `examples/starter/publication/pipeline.yaml`,
its original help-center brief, Approval **Yes**, and the feedback **Keep the
announcement concise.** The announcement, editor report, `publication.md`, and
`review-history.json` are prewritten examples displayed through the real app UI.
No account sign-in, credentials, external service requests, model calls, or external
publication were performed. These captures range from 320 to 1218 pixels wide and
171 to 997 pixels tall.

The older `.jpg` files show the historical guided demo from desktop commit
`70d68bda859e6afb4a5c1d0b862954ee4e2e6802`.
