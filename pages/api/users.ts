import type { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse) => {
	console.log("request body", req.body);
	// "simulates" a databse call
	const data = { username: req.body.username, password: req.body.password, name: "Admin" };
	if (req.body.username === "admin@admin" && req.body.password === "admin123") {
		res.status(200).json(data);
	}

	res.status(404).json(data);
}