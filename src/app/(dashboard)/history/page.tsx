import React from "react"

import { Icons } from "~/components/icons"

import Heading from "../_components/heading"
import Tweets from "./_components/tweets"

type Props = {}

export default function HistoryPage({}: Props) {
  return (
    <div className="container py-8">
      <Heading
        title="History"
        icon={<Icons.history className="h-6 w-6" weight="bold" />}
      />
      <Tweets />
    </div>
  )
}
