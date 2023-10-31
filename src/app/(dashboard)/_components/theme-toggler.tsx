"use client"

import React from "react"
import { useTheme } from "next-themes"

import { useMounted } from "~/hooks/use-mounted"
import { Button } from "~/components/ui/button"
import { Icons } from "~/components/icons"

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme()
  const { mounted } = useMounted()

  function toggleTheme() {
    if (theme == "dark") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  if (!mounted) return null

  return (
    <Button
      className="w-full justify-start"
      size={"sm"}
      variant={"ghost"}
      icon={
        theme == "dark" ? (
          <Icons.lightMode className="h-5 w-5 mr-2" weight="duotone" />
        ) : (
          <Icons.darkMode className="h-5 w-5 mr-2" weight="duotone" />
        )
      }
      onClick={toggleTheme}
    >
      {theme == "dark" ? "Light mode" : "Dark mode"}
    </Button>
  )
}
