"use client"

import Link from "next/link"
import React from "react"

import { Button, ButtonProps } from "~/components/ui/button"
import { useToast } from "~/components/ui/use-toast"

type Props = {} & ButtonProps

export default function PricingActionButton({ ...props }: Props) {
  const { toast } = useToast()

  return (
    <Button
      onClick={() =>
        toast({
          title: "Sorry",
          description:
            "Feature will be available soon, if you need some credits..",
          action: (
            <Link href="mailto:codingwebsa@gmail.com">
              <Button variant="outline" className="whitespace-nowrap" size="sm">
                Contact us
              </Button>
            </Link>
          ),
        })
      }
      size="sm"
      {...props}
    />
  )
}
