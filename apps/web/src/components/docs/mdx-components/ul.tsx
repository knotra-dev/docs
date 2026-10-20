import { cn } from '@/lib/utils'

export const ul = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLUListElement>) => (
  <ul
    className={cn('my-5 ml-6 list-disc text-[17px] leading-8', className)}
    {...props}
  />
)
