"use client"

import React, { useEffect, useState } from "react"
import { useMouse } from "@uidotdev/usehooks"
import { motion } from "framer-motion"

type Props = {}

export default function CustomScrollIndicator({}: Props) {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const updateMousePosition = (e: any) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  return (
    <div className="fixed inset-y-0 left-0 overflow-y-hidden">
      <motion.div
        className="w-[1px] h-[80px] bg-gradient-to-b from-transparent via-white to-transparent -translate-y-1/2 transition-all"
        animate={{
          y: mousePosition.y,
        }}
        transition={{
          y: {
            duration: 0.02,
            ease: "linear",
            repeat: 0,
            type: "spring",
            stiffness: 80,
          },
        }}
      />
    </div>
  )
}
