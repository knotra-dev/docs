'use client'

import { useEffect, useId, useState } from 'react'
import { useTheme } from 'next-themes'
import { useMediaQuery } from '@/lib/opendocs/hooks/use-media-query'

export function MermaidDiagram({
  title,
  chart,
}: {
  title: string
  chart: string
}) {
  const id = `diagram-${useId().replace(/[^a-zA-Z0-9-]/g, '')}`
  const { resolvedTheme } = useTheme()
  const compact = useMediaQuery('(max-width:1023px)')
  const [svg, setSvg] = useState('')
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    let cancelled = false
    setFailed(false)

    async function render() {
      try {
        const { default: mermaid } = await import('mermaid')
        await document.fonts.ready

        if (cancelled) return

        mermaid.initialize({
          startOnLoad: false,
          securityLevel: 'strict',
          suppressErrorRendering: true,
          fontFamily: 'Geist, sans-serif',
          flowchart: {
            htmlLabels: false,
            useMaxWidth: false,
            curve: 'basis',
            padding: 16,
            nodeSpacing: 28,
            rankSpacing: 40,
            wrappingWidth: 160,
          },
        })

        const dark = resolvedTheme === 'dark'
        const config = {
          theme: 'base',
          look: 'classic',
          themeVariables: {
            fontFamily: 'Geist, sans-serif',
            fontSize: '15px',
            primaryColor: dark ? '#172b24' : '#edf5f0',
            primaryTextColor: dark ? '#e3f2e9' : '#244636',
            primaryBorderColor: dark ? '#4a7562' : '#9cb9a8',
            lineColor: dark ? '#92b4a2' : '#678575',
            secondaryColor: dark ? '#27251c' : '#faf4e5',
            tertiaryColor: dark ? '#20252d' : '#f1f3f5',
            edgeLabelBackground: dark ? '#15191c' : '#fcfcfa',
          },
          themeCSS:
            '.node rect { rx: 10; ry: 10; } .node * { filter: none; } .edgePath path { stroke-width: 1.5px; }',
        }
        const layout = compact
          ? chart.replace(/^flowchart LR/, 'flowchart TB')
          : chart
        const definition = layout.replace('\n', `\naccTitle: ${title}\n`)
        const result = await mermaid.render(
          id,
          `---\nconfig: ${JSON.stringify(config)}\n---\n${definition}`
        )

        if (!cancelled) setSvg(result.svg)
      } catch {
        if (!cancelled) setFailed(true)
      }
    }

    void render()

    return () => {
      cancelled = true
    }
  }, [chart, compact, id, resolvedTheme, title])

  return (
    <figure className="not-prose my-8" data-diagram={title}>
      <figcaption className="mb-4 text-base font-medium">{title}</figcaption>
      <section
        aria-label={title}
        className="overflow-x-auto py-4 [&_svg]:mx-auto [&_svg]:h-auto [&_svg]:max-w-none"
        // biome-ignore lint/a11y/noNoninteractiveTabindex: Keyboard users need to scroll wide diagrams.
        tabIndex={0}
      >
        {svg && !failed ? (
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Mermaid renders our checked-in diagrams with strict sanitization.
          <div dangerouslySetInnerHTML={{ __html: svg }} />
        ) : (
          <output className="block py-8 text-sm text-muted-foreground">
            {failed
              ? 'Could not load this diagram. Reload the page to try again.'
              : 'Loading diagram…'}
          </output>
        )}
      </section>
    </figure>
  )
}
