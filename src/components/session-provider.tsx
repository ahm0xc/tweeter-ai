"use client"

import { PropsWithChildren } from "react"
import { SessionProvider as NASessionProvider } from "next-auth/react"

export default function SessionProvider({ children }: PropsWithChildren) {
  return <NASessionProvider>{children}</NASessionProvider>
}
