import React from "react"
import Header from "@/components/common/header/Header"
import Footer from "@/components/common/Footer"
import websiteNavConfig from "@/config/websiteNav.json"

interface WebsiteLayoutProps {
  children: React.ReactNode
}

async function WebsiteLayout({ children }: WebsiteLayoutProps) {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <Header items={websiteNavConfig.mainNav} />

      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
          {children}
        </main>
      </div>

      <Footer />
    </>
  )
}

export default WebsiteLayout
