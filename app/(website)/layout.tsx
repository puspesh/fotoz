import React from "react"
import Header from "@/components/common/header/Header"
import Footer from "@/components/common/Footer"
import websiteNavConfig from "@/config/websiteNav.json"

interface WebsiteLayoutProps {
  children: React.ReactNode
}

async function WebsiteLayout({ children }: WebsiteLayoutProps) {
  return (
    <div className="flex flex-col isolate min-h-screen">
      {/* @ts-expect-error Server Component */}
      <Header items={websiteNavConfig.mainNav} />

      <main className="container flex-1 items-center justify-center text-center">
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default WebsiteLayout
