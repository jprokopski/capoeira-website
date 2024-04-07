import { NavBar } from "@/components/navigation-menu"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  )
}
