import clientPromise from "/lib/mongodb"
import { getSession } from "next-auth/react";

export default async function handler (req, res) {
  const session = await getSession({req})

  let {formData, specialistEmail} = req.body

  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  const ObjectId = require('mongodb').ObjectID

  try {

    if (!session) {
      res.status(403).send()
      return 1;
    }
  
    let userData = await db.collection("users").findOne({"email": session.user.email});
    let specialistData = await db.collection("users").findOne({"email": specialistEmail});

    if (specialistData.answerCost > userData.coins) {
      res.status(405).send()
      return 1
    }

    let setUserQ = await db.collection("users").updateOne(
      {"email": session.user.email},
      {
        $inc: {
          coins: -specialistData.answerCost
        }
      }
    )

    let setspeciaistQ = await db.collection("users").updateOne(
      {"email": session.user.email},
      {
        $inc: {
          coins: specialistData.answerCost
        }
      }
    )
    
    let newQuestion = await db.collection("specialistQuestions").insertOne(
      {
        "title": formData.title,
        "description": formData.description,
        "author": {
          "name": userData.name,
          "email": userData.email
        },
        "specialist":  {
          "name": specialistData.name,
          "email": specialistData.email
        },
        "answered": false,
        "answer": {
          "title": "",
          "description": ""
        },
        "creationDate": new Date(),
      }
    )

    


    res.status(200).send();
  } catch (e) {
    res.status(500).send(e);
  }
  
}