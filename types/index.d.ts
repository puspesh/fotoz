import { User } from "@prisma/client"

export type NavItem = {
  name: string
  href: string
  disabled?: boolean
  loginReqd?: boolean
}

export type MainNavItem = NavItem

export type SidebarNavItem = {
  name: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
} & (
  | {
      href: string
      items?: never
    }
  | {
      href?: string
      items: NavLink[]
    }
)

export type SiteConfig = {
  name: string
  links: {
    twitter: string
    github: string
  }
}
