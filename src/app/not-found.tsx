import React from "react"
import { Open_Sans } from "next/font/google"
import Link from "next/link"

import { cn } from "~/lib/utils"
import { Button } from "~/components/ui/button"
import { Icons } from "~/components/icons"
import { Particles } from "~/components/particles"

const font = Open_Sans({
  weight: ["400", "500", "700", "800"],
  subsets: ["latin"],
  display: "swap",
})

export default function NotFound() {
  return (
    <div
      className={cn("w-full h-full grid place-content-center", font.className)}
    >
      <Particles className="inset-0 absolute opacity-60 -z-10" quantity={70} />
      <p className="text-stone-600 dark:text-stone-400 mb-5 md:mb-8 md:text-xl text-center text-sm">
        <span className="text-black dark:text-white">404</span> - page not found
      </p>
      <h1 className="text-4xl md:text-6xl lg:text-7xl uppercase">
        Coming soon...
      </h1>
      <div className="flex justify-center mt-5">
        <Link href="/">
          <Button variant={"outline"}>
            <Icons.arrowLeft className="h-4 w-4 mr-2" /> Go back home
          </Button>
        </Link>
      </div>
    </div>
  )
}
