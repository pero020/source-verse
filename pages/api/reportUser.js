import clientPromise from "/lib/mongodb"
import { getSession } from "next-auth/react";
import updateRank from "/utility/updateRank"

export default async function handler (req, res) {
  const session = await getSession({req})

  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  const { reportEmail } = req.body
  
  try {

    if (!session) {
      res.status(403).send()
      return 1
    }
    
    const userData = await db.collection("users").findOne(
      {"email": reportEmail}
    )
    
    if (userData.reports.includes(session.user.email)) {
      res.status(405).send()
      return 1
    }

    const isReported = await db.collection("users").updateOne(
      {"email": reportEmail},
      {
        $push: {
          "reports": session.user.email
        },
        $inc: {
          "reportStatus": 1,
          "stats.score": -1
        },
      }
    )

    res.status(200).send();
  } catch (e) {
    console.log(e)
    res.status(500).send(e);
  }
  
}