"use client"

import React, { ComponentPropsWithoutRef, useState } from "react"
import Image from "next/image"
// import ReactMarkdown from 'react-markdown'
// import gfm from 'remark-gfm'
import AhmedLogo from "~/../public/ahmed-logo.png"

import { cn, copyText } from "~/lib/utils"
import { Skeleton } from "~/components/ui/skeleton"

import { Icons } from "./icons"
import { Particles } from "./particles"
import { Button } from "./ui/button"

interface Props extends ComponentPropsWithoutRef<"div"> {
  content: string
  isLoading?: boolean
}

export default function TweetPlaceholder({
  content,
  isLoading = false,
  className,
  ...props
}: Props) {
  const [isTextCopied, setIsTextCopied] = useState<boolean>(false)

  return (
    <div
      className={cn(
        "p-6 rounded-md bg-stone-200/40 dark:bg-stone-900/40 border h-fit max-w-xl relative",
        className
      )}
      {...props}
    >
      <Particles
        className="absolute inset-0 opacity-70 -z-10"
        quantity={70}
        color="#2563eb"
      />
      <Button
        size="icon"
        className="absolute top-3 right-3 h-8 w-8"
        variant="outline"
        onClick={() => {
          copyText(content)
          setIsTextCopied(true)
          setTimeout(() => {
            setIsTextCopied(false)
          }, 2000)
        }}
        disabled={!content}
      >
        {isTextCopied ? (
          <Icons.check className="h-4 w-4 text-green-800 dark:text-green-500" />
        ) : (
          <Icons.copy className="h-4 w-4" />
        )}
      </Button>
      <div className="flex gap-2">
        <Image
          src={AhmedLogo}
          width={32}
          height={32}
          className="rounded-full h-8 w-8"
          alt=""
        />
        <div className="flex flex-col">
          <p>Ahmed</p>
          <p className="text-sm text-zinc-600 dark:text-zinc-500">@ahmed_oww</p>
        </div>
      </div>
      <div className="mt-3 [text-wrap:balance] prose-sm prose-stone">
        {isLoading ? (
          <div className="flex flex-col space-y-2">
            <Skeleton className="w-full h-[20px] rounded-sm bg-stone-300 dark:bg-stone-800" />
            <Skeleton className="w-full h-[20px] rounded-sm bg-stone-300 dark:bg-stone-800" />
            <Skeleton className="w-[60%] h-[20px] rounded-sm bg-stone-300 dark:bg-stone-800" />
          </div>
        ) : content ? (
          <div>{content}</div>
        ) : null}
      </div>
      <div className="mt-3">
        <div className="flex gap-4">
          <div className="flex group cursor-pointer items-center gap-0.5">
            <span className="p-1.5 rounded-full group-hover:bg-rose-800/20 flex items-center justify-center transition-colors duration-300">
              <Icons.heart
                weight="fill"
                className="h-4 w-4 inline-flex group-hover:fill-rose-500 fill-rose-500"
              />
            </span>
            <p className="text-xs group-hover:text-rose-500 transition-colors duration-300">
              1.9k
            </p>
          </div>
          <div className="flex group cursor-pointer items-center gap-0.5">
            <span className="p-1.5 rounded-full group-hover:bg-blue-800/20 flex items-center justify-center transition-colors duration-300">
              <Icons.comment className="h-4 w-4 inline-flex group-hover:fill-blue-500" />
            </span>
            <p className="text-xs group-hover:text-blue-500 transition-colors duration-300">
              53
            </p>
          </div>
          <div className="flex group cursor-pointer items-center gap-0.5">
            <span className="p-1.5 rounded-full group-hover:bg-green-800/20 flex items-center justify-center transition-colors duration-300">
              <Icons.repost className="h-4 w-4 inline-flex group-hover:fill-green-500" />
            </span>
            <p className="text-xs group-hover:text-green-500 transition-colors duration-300">
              20
            </p>
          </div>
          <div className="flex group cursor-pointer items-center gap-0.5">
            <span className="p-1.5 rounded-full group-hover:bg-sky-800/20 flex items-center justify-center transition-colors duration-300">
              <Icons.analytics className="h-4 w-4 inline-flex group-hover:fill-sky-500" />
            </span>
            <p className="text-xs group-hover:text-sky-500 transition-colors duration-300">
              100k
            </p>
          </div>
          <div className="flex group cursor-pointer items-center gap-0.5">
            <span className="p-1.5 rounded-full group-hover:bg-amber-800/20 flex items-center justify-center transition-colors duration-300">
              <Icons.bookmark className="h-4 w-4 inline-flex group-hover:fill-amber-500" />
            </span>
            <p className="text-xs group-hover:text-amber-500 transition-colors duration-300">
              1.2k
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
