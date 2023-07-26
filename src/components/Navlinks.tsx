"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../components/ui/navigation-menu"
// import { Icons } from "..//components/icons"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Tops",
    href: "/tops",
    description:
      'Winter Collection 2021 - Khaadi has a wide range of Ready to wear, Luxury Pret, Unstitched dresses for women',
  },
  {
    title: "Pants",
    href: "/pants",
    description:
'We offer a wide range of women trousers to cater your clothing needs. We have a variety of trousers including wide leg trousers and plain trousers.',  },
  {
    title: "Accessories",
    href: "/accessories",
    description:
      'Limelight is offering women scarves, dupattas, wallets, bags, footwear, belts, jewelry, sunglasses, hair accessories, and much more at affordable prices',
  },
  {
    title: "Shoes",
    href: "/shoes",
    description:
      'Style yourself in the best quality ladies footwear that is stylish, comfortable, & available in different styles. Look your best with 1st Step shoes.',
  },
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="/">
      <NavigationMenuItem  className="hover:text-myorange duration-300 ">
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="hover:text-myorange duration-300 text-lg">
          <NavigationMenuTrigger>Women</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid  w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-mywhite">
              {components.map((component) => (
                <Link key={component.title} href={component.href} legacyBehavior passHref
                > 
                <ListItem className=""
                  
                  title={component.title}>
                  
                  {component.description}
                </ListItem></Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hover:text-myorange duration-300 text-lg">
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="hover:text-myorange duration-300 text-lg">
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="hover:text-myorange duration-300  text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
