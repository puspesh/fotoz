"use client"

import React from "react"
import { signOut } from "next-auth/react"
import { User } from "next-auth"

interface LogoutBtnProps {
  user?: User
  children?: React.ReactNode
}

function formatUserName(user: User) {
  if (user) {
    return user.name ? user.name : user.email.match(/^([^@]*)@/)[1]
  }
  return ""
}

function LogoutBtn({ user, children }: LogoutBtnProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-2 items-start md:items-center">
      {user ? (
        <p className="text-base md:text-sm">Welcome {formatUserName(user)}</p>
      ) : null}
      <button
        onClick={async (e) => {
          e.preventDefault()
          signOut()
        }}
        className="relative inline-flex h-8 items-center rounded-md border border-brand-700 bg-white px-6 py-1 text-sm font-medium text-brand-400 hover:text-brand-700 hover:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2"
      >
        Logout
      </button>
      {children}
    </div>
  )
}

export default LogoutBtn
