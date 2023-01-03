import { getCurrentUser } from "@/lib/session"
import db from "@/lib/db"
import { NextApiRequest, NextApiResponse } from "next"
import replicateClient from "@/lib/clients/replicate"

export const getRefinedInstanceClass = (instanceClass: string) => {
  return instanceClass === "man" || instanceClass === "woman"
    ? "person"
    : instanceClass
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const projectId = req.query.id as string
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    return res.status(401).json({ message: "Not authneticated " })
  }

  let project = await db?.project.findFirstOrThrow({
    where: {
      id: projectId,
      userId: currentUser.userId,
      modelStatus: "not_created",
      NOT: { stripePaymentId: null },
    },
  })

  const instanceClass = getRefinedInstanceClass(project.instanceClass)

  const replicateResponse = await replicateClient.post(
    "/v1/trainings",
    {
      input: {
        instance_prompt: `a photo of a ${process.env.NEXT_PUBLIC_REPLICATE_INSTANCE_TOKEN} ${instanceClass}`,
        class_prompt: `a photo of a ${instanceClass}`,
        instance_data: `https://${process.env.S3_UPLOAD_BUCKET}.s3.amazonaws.com/${project.id}.zip}`,
        max_train_steps: Number(process.env.REPLICATE_MAX_TRAIN_STEPS),
        num_class_images: 200,
        learning_rate: 1e-6,
      },
      model: `${process.env.REPLICATE_USERNAME}/${project.id}`,
      webhook_completed: `${process.env.NEXTAUTH_URL}/api/webhooks/completed`,
    },
    {
      headers: {
        Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  )

  const modelId = replicateResponse.data.id as string

  project = await db.project.update({
    where: { id: project.id },
    data: { replicateModelId: modelId, modelStatus: "processing" },
  })

  return res.json({ project })
}

export default handler
