import React from "react"
import Image from "next/image"
import Link from "next/link"
import Logo from "~/../public/tweetlify-logo.png"

type Props = {}

export default function Header({}: Props) {
  return (
    <header className="w-full py-3 items-center absolute inset-x-0 top-0 z-10">
      <div className="flex px-4 md:px-10 items-center max-w-7xl mx-auto">
        {/* logo */}
        <div>
          <Link href="/">
            <Image
              src={Logo}
              width={60}
              priority
              className="w-12 h-auto"
              alt=""
            />
          </Link>
        </div>
        {/* empty div */}
        <div className="flex-1" />
        {/* links */}
        <div>
          <Link
            href="/generate"
            className="hover:text-white font-medium text-zinc-200 transition-colors"
          >
            Generate
          </Link>
        </div>
      </div>
    </header>
  )
}
