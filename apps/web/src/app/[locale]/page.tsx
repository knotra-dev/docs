import { setRequestLocale } from 'next-intl/server'
import type { LocaleOptions } from '@/lib/opendocs/types/i18n'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import { DocScreenshot } from '@/components/docs/doc-screenshot'
import { buttonVariants } from '@/components/ui/button'
import { Link } from '@/navigation'

export default async function IndexPage(props: {
  params: Promise<{ locale: LocaleOptions }>
}) {
  const { locale } = await props.params
  setRequestLocale(locale)
  return (
    <div className="container mx-auto max-w-6xl py-10 sm:py-14">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <h1 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
            Your first pipeline, in pictures.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Connect blocks. Choose a model. Review the result.
          </p>
        </div>
        <Link className={buttonVariants()} href="/docs/getting-started">
          Follow the visual guide
          <ArrowRightIcon aria-hidden="true" className="ml-2 size-4" />
        </Link>
      </div>
      <DocScreenshot
        alt="Knotra pipeline editor with a model block connected to a human review"
        caption="The pipeline editor · sample research workflow"
        src="/images/pipeline-editor.webp"
      />
      <nav
        aria-label="Visual guides"
        className="mt-10 grid gap-0 border-y sm:grid-cols-3"
      >
        <Link
          className="flex items-center justify-between gap-4 py-6 font-medium hover:text-primary-active sm:pr-6"
          href="/docs/desktop"
        >
          Find a screen <ArrowRightIcon aria-hidden="true" />
        </Link>
        <Link
          className="flex items-center justify-between gap-4 border-t py-6 font-medium hover:text-primary-active sm:border-t-0 sm:px-6"
          href="/docs/guides/connect-models"
        >
          Connect a model <ArrowRightIcon aria-hidden="true" />
        </Link>
        <Link
          className="flex items-center justify-between gap-4 border-t py-6 font-medium hover:text-primary-active sm:border-t-0 sm:pl-6"
          href="/docs/guides/mcp-tools"
        >
          Add tools <ArrowRightIcon aria-hidden="true" />
        </Link>
      </nav>
    </div>
  )
}
