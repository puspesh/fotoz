import React from "react"
import Link from "next/link"

import LoginForm from "../LoginForm"
import { ArrowLeftIcon } from "@heroicons/react/24/outline"

function RegisterPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link
        href="/"
        className="absolute top-4 left-4 inline-flex items-center justify-center rounded-lg border border-transparent bg-transparent py-2 px-3 text-center text-sm  font-medium text-slate-900 hover:border-slate-200 hover:bg-slate-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-slate-200 md:top-8 md:left-8"
      >
        <>
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Back
        </>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center px-4 space-y-4 sm:w-[400px]">
        <LoginForm isRegisterReq />
      </div>
    </div>
  )
}

export default RegisterPage
