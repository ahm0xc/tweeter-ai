import React, { ComponentPropsWithoutRef } from "react"
import { notFound } from "next/navigation"

import { db } from "~/lib/db"
import { getCurrentUser } from "~/lib/session"
import { cn } from "~/lib/utils"
import TweetPlaceholder from "~/components/tweet-placeholder"

type Props = {} & ComponentPropsWithoutRef<"section">

export default async function Tweets({ className, ...props }: Props) {
  const { user } = await getCurrentUser()

  if (!user) {
    return notFound()
  }

  const tweets = await db.tweet.findMany({
    where: {
      userid: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 100,
  })

  return (
    <section className={cn("mt-8", className)} {...props}>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {tweets.map((tweet) => (
          <TweetPlaceholder className="w-full max-w-none" key={tweet.id} content={tweet.content} />
        ))}
      </div>
    </section>
  )
}
