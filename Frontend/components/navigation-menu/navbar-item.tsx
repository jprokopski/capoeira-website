import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import React from "react"
import { cn } from "@/lib/utils"
import { navigationMenuTriggerStyle } from "../ui/navigation-menu"

export const NavBarItem = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Item
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), className)}
    {...props}
  >
    {children}
  </NavigationMenuPrimitive.Item>
))
