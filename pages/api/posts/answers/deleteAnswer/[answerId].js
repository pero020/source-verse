import clientPromise from "/lib/mongodb"
import { getSession } from "next-auth/react";

export default async function handler (req, res) {
  const session = await getSession({req})

  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  const ObjectId = require('mongodb').ObjectID

  const answerId = req.query.answerId
  const postId = JSON.parse(req.body).postId

  try {
    let postData = await db.collection("posts").findOne(
      {"_id": ObjectId(postId)},
      { "answers": { "_id": ObjectId(answerId) }} );

    for (const answer in postData.answers) {
      if (answer._id === answerId) {
        if (answer.author.email != session.user.email)
        res.status(403).send("Forbidden");
      } else {
        break;
      }
    }
    
    let isDeleted = await db.collection("posts").updateOne( 
      {"_id": ObjectId(postId)},
      { $pull: { "answers": { "_id": ObjectId(answerId) }}} );

    let updatedStats = await db.collection("users").updateOne(
      { "email": session.user.email },
      {
        $inc: {
          "stats.answersNum": -1,
          "stats.score": -5
        }
      }
    )

    res.status(200).send();
  } catch (e) {
    console.log(e)
    res.status(500).send(e);
  }
  
}