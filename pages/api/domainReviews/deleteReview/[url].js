import clientPromise from "/lib/mongodb"
import { getSession } from "next-auth/react";

export default async function handler (req, res) {
  const session = await getSession({req})

  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  const ObjectId = require('mongodb').ObjectID

  const url = req.query.url

  try {
    
    let domainDeleted = await db.collection("domains").updateOne( 
      {"url": url},
      { 
        $pull: 
        { "reviews": 
          { "author.email": session.user.email }
        }
      } 
    );

    let userDeleted = await db.collection("users").updateOne( 
      {"email": session.user.email},
      { 
        $pull: 
        { "domainReviews": 
          { "url": url }
        }
      } 
    );
    console.log(userDeleted)

    res.status(200).send();
  } catch (e) {
    console.log(e)
    res.status(500).send(e);
  }
  
}