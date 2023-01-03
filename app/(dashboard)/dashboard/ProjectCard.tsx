"use client"

import { Project } from "@prisma/client"
import { useMutation } from "react-query"

function ProjectCard({
  project,
  handleRefreshProjects,
}: {
  project: Project
  handleRefreshProjects: () => void
}) {
  const {
    mutate: trainModel,
    isLoading: isModelLoading,
    isSuccess,
  } = useMutation(
    `train-model-${project.id}`,
    (project: Project) => fetch(`/api/projects/${project.id}/train`),
    {
      onSuccess: () => {
        handleRefreshProjects()
      },
    }
  )

  const isWaitingTraining = !project.replicateModelId
  const isReady = project.modelStatus === "succeeded"
  const isTraining =
    project.modelStatus === "processing" || project.modelStatus === "pushing"

  return <div>ProjectCard</div>
}

export default ProjectCard
