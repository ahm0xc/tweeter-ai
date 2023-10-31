import React from "react"
import Image from "next/image"

import { getCurrentUser } from "~/lib/session"
import { Button } from "~/components/ui/button"

export default async function ProfileCard() {
  const { user } = await getCurrentUser()
  
  return (
    <div>
      <Button variant="ghost" className="justify-start px-3 w-full">
        <Image
          src={user?.image || "/user-placeholder.png"}
          alt=""
          width={25}
          height={25}
          className="rounded-full border-2 border-stone-800/20 dark:border-white/20 mr-2"
        />
        <p className="line-clamp-1">{user?.name ?? "Ahmed"}</p>
      </Button>
    </div>
  )
}
