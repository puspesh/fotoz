"use client"
import React from "react"
import { signOut } from "next-auth/react"

function LogoutBtn() {
  return (
    <>
      <div className="hidden lg:flex lg:justify-end">
        <button
          onClick={async (e) => {
            e.preventDefault()
            signOut()
          }}
          className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
        >
          Logout
        </button>
      </div>
    </>
  )
}

export default LogoutBtn
