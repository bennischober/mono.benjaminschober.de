import mongoose, { Connection, Mongoose } from 'mongoose';

const mongoUrl = process.env.MONGODB_URI as string;
const mongoOptions: mongoose.ConnectOptions = {
    dbName: process.env.MONGODB_DB as string,
};

let cachedClient: Mongoose;
let cachedDB: Connection;

export async function getMongoConnection() {
    if (cachedClient && cachedDB) {
        return {
            client: cachedClient,
            db: cachedDB.db,
        }
    }

    if (!mongoUrl) return;

    const client = await mongoose.connect(mongoUrl, mongoOptions);

    client.connection.on('error', function (err) {
        console.log('Mongoose default connection error: ' + err);
        return null;
    });

    // this might need proper error handling
    // this might need view models for return values

    // for register, consider this: https://coderrocketfuel.com/article/store-passwords-in-mongodb-with-node-js-mongoose-and-bcrypt

    cachedClient = client;
    cachedDB = client.connection;
    return {
        client: client,
        db: client.connection.db,
    };

}