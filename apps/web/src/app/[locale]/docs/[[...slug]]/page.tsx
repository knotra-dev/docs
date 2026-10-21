import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { LocaleOptions } from '@/lib/opendocs/types/i18n'
import type { Metadata } from 'next'

import '@/styles/mdx.css'

import { DashboardTableOfContents } from '@/components/docs/toc'
import { DocumentNotFound } from '@/components/docs/not-found'
import { getTableOfContents } from '@/lib/opendocs/utils/toc'
import type { DocPageProps } from '@/lib/opendocs/types/docs'
import { DocBreadcrumb } from '@/components/docs/breadcrumb'
import { getDocFromParams } from '@/lib/opendocs/utils/doc'
import { ScrollArea } from '@/components/ui/scroll-area'
import { DocHeading } from '@/components/docs/heading'
import { DocsPager } from '@/components/docs/pager'
import { DocLinks } from '@/components/docs/links'
import { allDocs } from 'contentlayer/generated'
import { defaultLocale, locales } from '@/config/i18n'
import { Mdx } from '@/components/docs/mdx'
import { absoluteUrl, cn } from '@/lib/utils'

export const dynamicParams = false

export async function generateMetadata(props: {
  params: Promise<DocPageProps['params']>
}): Promise<Metadata> {
  const params = await props.params
  const locale = params.locale

  setRequestLocale(locale || defaultLocale)

  const doc = await getDocFromParams({ params })

  if (!doc) {
    return {}
  }

  const [, ...docSlugList] = doc.slugAsParams.split('/')

  return {
    title: doc.title,
    description: doc.description,

    openGraph: {
      type: 'article',
      title: doc.title,
      url: absoluteUrl(`/${[locale, 'docs', ...docSlugList].join('/')}/`),
      description: doc.description,
    },
  }
}

export async function generateStaticParams(): Promise<
  DocPageProps['params'][]
> {
  const docs = allDocs
    .filter(doc =>
      locales.includes(doc.slugAsParams.split('/')[0] as LocaleOptions)
    )
    .map(doc => {
      const [locale, ...slugs] = doc.slugAsParams.split('/')

      return {
        slug: slugs,
        locale: locale as LocaleOptions,
      }
    })

  return docs
}

export default async function DocPage(props: {
  params: Promise<DocPageProps['params']>
}) {
  const params = await props.params

  setRequestLocale(params.locale || defaultLocale)

  const doc = await getDocFromParams({ params })
  const t = await getTranslations('docs')

  if (!doc) {
    return (
      <DocumentNotFound
        messages={{
          title: t('not_found.title'),
          description: t('not_found.description'),
        }}
      />
    )
  }

  const toc = await getTableOfContents(doc.body.raw)

  return (
    <article
      className={cn(
        'relative min-w-0 py-8 lg:gap-12 lg:py-12',
        doc.toc && 'xl:grid xl:grid-cols-[minmax(0,1fr)_200px]'
      )}
    >
      <div
        className={cn(
          'mx-auto w-full min-w-0',
          doc.toc ? 'max-w-[70ch]' : 'max-w-4xl'
        )}
      >
        <DocBreadcrumb
          doc={doc}
          messages={{
            docs: t('docs'),
          }}
        />

        <DocHeading doc={doc} locale={params.locale} />
        <DocLinks doc={doc} />

        <div className="pb-12 pt-8">
          <Mdx code={doc.body.code} />
        </div>

        <DocsPager doc={doc} locale={params.locale} />
      </div>

      {doc.toc && (
        <div className="hidden text-sm xl:block">
          <div className="sticky top-16 -mt-10 pt-4">
            <ScrollArea className="pb-10">
              <div className="sticky top-16 -mt-10 h-fit py-12">
                <DashboardTableOfContents
                  messages={{
                    onThisPage: t('on_this_page'),
                    editPageOnGitHub: t('edit_page_on_github'),
                    startDiscussionOnGitHub: t('start_discussion_on_github'),
                  }}
                  sourceFilePath={doc._raw.sourceFilePath}
                  toc={toc}
                />
              </div>
            </ScrollArea>
          </div>
        </div>
      )}
    </article>
  )
}
