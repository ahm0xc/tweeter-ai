import { useMemo } from "react"

import { cn } from "~/lib/utils"
import { Button } from "~/components/ui/button"
import { HighlighterItem, HighlightGroup } from "~/components/highlighter"
import { Icons } from "~/components/icons"
import { Particles } from "~/components/particles"

const tiers = [
  {
    name: "Hobby",
    price: 1,
    credit: 50,
    description: "Try with your next awesome tweet.",
    features: ["Generations", "History"],
    cta: "Get Started for Free",
  },
  {
    name: "Pro",
    price: 9,
    credit: 500,
    description: "Everything in Hobby, plus higher limits.",
    features: ["Generations", "History"],
    cta: "Try Pro for 14 days",
  },
  {
    name: "Enterprise",
    price: 29,
    credit: 5000,
    description: "For influencer with more dedication.",
    features: ["Personal Contact", "Uses Analytics"],
    cta: "Scale Up",
  },
]

const _useColor = (hash: string): [number, number, number] => {
  return useMemo(
    () => [
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
    ],
    [hash]
  )
}

export const Pricing: React.FC = () => {
  return (
    <section className="relative">
      {/* Radial gradient */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none -z-10"
        aria-hidden="true"
      >
        <div className="absolute top-0 flex items-center justify-center w-1/3 -translate-y-1/2 left-1/2 -translate-x-1/2 aspect-square">
          <div className="absolute inset-0 translate-z-0 bg-primary-500 rounded-full blur-[120px] opacity-50" />
        </div>
      </div>
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="py-12 md:py-20">
          {/* Content */}
          <div className="max-w-3xl pb-12 mx-auto text-center md:pb-20">
            <div>
              <div className="inline-flex pb-3 font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-200">
                Pricing plans
              </div>
            </div>
            <h2 className="pb-4 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-zinc-200/60 via-zinc-200 to-zinc-200/60">
              Simple and transparent
            </h2>
            <p className="text-lg text-zinc-400">
              Invite your whole team, we don&apos;t do seat based pricing here.
            </p>
          </div>
          {/* Pricing tabs */}
          <HighlightGroup className="h-full grid gap-6 md:grid-cols-12 group">
            {/* Box #1 */}

            {tiers.map((tier, i) => (
              <div
                key={tier.name}
                className="h-full md:col-span-6  lg:col-span-4 group/item"
                data-aos="fade-down"
              >
                <HighlighterItem>
                  <div className="relative h-full bg-zinc-900 rounded-[inherit] z-20 overflow-hidden">
                    <Particles
                      className="absolute inset-0 -z-10 opacity-10 group-hover/item:opacity-100 transition-opacity duration-1000 ease-in-out"
                      quantity={(i + 1) ** 2 * 10}
                      color={["#34d399", "#fde047", "#f43f5e"][i]}
                      vy={-0.2}
                    />
                    <div className="flex flex-col">
                      {/* Radial gradient */}
                      <div
                        className="absolute bottom-0 w-1/2 pointer-events-none -translate-x-1/2 translate-y-1/2 left-1/2 -z-10 aspect-square"
                        aria-hidden="true"
                      >
                        <div className="absolute inset-0 translate-z-0 bg-zinc-800 rounded-full blur-[80px]" />
                      </div>
                      {/* Text */}

                      <div className="p-8">
                        <h3
                          id={tier.name}
                          className="text-lg font-semibold leading-8"
                        >
                          {tier.name}
                        </h3>

                        <h3 className="inline-flex items-baseline pb-1 mt-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-200/60 via-zinc-200 to-zinc-200/60">
                          <span className="text-4xl">{tier.credit}</span>
                          <span className="text-base ml-1">credit </span>
                          <span className="text-lg ml-1"> / ${tier.price}</span>
                        </h3>
                        <p className="mt-4 text-sm leading-6 text-zinc-400">
                          {tier.description}
                        </p>
                        <ul
                          role="list"
                          className="mt-8 text-sm space-y-3 leading-6 text-zinc-300"
                        >
                          {tier.features.map((feature) => (
                            <li key={feature} className="flex gap-x-3">
                              <Icons.check
                                className={cn("h-6 w-5 flex-none", {
                                  "text-emerald-400": i === 0,
                                  "text-yellow-300": i === 1,
                                  "text-rose-500": i === 2,
                                })}
                                aria-hidden="true"
                              />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Button className="mt-16 w-full justify-center " variant={i == 1 ? "default": "outline"}>
                          Get Started{" "}
                          <Icons.arrowRight
                            className="w-4 h-4 tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1"
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
              </div>
            ))}
          </HighlightGroup>
        </div>
      </div>
    </section>
  )
}
