import React, { PropsWithChildren } from "react"

import { Particles } from "~/components/particles"

import Sidebar from "./_components/sidebar"
import MobileNav from "./_components/mobile-nav"

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <Particles className="absolute inset-0 -z-10 opacity-30" />
      <MobileNav sidebar={<Sidebar className="border-r-0" />} />
      <Sidebar className="relative hidden min-h-screen md:fixed md:inset-y-0 md:z-50 md:flex md:w-72 md:flex-col" />
      <main className="md:pl-72">{children}</main>
    </div>
  )
}
