import "server-only"

import { getServerSession } from "next-auth"

import { authOptions } from "./auth"

export async function getCurrentUser() {
  const session = await getServerSession(authOptions)
  return { user: session?.user }
}
