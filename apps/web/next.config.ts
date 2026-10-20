import { createContentlayerPlugin } from 'next-contentlayer2'
import createNextIntlPlugin from 'next-intl/plugin'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  agentRules: false,
  output: 'export',
  basePath:
    process.env.NEXT_PUBLIC_BASE_PATH ??
    (process.env.NODE_ENV === 'production' ? '/docs' : ''),
  trailingSlash: true,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH:
      process.env.NEXT_PUBLIC_BASE_PATH ??
      (process.env.NODE_ENV === 'production' ? '/docs' : ''),
    NEXT_PUBLIC_APP_URL:
      process.env.NEXT_PUBLIC_APP_URL ??
      (process.env.NODE_ENV === 'production'
        ? 'https://knotra-dev.github.io/docs'
        : 'http://localhost:3000'),
  },
  reactStrictMode: true,
  turbopack: {},
}

const withContentlayer = createContentlayerPlugin({})

const withNextIntl = createNextIntlPlugin()

export default withNextIntl(withContentlayer(nextConfig))
