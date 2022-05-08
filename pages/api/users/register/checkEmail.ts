import type { NextApiRequest, NextApiResponse } from "next";
import { getMongoConnection } from "../../../../lib/mongodb";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const {
        query: { username },
        method,
    } = req;

    const con = await getMongoConnection();

    // connection error
    if (!con) {
        return res.status(500).json({ username: username });
    }

    // check, if user exists
    const user = await con.db.collection("users").findOne({ username: username });
    if (!user) {
        return res.status(200).json({ username: username });
    }

    // user is in db, send 409!
    return res.status(409).json({ username: username });
}