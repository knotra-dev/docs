import { cn } from '@/lib/utils'

export const ol = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLOListElement>) => (
  <ol
    className={cn('my-5 ml-6 list-decimal text-[17px] leading-8', className)}
    {...props}
  />
)
