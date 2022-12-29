"use client"

import { useState } from "react"
import { useMutation } from "react-query"

import Link from "next/link"
import { LockClosedIcon } from "@heroicons/react/20/solid"
import { signIn } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation"
import { CheckBadgeIcon } from "@heroicons/react/24/outline"

interface LoginFormProps {
  isRegisterReq?: boolean
  children?: React.ReactNode
}

function LoginForm({ isRegisterReq = false, children }: LoginFormProps) {
  const [email, setEmail] = useState("")
  const router = useRouter()
  const searchParams = useSearchParams()

  const { mutate: login, isLoading } = useMutation(
    "login",
    () =>
      signIn("email", { email, redirect: false, callbackUrl: "/dashboard" }),
    {
      onSuccess: () => {
        const redirUrl = isRegisterReq ? "/register?" : "/login?"
        router.push(redirUrl + "verifyRequest=1")
      },
      onError: () => {
        // show toast with error
      },
    }
  )

  return (
    <>
      {searchParams.get("verifyRequest") ? (
        <div className="flex flex-col space-y-4 text-center">
          <div className="flex justify-center gap-1">
            <h1 className="text-xl">Check your email</h1>
            <CheckBadgeIcon
              className="h-6 w-6 text-green-600"
              aria-hidden="true"
            />
          </div>
          <p className="flex-1">
            A <b>Sign {isRegisterReq ? "up" : "in"} link</b> has been sent to
            your email address.
          </p>
        </div>
      ) : (
        <>
          <div className="flex flex-col space-y-2 text-center">
            <img
              className="h-8"
              src="https://tailwindui.com/img/logos/mark.svg?color=black&shade=600"
              alt=""
            />

            <h2 className="font-bold text-xl text-slate-900">
              {isRegisterReq ? "Register " : "Sign in to "} your account
            </h2>
          </div>
          <form
            onSubmit={async (e) => {
              e.preventDefault()
              if (email) login()
            }}
            action="#"
            method="POST"
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="grid gap-1">
              <label
                htmlFor="email-address"
                className="text-sm text-slate-600 text-center"
              ></label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                disabled={isLoading}
                onChange={(e) => setEmail(e.currentTarget.value)}
                className="relative mt-2 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 text-sm"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="group relative mt-4 flex w-full justify-center rounded-md border border-transparent bg-brand-700 py-2 px-4 text-sm font-medium text-white hover:bg-brand-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                {isLoading ? (
                  <>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        role="status"
                        className="inline mr-3 w-4 h-4 text-white animate-spin"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="#E5E7EB"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    Signing in ...
                  </>
                ) : (
                  <>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <LockClosedIcon
                        className="h-5 w-5 text-white group-hover:text-brand-100"
                        aria-hidden="true"
                      />
                    </span>
                    Send Magic Link
                  </>
                )}
              </button>
            </div>
          </form>
          {isRegisterReq ? null : (
            <p className="px-8 text-center text-sm text-slate-600">
              <Link href="/register" className="underline hover:text-brand">
                Don&apos;t have an account? Sign Up
              </Link>
            </p>
          )}
        </>
      )}
    </>
  )
}

export default LoginForm
