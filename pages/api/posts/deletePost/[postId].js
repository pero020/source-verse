import clientPromise from "/lib/mongodb"
import { getSession } from "next-auth/react";

export default async function handler (req, res) {
  const session = await getSession({req})

  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  const ObjectId = require('mongodb').ObjectID

  const id = req.query.postId

  try {
    let postData = await db.collection("posts").findOne( {"_id": ObjectId(id)} );
    if (postData.author.email != session.user.email) {
      res.status(403).send("Forbidden");
    }
    let isDeleted = await db.collection("posts").deleteOne( {"_id": ObjectId(id)} );

    let updatedStats = await db.collection("users").updateOne(
      { "email": session.user.email },
      {
        $inc: {
          "stats.postsNum": -1,
        }
      }
    )

    res.status(200).send();
  } catch (e) {
    console.log(e)
    res.status(500).send(e);
  }
  
}