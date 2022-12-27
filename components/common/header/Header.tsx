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
    <>
      <Logo />

      <div className="px-6 pt-6 lg:px-8">
        <nav
          className="flex h-9 items-center justify-between"
          aria-label="Global"
        >
          <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Fotoz</span>
              <img
                className="h-8"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </div>

          {session?.user ? (
            <>
              <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end lg:gap-x-12 lg:px-4">
                {items?.map((item: MainNavItem, index) => (
                  <Link
                    key={index}
                    href={item.disabled ? "#" : item.href}
                    className={cn(
                      "flex items-center text-lg font-semibold text-slate-600 sm:text-sm",

                      item.disabled && "cursor-not-allowed opacity-80"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <LogoutBtn />
            </>
          ) : (
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
              <a
                href="/login"
                className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
              >
                Login
              </a>
            </div>
          )}

          <MobileNavMenu items={items} />

          {children}
        </nav>
      </div>
    </>
  )
}

export default Header
