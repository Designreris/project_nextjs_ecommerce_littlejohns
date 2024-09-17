import type { Metadata } from "next"
import "./globals.css"
import { Roboto, Roboto_Slab } from "next/font/google"
import Nav from "./components/Nav"

export const metadata: Metadata = {
  title: "Project - Little Johns Takeaway",
  description: "A personal ecommerce project for a fake takeaway web-app",
}

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
})

const robotoSlab = Roboto_Slab({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-robotoSlab",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${robotoSlab.variable}`}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
