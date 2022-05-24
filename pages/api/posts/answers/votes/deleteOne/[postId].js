import clientPromise from "/lib/mongodb"
import { getSession } from "next-auth/react";
import updateRank from "/utility/updateRank"

export default async function handler (req, res) {
  const session = await getSession({req})

  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  const ObjectId = require('mongodb').ObjectID

  const postId = req.query.postId
  const { index, voteChange } = req.body
  
  try {
    let postData = await db.collection("posts").findOne(
      {"_id": ObjectId(postId)}
    )
    let userData = await db.collection("users").findOne({"email": postData.answers[index].author.email});
    let isDeleted = await db.collection("posts").updateOne( 
      {"_id": ObjectId(postId)},
      { $pull: { [`answers.${index}.votes`]: { "email": session.user.email }}} 
    );

    let updatedPostScore = await db.collection("users").updateOne(
      {"email": postData.answers[index].author.email},
      {
        $inc: {
          "stats.upvotes": voteChange,
          "stats.score": voteChange
        }
      }
    )

    updateRank(userData.stats.score + voteChange, userData.rank.badge, session, postData.answers[index].author.email)

    res.status(200).send();
  } catch (e) {
    res.status(500).send(e);
  }
  
}