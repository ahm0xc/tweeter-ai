import React, { ComponentPropsWithoutRef } from "react"
import Link from "next/link"
import Balancer from "react-wrap-balancer"

import { siteConfig } from "~/config/site"
import { cn } from "~/lib/utils"
import { Button } from "~/components/ui/button"
import { Icons } from "~/components/icons"
import { Particles } from "~/components/particles"

type Props = {} & ComponentPropsWithoutRef<"section">

export default function Hero({ className, ...props }: Props) {
  return (
    <section className={cn("", className)} {...props}>
      <div className="relative max-w-6xl min-h-screen px-4 mx-auto sm:px-6">
        {/* Particles animation */}
        <Particles className="absolute inset-0 -z-10 " />

        <div className="pt-32 pb-16 md:pt-52 md:pb-32">
          {/* Hero content */}
          <div className="container mx-auto text-center">
            <div className="mb-6" data-aos="fade-down">
              <div className="relative inline-flex before:absolute before:inset-0 ">
                <Link
                  className="px-3 py-1 text-sm font-medium inline-flex items-center justify-center border border-transparent rounded-full  text-zinc-300 hover:text-white transition duration-150 ease-in-out w-full group [background:linear-gradient(#121212,#121212)_padding-box,_conic-gradient(rgba(255,255,255,0.7),_rgba(255,255,255,0.1)_25%,_rgba(255,255,255,0.1)_75%,_rgba(255,255,255,0.7)_100%)_border-box] relative before:absolute before:inset-0 before:bg-zinc-800/30 before:rounded-full before:pointer-events-none"
                  href="https://x.com/ahmed_oww"
                  target="_blank"
                >
                  <span className="relative inline-flex items-center">
                    Announcing {siteConfig.name} 1.0!{" "}
                    {/* <span className="tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      <Icons.arrowRight className="h-4 w-4" weight="duotone" />
                    </span> */}
                  </span>
                </Link>
              </div>
            </div>
            <h1
              className="pb-4 font-heading font-extrabold [text-wrap:balance] tracking-tight text-transparent text-7xl lg:text-8xl  bg-clip-text bg-gradient-to-br from-zinc-200/60 via-zinc-200 to-amber-200/80"
              data-aos="fade-down"
            >
              <Balancer>AI That Writes Remarkable Tweets!</Balancer>
            </h1>
            <p
              className="mb-8 text-lg text-zinc-300"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              Unlock Twitter&apos;s full potential. Supercharge your tweets with{" "}
              {siteConfig.name} AI! 🚀
            </p>
            <div
              className="flex flex-col items-center max-w-xs mx-auto gap-4 sm:max-w-none  sm:justify-center sm:flex-row sm:inline-flex"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <Link className="" href="https://x.com/ahmed_oww">
                <Button variant="outline" className="font-semibold" size="lg">
                  Contact us
                </Button>
              </Link>
              <Link className="" href="/generate">
                <Button className="font-semibold" size="lg">
                  Get Started{" "}
                  <Icons.arrowRight className="w-3 h-3 tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
