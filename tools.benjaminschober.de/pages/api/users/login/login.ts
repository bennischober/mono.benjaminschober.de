import type { NextApiRequest, NextApiResponse } from "next";
import { getMongoConnection } from "../../../../lib/mongodb";
import bcrypt from "bcryptjs";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const reqData = { username: req.body.username, password: req.body.password };

	if (!reqData.username || !reqData.password) {
		return res.status(400).json({ error: "Username and password are required!" });
	}

	const con = await getMongoConnection();

	if (!con) {
		return res.status(500).json(reqData);
	}

	const user = await con.db.collection("users").findOne({ username: reqData.username });
	if (!user) {
		return res.status(404).json(reqData);
	}

	if (!bcrypt.compareSync(reqData.password, user.password)) {
		return res.status(401).json(reqData);
	}

	return res.status(200).json({
		id: user._id,
		name: user.name,
		username: user.username,
		userid: user.userid,
	});
}