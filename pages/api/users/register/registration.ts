import type { NextApiRequest, NextApiResponse } from "next";
import { getMongoConnection } from "../../../../lib/mongodb";
import { v4 as uuidv4 } from 'uuid';
import dayjs from "dayjs";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const reqData = { name: req.body.name, username: req.body.email, password: req.body.password, userid: uuidv4(), registerdate: dayjs().format() };

    const con = await getMongoConnection();

    if (!con) {
        return res.status(500).json(reqData);
    }

    // https://stackoverflow.com/questions/68573409/how-to-insert-data-in-mongodb-using-mongoose-in-typescript
    const user = con.db.collection("users").insertOne(reqData, function (err, records) {
        console.log("Record added as " + records);
    });

    return res.status(200).json({user});
}