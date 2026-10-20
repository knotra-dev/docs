import type { DocsConfig } from '@/lib/opendocs/types/docs'

export const docsConfig: DocsConfig = {
  mainNav: [{ href: '/docs', title: { en: 'Guide' } }],
  sidebarNav: [
    {
      title: { en: 'Start here' },
      items: [
        { href: '/docs', title: { en: 'What is Knotra?' }, items: [] },
        {
          href: '/docs/getting-started',
          title: { en: 'First steps' },
          items: [],
        },
        {
          href: '/docs/guides/first-workflow',
          title: { en: 'Review an announcement' },
          items: [],
        },
      ],
    },
    {
      title: { en: 'Everyday use' },
      items: [
        { href: '/docs/engine', title: { en: 'How it works' }, items: [] },
        {
          href: '/docs/desktop',
          title: { en: 'Find your way around' },
          items: [],
        },
        {
          href: '/docs/cli',
          title: { en: 'Command line (CLI)' },
          items: [],
        },
        {
          href: '/docs/troubleshooting',
          title: { en: 'Common questions' },
          items: [],
        },
      ],
    },
    {
      title: { en: 'For developers' },
      items: [
        {
          href: '/docs/contributing',
          title: { en: 'Technical setup' },
          items: [],
        },
      ],
    },
  ],
}
