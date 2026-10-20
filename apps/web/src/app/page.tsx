import type { Metadata } from 'next'

import { basePath } from '@/lib/utils'

export const metadata: Metadata = { title: 'Knotra documentation' }

export default function IndexPage() {
  const href = `${basePath}/en/`

  return (
    <>
      <meta content={`0;url=${href}`} httpEquiv="refresh" />
      <main className="container py-12">
        <h1 className="text-3xl font-bold">Knotra documentation</h1>
        <a className="mt-4 inline-block underline" href={href}>
          Open the documentation
        </a>
      </main>
    </>
  )
}
