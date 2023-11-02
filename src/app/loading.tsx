import React from "react"

import { Icons } from "~/components/icons"

export default function Loading() {
  return (
    <div className="container grid place-items-center h-full">
      <div className="flex gap-2 items-center">
        <span>
          <Icons.spinner className="h-8 w-8 animate-spin" />
        </span>
        <p>Loading please wait a while...</p>
      </div>
    </div>
  )
}
