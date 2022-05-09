import type { NextApiRequest, NextApiResponse } from "next";
import { getMongoConnection } from "../../../../lib/mongodb";


export default async (req: NextApiRequest, res: NextApiResponse) => {
    const {
        query: { userid },
    } = req;

	if(!userid) {
		return res.status(400).json({ error: "Userid is required!" });
	}

    const con = await getMongoConnection();

    if (!con) {
        return res.status(500).json(userid);
    }

    const todos = await con.db.collection("todos").find({ user: userid }).toArray();

    return res.status(200).json({todos});
}