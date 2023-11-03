import React, { ComponentPropsWithoutRef } from "react"
import Link from "next/link"

import { cn } from "~/lib/utils"
import { Icons } from "~/components/icons"

type Props = {} & ComponentPropsWithoutRef<"footer">

export default function Footer({ className, ...props }: Props) {
  return (
    <footer
      className={cn("pt-24", className)}
      aria-labelledby="footer-heading"
      {...props}
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="px-6 pb-8 mx-auto max-w-7xl lg:px-8">
        <div className="pt-8 mt-16 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
          <div className="flex space-x-6 md:order-2">
            <Link
              target="_blank"
              href="https://x.com/ahmed_oww"
              className="text-gray-500 hover:text-gray-400"
            >
              <span className="sr-only">Twitter</span>
              <Icons.twitter className="w-6 h-6" weight="duotone" />
            </Link>
          </div>
          <p className="mt-8 text-xs text-gray-400 leading-5 md:order-1 md:mt-0">
            &copy; {new Date().getUTCFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
