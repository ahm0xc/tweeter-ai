import React, { PropsWithChildren } from "react"

import Sidebar from "./_components/sidebar"
import { Particles } from "~/components/particles"

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <Particles className="absolute inset-0 -z-10 opacity-30" />
      <Sidebar className="relative hidden min-h-screen md:fixed md:inset-y-0 md:z-50 md:flex md:w-72 md:flex-col" />
      <main className="md:pl-72">{children}</main>
    </div>
  )
}
