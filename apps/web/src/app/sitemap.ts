import { allDocs } from 'contentlayer/generated'
import type { MetadataRoute } from 'next'

import { locales } from '@/config/i18n'
import { absoluteUrl } from '@/lib/utils'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...locales.map(locale => ({ url: absoluteUrl(`/${locale}/`) })),
    ...allDocs.map(doc => {
      const [locale, ...slug] = doc.slugAsParams.split('/')

      return { url: absoluteUrl(`/${[locale, 'docs', ...slug].join('/')}/`) }
    }),
  ]
}
