"use client"

import React, { PropsWithChildren, useEffect } from "react"
import { useTheme } from "next-themes"

import CustomScrollIndicator from "~/components/custom-scroll-indicator"

export default function Layout({ children }: PropsWithChildren) {
  const { setTheme } = useTheme()
  useEffect(() => {
    setTheme("dark")
  }, [])
  return (
    <>
      <CustomScrollIndicator />
      <main>{children}</main>
    </>
  )
}
