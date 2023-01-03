import { NextApiRequest, NextApiResponse } from "next"

import db from "@/lib/db"
import replicateClient from "@/lib/clients/replicate"

import { getCurrentUser } from "@/lib/session"

import { withMethods } from "@/lib/api-middlewares/with-methods"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const currentUser = await getCurrentUser(req, res)
  if (!currentUser) {
    return res.status(401).json({ message: "Not authenticated" })
  }

  if (req.method === "POST") {
    const urls = req.body.urls as string[]
    const studioName = req.body.studioName as string
    const instanceClass = req.body.instanceClass as string

    const project = await db.project.create({
      data: {
        imageUrls: urls,
        name: studioName,
        userId: currentUser.userId,
        modelStatus: "not_created",
        instanceClass: instanceClass || "person",
        instanceName: process.env.NEXT_PUBLIC_REPLICATE_INSTANCE_TOKEN!,
        credits: Number(process.env.NEXT_PUBLIC_STUDIO_SHOT_AMOUNT) || 10,
      },
    })

    // TODO put zipped project in s3

    return res.json({ project })
  }

  if (req.method === "GET") {
    const projects = await db.project.findMany({
      where: { userId: currentUser.userId },
      include: { shots: { take: 10, orderBy: { createdAt: "desc" } } },
      orderBy: { createdAt: "desc" },
    })

    // TODO can be done as async job or cron
    for (const project of projects) {
      if (project?.replicateModelId && project?.modelStatus !== "succeeded") {
        const { data } = await replicateClient.get(
          `/v1/trainings/${project.replicateModelId}`
        )

        await db.project.update({
          where: { id: project.id },
          data: { modelVersionId: data?.version, modelStatus: data?.status },
        })
      }
    }

    return res.json({ projects })
  }
}

export default withMethods(["GET", "POST"], handler)
