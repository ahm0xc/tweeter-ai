import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { render } from "@react-email/render"
import SigninEmail from "~/emails/signin"
import { env } from "~/env.mjs"
import { NextAuthOptions, User } from "next-auth"
// eslint-disable-next-line no-unused-vars
import { JWT } from "next-auth/jwt"
import EmailProvider from "next-auth/providers/email"
// import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

import { db } from "./db"
import { plunk } from "./plunk"

declare module "next-auth/jwt" {
  // eslint-disable-next-line no-unused-vars
  interface JWT {
    id: string
  }
}

declare module "next-auth" {
  // eslint-disable-next-line no-unused-vars
  interface Session {
    user: User & {
      id: string
    }
  }
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  pages: {
    // TODO: signIn: "/login",
  },
  providers: [
    EmailProvider({
      sendVerificationRequest: async (params) => {
        // await resend.sendEmail({
        //   from: "SaaS Starter<onboarding@resend.dev>",
        //   to: params.identifier,
        //   subject: "Verify your email",
        //   react: SigninEmail({url: params.url})
        // })
        const emailHtml = render(SigninEmail({ url: params.url }))
        plunk.emails.send({
          to: params.identifier,
          subject: "Verify your email",
          body: emailHtml,
        })
      },
    }),
    // GitHubProvider({
    //   clientId: env.GITHUB_CLIENT_ID,
    //   clientSecret: env.GITHUB_CLIENT_SECRET,
    // }),
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    session: async ({ token, session }) => {
      if (token) {
        session.user.id = token.id
        session.user.name = token.name
        session.user.email = token.email
        session.user.image = token.picture
      }

      return session
    },
    jwt: async ({ token, user }) => {
      const dbUser = await db.user.findFirst({
        where: {
          email: token.email,
        },
      })

      if (!dbUser) {
        if (user) {
          token.id = user?.id
        }
        return token
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
      }
    },
  },
}
