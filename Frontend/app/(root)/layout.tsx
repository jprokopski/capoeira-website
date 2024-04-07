import { NavBar } from "@/components/navigation-menu"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex flex-col">
      <NavBar />
      {children}
    </div>
  )
}
