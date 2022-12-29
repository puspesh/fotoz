"use client"

import React from "react"
import { QueryClient, QueryClientProvider } from "react-query"

function LoginLayout({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      {children}
    </QueryClientProvider>
  )
}

export default LoginLayout
