import { PrismaAdapter } from "@next-auth/prisma-adapter"
import EmailProvider from "next-auth/providers/email"
import { NextAuthOptions } from "next-auth"

import db from "@/lib/db"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.userId = token.userId
        session.user.name = token.name
        session.user.email = token.email
        session.user.image = token.picture
      }

      return session
    },
    async jwt({ token, user }) {
      const dbUser = await db.user.findFirst({
        where: {
          email: token.email,
        },
      })

      if (!dbUser) {
        if (user) {
          token.userId = user.id
        }
        return token
      }

      return {
        userId: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
      }
    },
  },
  pages: {
    signIn: "/login",
    verifyRequest: "/login?verifyRequest=1",
  },
  secret: process.env.NEXTAUTH_SECRET,
}
