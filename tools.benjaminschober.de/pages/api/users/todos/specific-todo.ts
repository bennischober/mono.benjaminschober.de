import type { NextApiRequest, NextApiResponse } from "next";
import { getMongoConnection } from "../../../../lib/mongodb";


export default async (req: NextApiRequest, res: NextApiResponse) => {
    const {
        query: { postid },
    } = req;

    if (!postid) {
        return res.status(400).json({ error: "Postid is required!" });
    }

    const con = await getMongoConnection();

    if (!con) {
        return res.status(500).json(postid);
    }

    const todo = await con.db.collection("todos").findOne({ "meta.postid": postid });

    return res.status(200).json({ todo });
}