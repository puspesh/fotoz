import Link from "next/link"

import { cn } from "@/lib/utils"
import { getSession } from "@/lib/session"
import { MainNavItem } from "@/types"
import Logo from "@/components/common/Logo"
import MobileNavMenu from "./MobileNavMenu"
import LogoutBtn from "./LogoutBtn"

interface HeaderProps {
  items?: MainNavItem[]
  children?: React.ReactNode
}

async function Header({ items, children }: HeaderProps) {
  const session = await getSession()

  return (
    <header className="container sticky top-0 z-40 bg-white">
      <div className="flex h-16 border-b items-center justify-between border-b-slate-200 py-4 px-6">
        <Logo />

        <div className="px-4" aria-label="Global">
          {items?.length ? (
            <nav className="hidden md:flex gap-6">
              {items?.map((item: MainNavItem, index) => (
                <Link
                  key={index}
                  href={item.disabled ? "#" : item.href}
                  className={cn(
                    "flex items-center text-lg font-semibold text-slate-600 sm:text-sm",
                    item.loginReqd &&
                      !session?.user &&
                      "cursor-not-allowed opacity-80",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          ) : null}

          <MobileNavMenu items={items} session={session} />
        </div>
        <nav
          className="hidden md:flex md:min-w-0 md:flex-1 md:justify-end md:gap-2"
          aria-label="Global"
        >
          {session?.user ? (
            <LogoutBtn user={session.user} />
          ) : (
            <Link
              href="/login"
              className="relative inline-flex h-8 items-center rounded-md border border-transparent bg-brand-500 px-6 py-1 text-sm font-medium text-white hover:bg-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
            >
              Login
            </Link>
          )}
        </nav>
      </div>
      {children}
    </header>
  )
}

export default Header
