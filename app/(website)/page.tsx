import React from "react"
import Image from "next/image"
import Link from "next/link"
import Hero from "./Hero"

const HomePage = () => {
  return (
    <>
      <section className="border-b border-b-brand-600 px-10 sm:px-20">
        <Hero />
      </section>
      <section className="mx-auto p-10 md:p-16">
        <p className="mt-3 text-2xl">
          Get started by editing{" "}
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            pages/index.tsx
          </code>
        </p>

        <div className="mt-10 mx-auto w-4/5 grid grid-cols-auto grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 justify-items-stretch justify-start">
          <Link
            href="https://nextjs.org/docs"
            className="rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
            <p className="mt-4 text-xl">
              Find in-depth information about Next.js features and its API.
            </p>
          </Link>

          <Link
            href="https://nextjs.org/learn"
            className="rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Learn &rarr;</h3>
            <p className="mt-4 text-xl">
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </Link>

          <Link
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className="rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Examples &rarr;</h3>
            <p className="mt-4 text-xl">
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </Link>

          <Link
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
            <p className="mt-4 text-xl">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </Link>
        </div>
      </section>
    </>
  )
}

export default HomePage
