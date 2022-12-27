"use client";

import React from "react";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { useMutation } from "react-query";

function LoginForm() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const { mutate: login, isLoading } = useMutation(
    "login",
    () =>
      signIn("email", { email, redirect: false, callbackUrl: "/dashboard" }),
    {
      onSuccess: () => {
        router.push("/login?verifyRequest=1");
      },
    }
  );

  return (
    <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <div className="overflow-hidden rounded-lg bg-white text-left shadow-md sm:my-8 sm:w-full sm:max-w-lg px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              if (email) login();
            }}
            className="px-4 py-2"
            action="#"
            method="POST"
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm">
              <label
                htmlFor="email-address"
                className="block text-sm font-medium text-gray-700 text-left"
              >
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                className="relative mt-2 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              {isLoading ? (
                <button
                  disabled
                  type="button"
                  className="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
                >
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
                  Signing in ...
                </button>
              ) : (
                <button
                  type="submit"
                  className="group relative mt-4 flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <LockClosedIcon
                      className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                      aria-hidden="true"
                    />
                  </span>
                  Send Magic Link
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
