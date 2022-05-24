import clientPromise from "/lib/mongodb"
import { getSession } from "next-auth/react";
import updateRank from "/utility/updateRank"

export default async function handler (req, res) {
  const session = await getSession({req})

  let formData = req.body
  const postId = req.query.postId;

  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  const ObjectId = require('mongodb').ObjectID

  const getDomain = (url) => {
    try {
      url = url.split("//")
      url = url[url.length-1]
      url = url.split("/")[0]
      url = url.split(".")
      url = url[url.length-2] + "." + url[url.length-1]

      if (!url) {
        url="nourl"
      }

      return url
    } catch (e) {
      return url
    }
    
  }

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
              "email": userData.email,
              "badge": userData.rank.badge
            },
            "creationDate": new Date(),
            "reports": []
          }
        }
      }
    );

    

    let domainData = await db.collection("domains").aggregate([
      {
        $search: {
          "index": "domainSearch",
          "text": {
            "query": getDomain(formData.url),
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
    if (!domainData) {
      newSourceScore = (userData.stats.averageSourceScore * userData.stats.answersNum + 1) / (userData.stats.answersNum + 1)
    } else {
      newSourceScore = (userData.stats.averageSourceScore * userData.stats.answersNum + domainData.score) / (userData.stats.answersNum + 1)
    }
    
    console.log(newSourceScore)

    let updatedStats = await db.collection("users").updateOne(
      { "email": session.user.email },
      {
        $inc: {
          "stats.answersNum": 1,
          "stats.score": 5
        },
        $set: {
          "stats.averageSourceScore": newSourceScore.toFixed(1)
        }
      }
    )

    updateRank(userData.stats.score + 5, userData.rank.badge, session, session.user.email)

    res.status(200).send();
  } catch (e) {
    res.status(500).send(e);
    console.log(e)
  }
  
}