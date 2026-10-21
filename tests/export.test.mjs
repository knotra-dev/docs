import assert from 'node:assert/strict'
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import test from 'node:test'

const output = new URL('../apps/web/out/', import.meta.url)
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '/docs'
const origin = 'https://knotra-dev.github.io'

test('exports every guide and a static site entry', () => {
  for (const slug of ['', 'getting-started', 'engine', 'desktop', 'cli', 'guides/connect-models', 'guides/block-connections', 'guides/mcp-tools', 'guides/control-knotra', 'guides/first-workflow', 'contributing', 'troubleshooting']) {
    const html = readFileSync(new URL(`en/docs/${slug ? `${slug}/` : ''}index.html`, output), 'utf8')
    assert.match(html, /<h1[ >]/, `Missing heading for ${slug || 'introduction'}`)
    assert.doesNotMatch(html, /Document not found/)
    if (!['contributing', 'cli', 'guides/connect-models'].includes(slug)) {
      assert.doesNotMatch(html, /<pre[ >]/, 'Keep terminal commands in setup and CLI guides')
    }
  }
  const entry = readFileSync(new URL('index.html', output), 'utf8')
  assert.ok(entry.includes(`${basePath}/en/`), 'Root entry must target the exported English landing page')
})

test('all exported links and assets resolve beneath the deployment path', () => {
  const pages = readdirSync(output, { recursive: true }).filter(name => name.endsWith('.html'))
  assert.ok(pages.length >= 12)
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

test('visual guides include current screenshots and hide advanced setup', () => {
  for (const name of ['pipeline-editor', 'interactive-tour', 'model-sources', 'block-model', 'block-connections', 'runs', 'inbox', 'artifacts', 'mcp-tools', 'control-knotra']) {
    assert.ok(existsSync(new URL(`images/${name}.webp`, output)), `Missing current screenshot: ${name}`)
  }
  const home = readFileSync(new URL('en/index.html', output), 'utf8')
  assert.ok(home.includes(`${basePath}/images/pipeline-editor.webp`))
  assert.doesNotMatch(home, /Diagram text/)
  const models = readFileSync(new URL('en/docs/guides/connect-models/index.html', output), 'utf8')
  assert.ok(models.includes(`${basePath}/images/guide-provider-picker.webp`))
  const engine = readFileSync(new URL('en/docs/engine/index.html', output), 'utf8')
  assert.match(engine, /data-diagram="Who does what"/)
  assert.match(models, /<details><summary>Manual setup: separate engine/)
  assert.doesNotMatch(models, /<details open/)
})

test('first steps teaches one small pipeline in a visible numbered sequence', () => {
  const html = readFileSync(new URL('en/docs/getting-started/index.html', output), 'utf8')
  const steps = ['create', 'instructions', 'add-review', 'connect', 'source', 'model', 'engine', 'run', 'reply', 'result']
  let previous = -1
  for (const [index, name] of steps.entries()) {
    const image = `${basePath}/images/beginner-${String(index + 1).padStart(2, '0')}-${name}.webp`
    const position = html.indexOf(`src="${image}"`)
    assert.ok(position > previous, `Step ${index + 1} must show its screenshot in order`)
    previous = position
  }
  assert.doesNotMatch(html, /role="tablist"|Research brief|\/images\/(?:pipeline-editor|block-model|inbox|interactive-tour)\.webp/)
  assert.match(html, /Workflow values \(JSON\)/)
  assert.match(html, /Your answer/)
  assert.match(html, /values → answer/)
})
