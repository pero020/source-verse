import clientPromise from "/lib/mongodb"
import { getSession } from "next-auth/react";

export default async function handler (req, res) {
  const session = await getSession({req})

  let formData = req.body
  const postId = req.query.postId;

  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  const ObjectId = require('mongodb').ObjectID

  try {
    let userData = await db.collection("users").findOne({"email": session.user.email});
    await db.collection("posts").updateOne(
      {"_id": ObjectId(postId)},
      {
        $push: {
          "answers": {
            "description": formData.description,
            "url": formData.url,
            "reportStatus": {
                "$numberInt": "0"
            },
            "votes": [],
            "_id": ObjectId(),
            "author": {
              "name": userData.name,
              "email": userData.email
            },
            "creationDate": new Date()
          }
        }
      }
    );

    let updatedStats = await db.collection("users").updateOne(
      { "email": session.user.email },
      {
        $inc: {
          "stats.answersNum": 1,
          "stats.score": 5
        }
      }
    )

    res.status(200).send();
  } catch (e) {
    res.status(500).send(e);
    console.log(e)
  }
  
}