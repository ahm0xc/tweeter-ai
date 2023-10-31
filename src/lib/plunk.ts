import Plunk from "@plunk/node"
import { env } from "~/env.mjs"

export const plunk = new Plunk(env.PLUNK_API_KEY)
