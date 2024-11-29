'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import { Rubik_Mono_One } from "next/font/google"

export const rubik = Rubik_Mono_One({
  subsets: ['latin'],
  variable: '--font-rubik',
  weight: "400"
})

export default function Menubar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/experience", label: "Experience" },
  ]

  useEffect(() => {
    const closeMenuOnResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', closeMenuOnResize)
    return () => window.removeEventListener('resize', closeMenuOnResize)
  }, [isOpen])

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className={`${rubik.className} font-bold tracking-tighter text-foreground`}>
              Unedited
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            {menuItems.map((item) => (
              <Link key={item.href} href={item.href} passHref>
                <Button variant="ghost" className={`${rubik.className} text-foreground hover:text-primary`}>{item.label}</Button>
              </Link>
            ))}
          </div>
          <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Toggle menu" className="text-foreground">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[240px] bg-background/80 backdrop-blur-md sm:w-[300px]">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col space-y-4 mt-6">
              {menuItems.map((item) => (
                <Link key={item.href} href={item.href} passHref>
                  <Button
                    variant="ghost"
                    className={`${rubik.className} w-full justify-start text-lg text-foreground hover:text-primary`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
        </div>
      </div>
    </nav>
  )
}