import clientPromise from "/lib/mongodb"
import { getSession } from "next-auth/react";

export default async function handler (req, res) {

  const session = await getSession({req})

  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  const ObjectId = require('mongodb').ObjectID

  if (!session) {
    console.log(e)
    res.status(403).send()
    return 1
  }
  try {

    let questions
    if (session.role === "specialist") {
      questions = await db.collection("specialistQuestions").find({ "specialist.email": session.user.email }).toArray();
    } else {
      questions = await db.collection("specialistQuestions").find({ "author.email": session.user.email }).toArray();
    }

    res.status(200).json(questions)

  } catch (e) {
    console.log(e)
    res.send(e);
  }
  
}