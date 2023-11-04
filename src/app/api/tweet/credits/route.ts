import { db } from "~/lib/db"
import { getCurrentUser } from "~/lib/session"

export async function GET() {
  const { user } = await getCurrentUser()
  if (!user || !user.id) {
    return new Response("Unauthorize", {
      status: 401,
    })
  }
  try {
    const dbUser = await db.user.findFirst({
      where: {
        id: user.id,
      },
      select: {
        credit: true,
      },
    })

    return new Response(JSON.stringify({ credits: dbUser?.credit }), {
      status: 200,
    })
  } catch (error) {
    return new Response(
      error instanceof Error ? error.message : "Unknown Error",
      {
        status: 500,
      }
    )
  }
}
