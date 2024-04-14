"use client"

import * as React from "react"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { NavBarItem } from "./navbar-item"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import lightLogo from "../../public/logo/light.png"
import darkLogo from "../../public/logo/dark.png"
import { menu } from "./menu"
import { BR, GB, PL } from "country-flag-icons/react/3x2"
import { SelectIcon } from "@radix-ui/react-select"
import { useLocale } from "next-intl"
import { useTransition } from "react"
import { usePathname, useRouter } from "next/navigation"

export function NavBar() {
  const { setTheme, theme } = useTheme()
  const handleClick = () => {
    const newTheme = theme == "dark" ? "light" : "dark"
    setTheme(newTheme)
  }

  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const pathname = usePathname()
  const locale = useLocale()

  const onLanguageChange = (event: string) => {
    startTransition(() => {
      router.replace(`${pathname}${event}`)
    })
  }

  return (
    <header className="flex items-center p-2 top-0 z-50 w-full border-b">
      <Link href="/" className="contents">
        <img
          src={lightLogo.src}
          alt="light logo"
          className="size-10 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 mr-2"
        />
        <img
          src={darkLogo.src}
          alt="dark logo"
          className="absolute size-10 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 mr-2"
        />
      </Link>
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
            <Select defaultValue={locale} onValueChange={onLanguageChange}>
              <SelectTrigger
                className="w-[60px] border-none stroke"
                arrowClassName="opacity-100 stroke-2"
              >
                <SelectValue>
                  <SelectIcon asChild>
                    {(() => {
                      switch (locale) {
                        case "pl":
                          return <PL className="mr-2 h-4 w-4" />
                        case "br":
                          return <BR className="mr-2 h-4 w-4" />
                        case "en":
                          return <GB className="mr-2 h-4 w-4" />
                        default:
                          return null
                      }
                    })()}
                  </SelectIcon>
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="pl">
                    <div className="flex">
                      <SelectIcon asChild>
                        <PL className="mr-2 h-4 w-4" />
                      </SelectIcon>
                      Polski
                    </div>
                  </SelectItem>
                  <SelectItem value="br">
                    <div className="flex">
                      <SelectIcon asChild>
                        <BR className="mr-2 h-4 w-4" />
                      </SelectIcon>
                      Brasileiro
                    </div>
                  </SelectItem>
                  <SelectItem value="en">
                    <div className="flex">
                      <SelectIcon asChild>
                        <GB className="mr-2 h-4 w-4" />
                      </SelectIcon>
                      English
                    </div>
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}
