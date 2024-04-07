"use client"

import * as React from "react"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { NavBarItem } from "./navbar-item"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import lightLogo from "../../public/logo/light.png"
import darkLogo from "../../public/logo/dark.png"
import { menu } from "./menu"



export function NavBar() {
  const { setTheme, theme } = useTheme()
  const handleClick = () => {
    const newTheme = theme == "dark" ? "light" : "dark"
    setTheme(newTheme)
  }

  return (
    <header className="flex items-center sticky p-2 top-0 z-50 w-full border-b border-border/50">
      <img
        src={theme == "dark" ? darkLogo.src : lightLogo.src}
        alt="Logo"
        className="h-12 w-12 mr-2"
      />

      <div className="flex-1">
        <NavigationMenu>
          <NavigationMenuList>
            {menu.map((item, key) => {
              return (
                <NavBarItem key={key}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink>{item.title}</NavigationMenuLink>
                  </Link>
                </NavBarItem>
              )
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex">
        <NavigationMenu>
          <NavigationMenuList>
            <NavBarItem onClick={handleClick}>
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </NavBarItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}
