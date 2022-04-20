import clientPromise from "/lib/mongodb"
import { getSession } from "next-auth/react";

export default async function handler (req, res) {
  const session = await getSession({req})

  let formData = req.body

  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  try {

    if (session.role != "admin") {
      res.status(403).send();
    }

    let userData
    
    if (formData.role === "admin" || formData.role === "user") {
      userData = await db.collection("users").updateOne(
        {"email": formData.email},
        {$set : {
          "role": formData.role,
        },
        // $unset: {
        //   "answerCost": "",
        //   "domainReviewsCount": ""
        // }
      })
    } else {
      userData = await db.collection("users").updateOne(
        {"email": formData.email},
        {$set : {
          "role": formData.role,
          "answerCost": 1,
          "domainReviewsCount": 0
        }
      })
    }
    
    res.status(200).send(userData);
  } catch (e) {
    res.status(500).send(e);
    console.log(e)
  }
  
}