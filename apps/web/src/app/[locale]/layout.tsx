import { setRequestLocale } from 'next-intl/server'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

import { getObjectValueByLocale } from '@/lib/opendocs/utils/locale'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { locales } from '@/config/i18n'
import { siteConfig } from '@/config/site'
import { basePath } from '@/lib/utils'

export const dynamicParams = false

export function generateStaticParams() {
  return locales.map(locale => ({ locale }))
}

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await props.params

  if (!hasLocale(locales, locale)) notFound()

  setRequestLocale(locale)

  return {
    title: {
      default: siteConfig.name,
      template: `%s - ${siteConfig.name}`,
    },
    description: getObjectValueByLocale(siteConfig.description, locale),
    authors: [{ name: siteConfig.author.name, url: siteConfig.author.site }],
    creator: siteConfig.author.name,
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: siteConfig.url,
      title: siteConfig.name,
      siteName: siteConfig.name,
      description: getObjectValueByLocale(siteConfig.description, locale),
    },
    icons: { icon: `${basePath}/favicon.ico` },
    manifest: `${basePath}/manifest.webmanifest`,
  }
}

export default async function LocaleLayout(props: {
  params: Promise<{ locale: string }>
  children: React.ReactNode
}) {
  const { locale } = await props.params

  if (!hasLocale(locales, locale)) notFound()

  setRequestLocale(locale)

  return (
    <NextIntlClientProvider locale={locale} messages={{}}>
      <div className="relative flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">{props.children}</main>
        <SiteFooter />
      </div>
    </NextIntlClientProvider>
  )
}
