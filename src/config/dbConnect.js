import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb+srv://KingOfNothing:125678943@kingofnothing.huxpw63.mongodb.net/?retryWrites=true&w=majority")

let commentsCollection

try {
    await client.connect()

    const db = client.db("MusicComments")
    commentsCollection = db.collection("comments")

    console.log("Database connection is done")

} catch (err) {
    console.log(`Cannot connect to mongo db: ${err}`)
}

export { commentsCollection }