import clientPromise from "/lib/mongodb"
import { getSession } from "next-auth/react";

export default async function handler (req, res) {
  const session = await getSession({req})

  let formData = req.body

  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  try {
    let userData = await db.collection("users").findOne({"email": session.user.email});
    await db.collection("posts").insertOne(
      {
        "category": formData.category,
        "title": formData.title,
        "description": formData.description,
        "author": {
            "name": userData.name,
            "email": userData.email,
            "image": userData.image
        },
        "creationDate": new Date(),
        "reportStatus": {
            "$numberInt": "0"
        },
        "answeredStatus": {
            "$numberInt": "0"
        },
        "answers": []
    }
    );
    res.status(200).send();
  } catch (e) {
    res.status(500).send(e);
  }
  
}