import { setRequestLocale } from 'next-intl/server'

import {
  PageHeader,
  PageActions,
  PageHeaderHeading,
  PageHeaderDescription,
} from '@/components/page-header'
import type { LocaleOptions } from '@/lib/opendocs/types/i18n'
import { buttonVariants } from '@/components/ui/button'
import { Link } from '@/navigation'

export default async function IndexPage(props: {
  params: Promise<{ locale: LocaleOptions }>
}) {
  const { locale } = await props.params
  setRequestLocale(locale)

  return (
    <div className="container">
      <PageHeader className="max-w-5xl items-start gap-5 py-14 md:py-20 lg:py-20">
        <PageHeaderHeading className="max-w-3xl text-left text-4xl leading-[1.15] tracking-tight sm:text-5xl md:text-5xl lg:leading-[1.15] dark:bg-none dark:text-foreground">
          From a brief to a reviewed result.
        </PageHeaderHeading>
        <PageHeaderDescription className="max-w-2xl text-left leading-relaxed">
          Knotra helps you run repeatable processes with AI, checks, and human
          approval.
        </PageHeaderDescription>
        <PageActions className="justify-start flex-wrap gap-3 space-x-0 pb-0 md:pb-0">
          <Link className={buttonVariants()} href="/docs/getting-started">
            Explore the demo
          </Link>
          <Link
            className={buttonVariants({ variant: 'outline' })}
            href="/docs/guides/first-workflow"
          >
            See a real example
          </Link>
        </PageActions>
      </PageHeader>

      <section
        aria-labelledby="announcement-title"
        className="mx-auto max-w-5xl border-y py-10 md:py-12"
      >
        <h2
          className="text-2xl font-semibold tracking-tight"
          id="announcement-title"
        >
          An announcement, step by step
        </h2>
        <p className="text-muted-foreground mt-3 max-w-2xl leading-relaxed">
          Your team has something to share. Start with the facts, let Knotra
          prepare a draft, and review it before using the final file.
        </p>
        <ol className="mt-8 grid list-decimal gap-x-10 gap-y-6 pl-5 sm:grid-cols-2 lg:grid-cols-4">
          <li className="pl-1">
            <h3 className="font-semibold">Brief</h3>
            <p className="text-muted-foreground mt-2 leading-relaxed">
              Describe what you are announcing and who needs to hear it.
            </p>
          </li>
          <li className="pl-1">
            <h3 className="font-semibold">Draft</h3>
            <p className="text-muted-foreground mt-2 leading-relaxed">
              Knotra uses your brief to prepare an announcement for review.
            </p>
          </li>
          <li className="pl-1">
            <h3 className="font-semibold">Review</h3>
            <p className="text-muted-foreground mt-2 leading-relaxed">
              Read the draft and approve it before the process continues.
            </p>
          </li>
          <li className="pl-1">
            <h3 className="font-semibold">Final file</h3>
            <p className="text-muted-foreground mt-2 leading-relaxed">
              Download the approved announcement when you are ready to share it.
            </p>
          </li>
        </ol>
      </section>

      <section
        aria-labelledby="start-here-title"
        className="mx-auto max-w-5xl py-12 md:py-16"
      >
        <h2
          className="mb-6 text-2xl font-semibold tracking-tight"
          id="start-here-title"
        >
          Start here
        </h2>
        <ul className="divide-y border-y">
          <li>
            <Link
              className="group grid gap-2 py-6 focus-visible:outline-2 focus-visible:outline-offset-4 sm:grid-cols-[minmax(0,16rem)_1fr] sm:gap-8"
              href="/docs"
            >
              <h3 className="font-semibold underline decoration-border underline-offset-4 group-hover:decoration-current">
                Understand Knotra
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Learn what Knotra does, what you decide, and where it can help.
              </p>
            </Link>
          </li>
          <li>
            <Link
              className="group grid gap-2 py-6 focus-visible:outline-2 focus-visible:outline-offset-4 sm:grid-cols-[minmax(0,16rem)_1fr] sm:gap-8"
              href="/docs/desktop"
            >
              <h3 className="font-semibold underline decoration-border underline-offset-4 group-hover:decoration-current">
                Find your way around
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Get to know the workspace and where to start work and review
                results.
              </p>
            </Link>
          </li>
          <li>
            <Link
              className="group grid gap-2 py-6 focus-visible:outline-2 focus-visible:outline-offset-4 sm:grid-cols-[minmax(0,16rem)_1fr] sm:gap-8"
              href="/docs/guides/first-workflow"
            >
              <h3 className="font-semibold underline decoration-border underline-offset-4 group-hover:decoration-current">
                Review an announcement
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Follow the example from a short brief to an approved file.
              </p>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  )
}
