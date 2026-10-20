import type { MetadataRoute } from 'next'

import { siteConfig } from '@/config/site'
import { basePath } from '@/lib/utils'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: 'Knotra',
    start_url: `${basePath}/en/`,
    scope: `${basePath}/`,
    theme_color: '#181423',
    display: 'standalone',
    icons: [
      {
        src: `${basePath}/favicon-32x32.png`,
        sizes: '32x32',
        type: 'image/png',
      },
    ],
  }
}
