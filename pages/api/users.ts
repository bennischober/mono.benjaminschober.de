import { getSession } from "next-auth/react"
import type { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // "simulates" a databse call
  const admin = {username: "admin@admin", password: "admin"};
  res.send(JSON.stringify(admin, null, 2))
}