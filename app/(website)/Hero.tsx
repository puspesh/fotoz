import React from "react"
import LiquidGradient from "../../components/common/LiquidGradient"
import Link from "next/link"

function Hero() {
  return (
    <>
      <div className="mx-auto max-w-3xl pt-12 pb-20 sm:pt-36 sm:pb-40">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/30 hover:ring-gray-900/20">
            <span className="text-gray-600">
              Announcing our next round of funding.{" "}
              <Link href="/" className="font-semibold text-brand-800">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </Link>
            </span>
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
            Data to enrich your online business
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div className="mt-8 flex gap-x-4 justify-around sm:justify-center">
            <Link
              href="#"
              className="inline-block rounded-lg border border-transparent bg-brand-500 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm focus:ring-2 ring-indigo-600 hover:bg-brand-700 hover:ring-indigo-700"
            >
              Get started
              <span className="text-indigo-200" aria-hidden="true">
                &rarr;
              </span>
            </Link>
            <Link
              href="#"
              className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
            >
              Live demo
              <span className="text-gray-400" aria-hidden="true">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
        <LiquidGradient />
      </div>
    </>
  )
}

export default Hero
