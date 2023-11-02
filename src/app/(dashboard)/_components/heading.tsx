import React, { ComponentPropsWithoutRef, ReactNode } from "react"

import { cn } from "~/lib/utils"

type Props = {
  title: string
  icon?: ReactNode
} & ComponentPropsWithoutRef<"div">

export default function Heading({ title, icon, className, ...props }: Props) {
  return (
    <div className={cn("", className)} {...props}>
      <div className="flex gap-2 items-center">
        {icon}
        <h2 className="text-2xl font-medium font-heading">{title}</h2>
      </div>
    </div>
  )
}
