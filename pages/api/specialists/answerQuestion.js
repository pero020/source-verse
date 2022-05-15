import clientPromise from "/lib/mongodb"
import { getSession } from "next-auth/react";

export default async function handler (req, res) {
  const session = await getSession({req})

  let {formData, id} = req.body

  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  const ObjectId = require('mongodb').ObjectID

  try {

    if (!session && session.user.role !== "specialist") {
      res.status(403).send()
      return 1;
    }

    const questionData = await db.collection("specialistQuestions").findOne(
      {"_id": ObjectId(id)}
    )

    if (questionData.specialist.email !== session.user.email) {
      res.status(403).send()
      return 1;
    }

    const answered = await db.collection("specialistQuestions").updateOne(
      {"_id": ObjectId(id)},
      {
        $set: {
          "answer.title": formData.title,
          "answer.description": formData.description,
          "answered": true
        }

      }
    )
   


    res.status(200).send();
  } catch (e) {
    console.log(e)
    res.status(500).send(e);
  }
  
}