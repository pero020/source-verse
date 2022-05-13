import clientPromise from "/lib/mongodb"
import { getSession } from "next-auth/react";

export default async function handler (req, res) {
  const session = await getSession({req})

  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  const { coinsNum } = req.body

  if(!session) {
    res.status(403).send()
    return 1
  }

  try {
    const addedCoins = await db.collection("users").updateOne(
    {
      "email": session.user.email
    },
    {
      $inc: {
        "coins": coinsNum
      }
    }
    )

    res.status(200).send(addedCoins)
  } catch (e) {
    res.status(500).send(e)
    return 1
  }
  
  
}