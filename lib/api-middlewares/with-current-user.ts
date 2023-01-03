import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next"
import { getCurrentUser } from "@/lib/session"

export function withCurrentUser(handler: NextApiHandler) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    try {
      // Check if the user has access to this api path
      const currentUser = await getCurrentUser(req, res)
      console.log("HERE ... ", currentUser)
      if (!currentUser) {
        return res.status(401).end({ message: "Unauthenticated access" })
      }

      return handler(req, res)
    } catch (error) {
      return res.status(500).end()
    }
  }
}
