"use client"

import * as React from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SidebarMenuButton } from "@/components/ui/sidebar"
import { Typography } from "./ds"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <SidebarMenuButton size="sm">
        <Monitor className="h-[1.2rem] w-[1.2rem]" />
        <span>System</span>
      </SidebarMenuButton>
    )
  }

  const getThemeDisplay = () => {
    switch (theme) {
      case 'light':
        return { icon: Sun, label: 'Light' }
      case 'dark':
        return { icon: Moon, label: 'Dark' }
      default:
        return { icon: Monitor, label: 'System' }
    }
  }

  const { icon: Icon, label } = getThemeDisplay()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <SidebarMenuButton size="sm">
          <Icon className="h-[1.2rem] w-[1.2rem]" />
          <Typography
            as="p"
            variant="muted"
          >
            {label}
          </Typography>
        </SidebarMenuButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="mr-2 h-4 w-4" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="mr-2 h-4 w-4" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Monitor className="mr-2 h-4 w-4" />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
