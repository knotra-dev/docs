# Knotra documentation

[Documentation](https://knotra-dev.github.io/docs/) for the [Knotra engine](https://github.com/knotra-dev/engine)
and [desktop app](https://github.com/knotra-dev/desktop).

## Local development

Requires Bun 1.3.10, Node.js 24, and Make.

```sh
make install
make dev
```

Open [localhost:3000/en/](http://localhost:3000/en/).

Run `make check` before submitting changes. `make build` exports the site to
`apps/web/out/`.

## Editing

Pages live in `apps/content/docs/en/` as MDX files with `title` and `description`
frontmatter. Navigation is defined in `apps/web/src/config/docs.ts`.
Internal links use `/docs/<slug>`; the site adds the locale and deployment base path.

## Deployment

[GitHub Actions](.github/workflows/pages.yml) deploys `main` to GitHub Pages.
For a custom domain or base path, update both variables in [.env.example](.env.example).

## License

Based on [OpenDocs](https://github.com/daltonmenezes/opendocs) commit
`a4fc4d31a768a0f980314530ab1fafa13caf1fba`.
See [LICENSE.md](LICENSE.md) for the MIT license and OpenDocs and shadcn notices.
