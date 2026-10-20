import en from '@/i18n/locales/en.json'

export const siteConfig = {
  name: 'Knotra',
  description: { en: en.site.description },
  url: process.env.NEXT_PUBLIC_APP_URL,
  author: {
    name: 'Knotra contributors',
    site: 'https://github.com/knotra-dev',
  },
  links: {
    github: {
      label: 'GitHub',
      url: 'https://github.com/knotra-dev/docs',
    },
  },
} as const

export type SiteConfig = typeof siteConfig
