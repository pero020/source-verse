import clientPromise from "/lib/mongodb"
import { getSession } from "next-auth/react";
import updateRank from "/utility/updateRank"

export default async function handler (req, res) {
  const session = await getSession({req})

  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  const ObjectId = require('mongodb').ObjectID

  const postId = req.query.postId
  const {answerId, voteChange, index, prevVote} = req.body
  
  try {
    let postData = await db.collection("posts").findOne(
      {"_id": ObjectId(postId)}
    )
    
    let userData = await db.collection("users").findOne({"email": postData.answers[index].author.email});

    let isDeleted = await db.collection("posts").updateOne( 
      {"_id": ObjectId(postId)},
      { $pull: { [`answers.${index}.votes`]: { "email": session.user.email }}} );
      
    let isPushed = await db.collection("posts").updateOne( 
      {"_id": ObjectId(postId)},
      { $push: { [`answers.${index}.votes`]: { "email": session.user.email, "status": voteChange }}} );

    let updatedPostScore = await db.collection("users").updateOne(
      {"email": postData.answers[index].author.email},
      {
        $inc: {
          "stats.upvotes": voteChange - prevVote,
          "stats.score": voteChange - prevVote
        }
      }
    )

    updateRank(userData.stats.score + voteChange - prevVote, userData.rank.badge, session)

    res.status(200).send();
  } catch (e) {
    console.log(e)
    res.status(500).send(e);
  }
  
}