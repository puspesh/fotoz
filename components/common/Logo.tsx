import React from "react"
import Link from "next/link"
import LiquidGradient from "./LiquidGradient"

function Logo() {
  return (
    <>
      <div className="items-center space-x-2">
        <div className="flex min-w-0 flex-1" aria-label="Global">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Fotoz</span>
            <img
              className="h-8"
              src="https://tailwindui.com/img/logos/mark.svg?color=black&shade=600"
              alt=""
            />
          </Link>
        </div>

        <LiquidGradient />
      </div>
    </>
  )
}

export default Logo
