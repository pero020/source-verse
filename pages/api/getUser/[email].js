import { getSession } from "next-auth/react";
import clientPromise from "/lib/mongodb"

export default async function handler (req, res) {
  const session = await getSession({req})

  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  const email = req.query.email;

  try {
    let userData = await db.collection("users").findOne({email: email});

    // if (userData.email === session.user.email) {
      res.status(200).json(userData);
      // } else {
      //   res.status(403).send("Forbidden")
    // }
  } catch (e) {
    console.log(e)
    res.status(500).send()
  }

  

  
  
}