"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"

import { Icons } from "../icons"
import { Button } from "../ui/button"

type GoogleLoginButtonProps = {
  callbackUrl?: string
  redirect?: boolean
}

export default function GoogleLoginButton({
  callbackUrl = "/",
  redirect,
}: GoogleLoginButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  async function handleLogin() {
    setIsLoading(true)
    await signIn("google", { callbackUrl, redirect })
    setIsLoading(false)
  }
  return (
    <Button
      isLoading={isLoading}
      variant="outline"
      icon={<Icons.google className="h-5 w-5 mr-3" weight="duotone" />}
      onClick={handleLogin}
    >
      Login with Google
    </Button>
  )
}
