import clientPromise from "/lib/mongodb"
import { getSession } from "next-auth/react";

export default async function handler (req, res) {

  const session = await getSession({req})

  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  const ObjectId = require('mongodb').ObjectID

  const id = req.query.id;

  if (!session) {
    console.log(e)
    res.status(403).send()
    return 1
  }
  try {

    let questionData

    questionData = await db.collection("specialistQuestions").findOne({ "_id": ObjectId(id) });
    
    res.json(questionData)

  } catch (e) {
    console.log(e)
    res.send(e);
  }
  
}