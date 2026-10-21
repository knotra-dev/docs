import { cn } from '@/lib/utils'
import { Link } from '@/navigation'

export const a = ({
  className,
  href,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const classes = cn('font-medium underline underline-offset-4', className)

  return href?.startsWith('/') ? (
    <Link className={classes} href={href} {...props} />
  ) : (
    <a className={classes} href={href} {...props} />
  )
}
