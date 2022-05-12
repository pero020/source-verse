import clientPromise from "/lib/mongodb"
import { getSession } from "next-auth/react";

export default async function handler (req, res) {
  const session = await getSession({req})

  let { newBadge } = req.body;
  console.log(newBadge)

  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  try {
    if (!session) {
      res.status(403).send();
      return 1;
    }
  
    let changedBadge = await db.collection("users").updateOne(
      {"email": session.user.email},
      {
        $set: {
          badge: newBadge
        }
      }
    )
    console.log(changedBadge)

    res.status(200).send();
  } catch (e) {
    res.status(500).send(e);
  }
  


}