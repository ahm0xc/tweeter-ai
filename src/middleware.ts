import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"
import { withAuth, type NextRequestWithAuth } from "next-auth/middleware"

export const config = {
  matcher: [
    //e.g. "/dashboard/:path*
  ],
}

async function middleware(req: NextRequestWithAuth) {
  const token = await getToken({ req })
  const isAuth = !!token
  const isAuthPage =
    req.nextUrl.pathname.startsWith("/login") ||
    req.nextUrl.pathname.startsWith("/register")

  if (isAuthPage) {
    if (isAuth) {
      return NextResponse.redirect(new URL("/", req.url))
      // TODO: return NextResponse.redirect(new URL("/dashboard", req.url))
    }
    return null
  }

  if (!isAuth) {
    let from = req.nextUrl.pathname
    if (req.nextUrl.search) {
      from += req.nextUrl.search
    }

    return NextResponse.redirect(
      new URL(`/login?from=${encodeURIComponent(from)}`, req.url)
    )
  }
}

export default withAuth(middleware, {
  callbacks: {
    async authorized() {
      // This is a work-around for handling redirect on auth pages.
      // We return true here so that the middleware function above
      // is always called.
      return true
    },
  },
})
