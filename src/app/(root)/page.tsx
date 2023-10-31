import Link from "next/link"

import { getCurrentUser } from "~/lib/session"
import GoogleLoginButton from "~/components/auth/google-login-button"
import { ThemeToggle } from "~/components/theme-toggle"

export default async function HomePage() {
  const { user } = await getCurrentUser()

  return (
    <div>
      <h1>Home page </h1>
      {user ? (
        <div>
          <p>{user.name}</p>
          <Link href="/overview">Overview</Link>
          <ThemeToggle />
        </div>
      ) : (
        <GoogleLoginButton />
      )}
    </div>
  )
}
