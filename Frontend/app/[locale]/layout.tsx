import type { Metadata } from "next"
import { Red_Hat_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "../../components/theme-provider"
import { Suspense } from "react"
import Loading from "./loading"

const redHatMono = Red_Hat_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <html lang={locale}>
      <body className={redHatMono.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
