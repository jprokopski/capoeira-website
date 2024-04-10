import { NavBar } from "@/components/navigation-menu"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex h-screen flex-col">
      <NavBar />
      {children}
    </div>
  )
}
