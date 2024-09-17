import type { Metadata } from "next"
import "./globals.css"
import Nav from "./components/Nav"

export const metadata: Metadata = {
  title: "Project - Little Johns Takeaway",
  description: "A personal ecommerce project for a fake takeaway web-app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  )
}
