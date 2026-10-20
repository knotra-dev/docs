import { cn } from '@/lib/utils'

export const h2 = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h2
    className={cn(
      'mt-10 mb-3 scroll-m-24 text-2xl font-semibold tracking-tight first:mt-0',
      className
    )}
    {...props}
  />
)
