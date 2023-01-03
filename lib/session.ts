import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { NextApiRequest, NextApiResponse } from "next"

export async function getSession(req?: NextApiRequest, res?: NextApiResponse) {
  if (req && res) {
    return await unstable_getServerSession(req!, res!, authOptions)
  }
  return await unstable_getServerSession(authOptions)
}

export async function getCurrentUser(
  req?: NextApiRequest,
  res?: NextApiResponse
) {
  const session = await getSession(req, res)
  return session?.user
}
