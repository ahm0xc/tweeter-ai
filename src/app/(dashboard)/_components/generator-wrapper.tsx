"use client"

import React, { useState } from "react"

import GenerateForm from "~/components/generate-form"
import TweetPlaceholder from "~/components/tweet-placeholder"

interface Props {}

export default function GeneratorWrapper({}: Props) {
  const [content, setContent] = useState<string | null>("")
  const [isFetching, setIsFetching] = useState<boolean>(false)

  return (
    <>
      <section>
        <GenerateForm
          setContent={setContent}
          setIsFetching={setIsFetching}
          isFetching={isFetching}
          className="my-8"
        />
      </section>
      {(content || isFetching) && (
        <TweetPlaceholder content={content || ""} isLoading={isFetching} />
      )}
    </>
  )
}
