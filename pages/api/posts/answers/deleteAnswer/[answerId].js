import clientPromise from "/lib/mongodb"
import { getSession } from "next-auth/react";
import updateRank from "/utility/updateRank"

export default async function handler (req, res) {
  const session = await getSession({req})

  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  const ObjectId = require('mongodb').ObjectID

  const answerId = req.query.answerId
  const postId = JSON.parse(req.body).postId

  const getDomain = (url) => {
    try {
      url = url.split("//")
      url = url[url.length-1]
      url = url.split("/")[0]
      url = url.split(".")
      url = url[url.length-2] + "." + url[url.length-1]

      return url
    } catch (e) {
      return url
    }
    
  }

  try {
    let url;
    let userData = await db.collection("users").findOne({"email": session.user.email});
    let postData = await db.collection("posts").findOne(
      {"_id": ObjectId(postId)},
      { "answers": { "_id": ObjectId(answerId) }} );

    for (const answer of postData.answers) {
      if (answer._id == answerId) {
        url = answer.url;
        if (answer.author.email != session.user.email) {
          res.status(403).send("Forbidden");
        } else {
          break;
        }
        
      } 
    }
    
    let isDeleted = await db.collection("posts").updateOne( 
      {"_id": ObjectId(postId)},
      { $pull: { "answers": { "_id": ObjectId(answerId) }}} );

    let domainData = await db.collection("domains").aggregate([
      {
        $search: {
          "index": "domainSearch",
          "text": {
            "query": getDomain(url),
            "path": "url",
            "fuzzy": {}
          }
        }
      },
      {
        $limit: 1
      }
    ]).toArray();
    domainData = domainData[0]

    let newSourceScore = userData.stats.averageSourceScore
    if (userData.stats.answersNum-1 === 0) {
      newSourceScore = 0;
    } else if (!domainData) {
      newSourceScore = (userData.stats.averageSourceScore * userData.stats.answersNum - 0) / (userData.stats.answersNum - 1)
    } else {
      newSourceScore = (userData.stats.averageSourceScore * userData.stats.answersNum - domainData.score) / (userData.stats.answersNum - 1)
    }

    let updatedStats = await db.collection("users").updateOne(
      { "email": session.user.email },
      {
        $inc: {
          "stats.answersNum": -1,
          "stats.score": -5
        },
        $set: {
          "stats.averageSourceScore": newSourceScore.toFixed(1)
        }
      }
    )

    updateRank(userData.stats.score - 5, userData.rank.badge, session)

    res.status(200).send();
  } catch (e) {
    console.log(e)
    res.status(500).send(e);
  }
  
}