"use client"

import React, { ComponentPropsWithoutRef, useState } from "react"

import { siteConfig } from "~/config/site"
import { cn } from "~/lib/utils"
import { Button } from "~/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet"
import { Icons } from "~/components/icons"
import { useMounted } from "~/hooks/use-mounted"

interface Props extends ComponentPropsWithoutRef<"header"> {
  sidebar: React.ReactNode
}

export default function MobileNav({ sidebar, className, ...props }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const {mounted} = useMounted()

  if(!mounted) return null;

  return (
    <header
      className={cn(
        "bg-stone-200 dark:bg-stone-900 border-b h-16 md:hidden",
        className
      )}
      {...props}
    >
      <div className="h-full flex items-center px-3 w-full">
        <nav className="flex items-center justify-between w-full">
        <div className="flex items-center gap-1">
            <Icons.logo className="h-6 w-6" />
            <p className="font-semibold">{siteConfig.name}</p>
          </div>
          <Sheet open={isOpen} onOpenChange={o => setIsOpen(o)}>
            <SheetTrigger>
              <Button size="icon" variant={"ghost"}>
                <Icons.sidebar className="h-5 w-5" weight="duotone" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pl-1">
              <div onClick={() => setIsOpen(false)}>{sidebar}</div>
            </SheetContent>
          </Sheet>
          
        </nav>
      </div>
    </header>
  )
}
