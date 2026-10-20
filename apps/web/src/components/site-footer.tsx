import { Link } from '@/navigation'
import { siteConfig } from '@/config/site'

export function SiteFooter() {
  return (
    <footer className="mt-8 border-t py-8 text-sm text-muted-foreground">
      <div className="container flex flex-wrap items-center justify-between gap-4">
        <span>Knotra guide</span>
        <nav aria-label="About this guide" className="flex gap-6">
          <Link className="hover:text-foreground" href="/docs/contributing">
            Technical setup
          </Link>
          <a
            className="hover:text-foreground"
            href={siteConfig.links.github.url}
          >
            Improve this guide
          </a>
        </nav>
      </div>
    </footer>
  )
}
