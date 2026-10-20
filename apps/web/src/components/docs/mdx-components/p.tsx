import { cn } from '@/lib/utils'

export const p = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p
    className={cn('text-[17px] leading-8 not-first:mt-4', className)}
    {...props}
  />
)
