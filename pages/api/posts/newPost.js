import clientPromise from "/lib/mongodb"
import { getSession } from "next-auth/react";

export default async function handler (req, res) {
  const session = await getSession({req})

  let formData = req.body

  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  try {

    if (!session) {
      res.status(403).send()
      return 1;
    }

    let userData = await db.collection("users").findOne({"email": session.user.email});
    await db.collection("posts").insertOne(
      {
        "category": formData.category,
        "title": formData.title,
        "description": formData.description,
        "author": {
            "name": userData.name,
            "email": userData.email,
            "image": userData.image,
            "badge": userData.rank.badge
        },
        "creationDate": new Date(),
        "reportStatus": {
            "$numberInt": "0"
        },
        "answeredStatus": {
            "$numberInt": "0"
        },
        "answers": [],
        "reports": []
    }
    );

    let updatedStats = await db.collection("users").updateOne(
      { "email": session.user.email },
      {
        $inc: {
          "stats.postsNum": 1,
        }
      }
    )

    res.status(200).send();
  } catch (e) {
    res.status(500).send(e);
  }
  
}