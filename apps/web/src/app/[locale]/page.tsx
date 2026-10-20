import { setRequestLocale } from 'next-intl/server'
import type { LocaleOptions } from '@/lib/opendocs/types/i18n'
import { WorkflowWalkthrough } from '@/components/docs/workflow-walkthrough'
import { buttonVariants } from '@/components/ui/button'
import { Link } from '@/navigation'

export default async function IndexPage(props: {
  params: Promise<{ locale: LocaleOptions }>
}) {
  const { locale } = await props.params
  setRequestLocale(locale)
  return (
    <div className="container mx-auto max-w-5xl py-10 sm:py-14">
      <h1 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
        See how a piece of work gets done.
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        Start with a brief. Let AI draft. Review the result. Keep the finished
        file.
      </p>
      <WorkflowWalkthrough />
      <nav
        aria-label="Keep exploring"
        className="mt-10 flex flex-wrap gap-3 border-t pt-8"
      >
        <Link className={buttonVariants()} href="/docs/desktop">
          Take a visual tour of the app
        </Link>
        <Link
          className={buttonVariants({ variant: 'outline' })}
          href="/docs/getting-started"
        >
          Try the Desktop demo
        </Link>
      </nav>
    </div>
  )
}
