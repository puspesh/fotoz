import { Suspense } from "react"
import { Project } from "@prisma/client"
import { notFound } from "next/navigation"
import { headers } from "next/headers"

import replicateClient from "@/lib/clients/replicate"
import db from "@/lib/db"

import Uploader from "./Uploader"
import ProjectCard from "./ProjectCard"
import Loading from "./loading"
import { getCurrentUser } from "@/lib/session"

const fetchAllProjects = async () => {
  const res = await fetch(process.env.BASE_URL + "/api/projects", {
    cache: "no-cache",
    headers: {
      cookie: headers().get("cookie")!,
    },
  })
  if (!res.ok) {
    return null
  }
  return res.json()
}

const refetchProjects = async () => {
  return await fetchAllProjects()
}

async function Dashboard() {
  const projects = await fetchAllProjects()

  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col space-y-2 text-center">
          <h2 className="">Create a new Studio</h2>
          <Uploader
            handleOnAdd={() => {
              refetchProjects()
            }}
          />
        </div>
        <div className="flex flex-col space-y-2 text-center">
          <h2 className="">My Studios</h2>
          <Suspense fallback={<Loading />}>
            {projects?.length === 0 && (
              <div className="flex text-center">
                <p>No projects found</p>
              </div>
            )}
          </Suspense>

          <div className="flex flex-col space-y-2 text-center">
            <Suspense fallback={<Loading />}>
              {projects?.length > 0 &&
                projects?.map((project: Project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    handleRefreshProjects={() => {
                      refetchProjects()
                    }}
                  />
                ))}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
