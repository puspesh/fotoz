import { User } from "next-auth"
import { JWT } from "next-auth/jwt"

type UserId = string

declare module "next-auth/jwt" {
  interface JWT {
    userId: UserId
  }
}

declare module "next-auth" {
  interface Session {
    user: User & {
      userId: UserId
    }
  }
}
