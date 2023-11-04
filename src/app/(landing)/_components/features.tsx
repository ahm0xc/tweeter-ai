import React from "react"
import Image from "next/image"
import GlowTop from "~/../public/glow-top.svg"
import ScreenShot from "~/../public/screenshot.png"

import { Icons } from "~/components/icons"

type Props = {}

export default function Features({}: Props) {
  const features = [
    {
      icon: Icons.brain,
      name: "Smart Suggestions",
      description: "Tweet Generator AI offers intelligent content",
    },
    {
      icon: Icons.microphoneStage,
      name: "Customizable Tone",
      description:
        "Tailor your tweets with ease by adjusting the AI's tone, from casual and friendly to formal and professional.",
    },
    {
      icon: Icons.clock,
      name: "Time Efficiency",
      description:
        "Save hours by generating tweets in seconds, freeing you to concentrate on other priorities.",
    },
    {
      icon: Icons.chartLine,
      name: "Analytics Integration",
      description:
        "Seamlessly track tweet performance with integrated analytics, gaining insights to refine your social media strategy.",
    },
  ]

  return (
    <section className="overflow-x-hidden">
      <div className="relative max-w-6xl px-4 mx-auto sm:px-6">
        <div
          className="absolute inset-0 -z-10 -mx-28 rounded-t-[3rem] pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10">
            <Image
              src={GlowTop}
              className="max-w-none"
              width={1404}
              height={658}
              alt="Features Illustration"
            />
          </div>
        </div>

        <div className="pt-16 pb-12 md:pt-52 md:pb-20">
          <div>
            {/* Section content */}
            <div className="flex flex-col max-w-xl mx-auto md:max-w-none md:flex-row md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-8 space-y-reverse md:space-y-0">
              {/* Content */}
              <div className="order-1 md:w-7/12 lg:w-1/2 md:order-none max-md:text-center">
                {/* Content #1 */}
                <div>
                  <div className="inline-flex pb-3 font-medium text-transparent bg-clip-text bg-gradient-to-br via-40% from-white/80 via-white  to-amber-400">
                    Don&apos;t drown in alerts
                  </div>
                </div>
                <p className="pb-3 text-4xl capitalize font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-200/60 via-zinc-200 to-zinc-200/60">
                  Save valuable time
                </p>
                <p className="mb-8 text-lg text-zinc-400">
                  Effortlessly craft engaging, valuable, remarkable tweets in
                  seconds seamlessly with our AI tool.
                </p>
                <div className="max-w-xl grid grid-cols-1 gap-4 lg:max-w-none">
                  {features.map((feature) => (
                    <div
                      key={feature.name}
                      className="px-3 py-2 rounded-md group hover:bg-stone-900 duration-500 border border-transparent hover:border-secondary"
                    >
                      <div className="flex items-center mb-1 space-x-2 ">
                        <feature.icon className="w-4 h-4 shrink-0 text-zinc-300 duration-500" />
                        <h4 className="font-medium text-zinc-50 duration-500">
                          {feature.name}
                        </h4>
                      </div>
                      <p className="text-sm text-left text-zinc-400 duration-500">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex max-w-2xl mx-auto mt-16 md:w-5/12 lg:w-1/2 sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
                <div className="z-10 flex-none max-w-3xl sm:max-w-5xl lg:max-w-none">
                  <Image
                    src={ScreenShot}
                    alt="App screenshot"
                    width={2432}
                    height={1442}
                    quality={60}
                    className="w-[76rem] z-10 rounded-xl border border-white/10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
