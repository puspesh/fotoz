import "@/styles/globals.css"

import { cn } from "@/lib/utils"
import { Inter } from "@next/font/google"
import { Analytics } from "@/components/common/Analytics"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cn(
        "bg-white",
        inter.className,
        "text-slate-900 antialiased",
        inter.variable
      )}
    >
      <head />
      <body className="min-h-screen isolate">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
