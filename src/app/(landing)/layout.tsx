"use client"

import React, { PropsWithChildren, useEffect } from "react"
import AOS from "aos"

import "aos/dist/aos.css"
import "~/styles/landing.css"

import { useTheme } from "next-themes"

import CustomScrollIndicator from "~/components/custom-scroll-indicator"

export default function Layout({ children }: PropsWithChildren) {
  const { setTheme } = useTheme()
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 1000,
      easing: "ease-out-cubic",
    })
  }, [])
  useEffect(() => {
    setTheme("dark")
  }, [])
  return (
    <>
      <CustomScrollIndicator />
      <main className="grow">{children}</main>
    </>
  )
}
