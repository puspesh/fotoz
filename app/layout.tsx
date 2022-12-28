import { Inter as FotoSans } from "@next/font/google"

import "@/styles/globals.css"

import { cn } from "@/lib/utils"
import { Analytics } from "@/components/common/Analytics"

const inter = FotoSans({
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
      <body className="min-h-screen">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
