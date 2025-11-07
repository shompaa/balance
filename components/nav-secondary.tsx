import * as React from "react"
import { type LucideIcon } from "lucide-react"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"

export function NavSecondary({
  items,
  children,
  ...props
}: {
  items: {
    title: string
    url: string
    icon: LucideIcon
    onClick?: () => void
    variant?: "link" | "button"
  }[]
  children?: React.ReactNode
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild size="sm">
                {(item.variant ?? "link") === "link" ? (
                  <Link href={item.url} onClick={item.onClick}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                ) : (
                  <button onClick={item.onClick}>
                    <item.icon />
                    <span>{item.title}</span>
                  </button>
                )}
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
          {children}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
