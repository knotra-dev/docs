import { setRequestLocale } from 'next-intl/server'

import { getServerDocsConfig } from '@/lib/opendocs/utils/get-server-docs-config'
import { DocsSidebarNav } from '@/components/docs/sidebar-nav'
import type { LocaleOptions } from '@/lib/opendocs/types/i18n'

export const dynamicParams = false

export default async function DocsLayout(props: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await props.params
  setRequestLocale(locale)
  const config = await getServerDocsConfig({ locale: locale as LocaleOptions })

  return (
    <div className="container items-start lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-12">
      <aside
        aria-label="Guide navigation"
        className="sticky top-16 hidden max-h-[calc(100dvh-4rem)] overflow-y-auto py-10 pr-4 lg:block"
      >
        <DocsSidebarNav
          items={config.docs.sidebarNav}
          locale={config.currentLocale}
        />
      </aside>
      {props.children}
    </div>
  )
}
