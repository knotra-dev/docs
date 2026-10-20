import { cn } from '@/lib/utils'

export const li = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => (
  <li className={cn('mt-3 pl-1', className)} {...props} />
)
