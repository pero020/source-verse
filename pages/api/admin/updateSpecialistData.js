import clientPromise from "/lib/mongodb"
import { getSession } from "next-auth/react";

export default async function handler (req, res) {
  const session = await getSession({req})

  let formData = req.body

  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  const Double = require("mongodb").Double;

  try {

    if (session.role != "admin") {
      res.status(403).send();
    }

    let userData = await db.collection("users").findOne({email: formData.email})

    if (!userData) {
      res.status(403).send();
      return 1
    }

    if (userData.role !== "specialist") {
      console.log("not a specialist")
      res.status(405).send();
      return 1
    }

    let userUpdated = await db.collection("users").updateOne(
      {email: formData.email},
      {$set: {
        "answerCost": formData.answerCost,
        "category": formData.category
      }}
      )
    
    res.status(200).send(userUpdated);
  } catch (e) {
    res.status(500).send(e);
    console.log(e)
  }
  
}