import { env } from "~/env.mjs"
import { ConversationChain } from "langchain/chains"
import { Cohere } from "langchain/llms/cohere"
import {
  ChatPromptTemplate,
  HumanMessagePromptTemplate,
  SystemMessagePromptTemplate,
} from "langchain/prompts"
import { z } from "zod"

const COHERE_API_KEY = env.COHERE_API_KEY

const bodySchema = z.object({
  topic: z.string().max(300, { message: "topic length is too large" }),
  style: z.string()
})

export async function POST(request: Request) {
  const body = await request.json()
  const parseResult = bodySchema.safeParse(body)
  if (!parseResult.success) {
    return new Response(JSON.stringify(parseResult.error), {
      status: 400,
    })
  }

  try {
    const chatPrompt = ChatPromptTemplate.fromMessages([
      SystemMessagePromptTemplate.fromTemplate(
        `You are a informative AI named twitlify who generates twitter posts. Now create a captivating and thought-provoking Twitter post on the given topic in a ${parseResult.data.style} way. Share your insights or predictions about the topic. Don't put unnecessary talks and just provide answer of information according to the topic. Make sure that it should be short (200 characters or less).`
      ),
      HumanMessagePromptTemplate.fromTemplate("{input}"),
    ])

    const chain = new ConversationChain({
      prompt: chatPrompt,
      llm: new Cohere({
        apiKey: COHERE_API_KEY,
        temperature: 0.9,
        maxTokens: 250,
        maxRetries: 1,
      }),
    })

    const answer = await chain.call({
      input: `TOPIC: ${parseResult.data.topic}`,
    })

    return new Response(JSON.stringify(answer.response), {
      status: 201,
    })
  } catch (error) {
    console.error("🚀 ~ file: route.ts:40 ~ POST ~ error:", error)
    return new Response("Something went wrong", {
      status: 500,
    })
  }
}
