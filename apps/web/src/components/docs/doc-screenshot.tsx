import Image from 'next/image'
import { ExternalLinkIcon } from '@radix-ui/react-icons'
import { basePath } from '@/lib/utils'

export function DocScreenshot({
  src,
  alt,
  caption,
  height = 940,
  width = 1440,
}: {
  src: string
  alt: string
  caption: string
  height?: number
  width?: number
}) {
  const path = `${basePath}${src}`

  return (
    <figure className="not-prose my-6" style={{ maxWidth: width }}>
      <a
        aria-label={`Open full-size screenshot: ${alt}`}
        className="group block overflow-hidden rounded-xl border"
        href={path}
        rel="noreferrer"
        target="_blank"
      >
        <Image
          alt={alt}
          className="h-auto w-full transition-opacity group-hover:opacity-90"
          height={height}
          src={path}
          width={width}
        />
      </a>
      <figcaption className="mt-3 flex items-start justify-between gap-4 text-sm text-muted-foreground">
        <span>{caption}</span>
        <a
          className="inline-flex shrink-0 items-center gap-1.5 underline underline-offset-4"
          href={path}
          rel="noreferrer"
          target="_blank"
        >
          Full size <ExternalLinkIcon aria-hidden="true" />
        </a>
      </figcaption>
    </figure>
  )
}
