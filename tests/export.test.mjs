import assert from 'node:assert/strict'
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import test from 'node:test'

const output = new URL('../apps/web/out/', import.meta.url)
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '/docs'
const origin = 'https://knotra-dev.github.io'

test('exports every guide and a static site entry', () => {
  for (const slug of ['', 'getting-started', 'engine', 'desktop', 'cli', 'guides/first-workflow', 'contributing', 'troubleshooting']) {
    const html = readFileSync(new URL(`en/docs/${slug ? `${slug}/` : ''}index.html`, output), 'utf8')
    assert.match(html, /<h1[ >]/, `Missing heading for ${slug || 'introduction'}`)
    assert.doesNotMatch(html, /Document not found/)
    if (!['contributing', 'cli'].includes(slug)) {
      assert.doesNotMatch(html, /<pre[ >]/, 'Keep terminal commands in Technical setup and the CLI guide')
    }
  }
  const entry = readFileSync(new URL('index.html', output), 'utf8')
  assert.ok(entry.includes(`${basePath}/en/`), 'Root entry must target the exported English landing page')
})

test('all exported links and assets resolve beneath the deployment path', () => {
  const pages = readdirSync(output, { recursive: true }).filter(name => name.endsWith('.html'))
  assert.ok(pages.length >= 9)
  for (const page of pages) {
    const html = readFileSync(new URL(page, output), 'utf8')
    const current = new URL(`${basePath}/${page.replace(/index\.html$/, '')}`, origin)
    for (const [, reference] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
      if (/^(?:https?:|mailto:|tel:|data:|#)/.test(reference)) continue
      const target = new URL(reference.replaceAll('&amp;', '&'), current)
      assert.ok(target.pathname.startsWith(`${basePath}/`), `${page}: escapes base path: ${reference}`)
      const relative = decodeURIComponent(target.pathname.slice(basePath.length + 1))
      const file = new URL(relative, output)
      assert.ok((existsSync(file) && statSync(file).isFile()) || existsSync(join(file.pathname, 'index.html')), `${page}: missing ${reference}`)
      if (target.hash && !relative.startsWith('_next/')) {
        const destination = readFileSync(new URL(relative.endsWith('/') ? `${relative}index.html` : relative.endsWith('.html') ? relative : `${relative}/index.html`, output), 'utf8')
        const id = decodeURIComponent(target.hash.slice(1))
        assert.ok(destination.includes(`id="${id}"`), `${page}: missing anchor ${reference}`)
      }
    }
    assert.doesNotMatch(html, /_next\/image\?/, 'Image optimization requires a server')
  }
})
