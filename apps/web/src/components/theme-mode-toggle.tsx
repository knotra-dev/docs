'use client'

import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from './ui/dropdown-menu'

interface ThemeModeToggleProps {
  messages: { dark: string; light: string; system: string }
}

export function ThemeModeToggle({ messages }: ThemeModeToggleProps) {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="size-10 shrink-0" size="icon" variant="ghost">
          <SunIcon className="size-5 dark:hidden" />
          <MoonIcon className="hidden size-5 dark:block" />
          <span className="sr-only">Change appearance</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {['light', 'dark', 'system'].map(value => (
          <DropdownMenuItem
            disabled={theme === value}
            key={value}
            onSelect={() => setTheme(value)}
          >
            {messages[value as keyof typeof messages]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
