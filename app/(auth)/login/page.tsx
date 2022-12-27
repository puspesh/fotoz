"use client"

import { useSearchParams } from "next/navigation"

import LoginForm from "@/app/(auth)/login/LoginForm"
import { CheckBadgeIcon } from "@heroicons/react/24/outline"

function Login() {
  const searchParams = useSearchParams()

  return (
    <>
      <div className="flex flex-1 justify-center">
        {searchParams.get("verifyRequest") ? (
          <div className="align-center mx-4 md:mx-0">
            <h1>
              Check your email{" "}
              <CheckBadgeIcon className="h-6 w-6" aria-hidden="true" />
            </h1>
            <p className="mx-3">
              A <b>sign in link</b> has been sent to your email address.
            </p>
          </div>
        ) : (
          <LoginForm />
        )}
      </div>
    </>
  )
}

export default Login
