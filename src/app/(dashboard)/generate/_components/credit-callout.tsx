"use client"

import React from "react"
import Link from "next/link"
import { useQuery } from "@tanstack/react-query"

import { cn } from "~/lib/utils"
import { Icons } from "~/components/icons"

type Props = {}

export default function CreditCallout({}: Props) {
  const { data, isError } = useQuery({
    queryFn: () =>
      fetch("/api/tweet/credits", { next: { tags: ["credits"] } }).then((r) =>
        r.json()
      ),
    queryKey: ["credits"],
    refetchOnMount: true,
  })

  if (isError || !data) return null

  return (
    <div
      className={cn(
        "dark:bg-yellow-800/30 bg-amber-200/60 text-yellow-700 dark:text-yellow-600 py-1.5 text-[13px] px-4",
        {
          "dark:bg-rose-800/30 bg-red-600/30 text-red-700 dark:text-rose-600":
            data.credits <= 0,
        }
      )}
    >
      You currently have {data.credits} left.{" "}
      <Link href={"/pricing"} className="underline underline-offset-2">
        Buy some more <Icons.arrowRight className="h-3 w-3 inline-block" />
      </Link>
    </div>
  )
}
