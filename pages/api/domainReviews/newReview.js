import clientPromise from "/lib/mongodb"
import { getSession } from "next-auth/react";

export default async function handler (req, res) {
  const session = await getSession({req})

  let formData = req.body

  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  const Double = require("mongodb").Double;
  const ObjectId = require('mongodb').ObjectID

  try {
    if (session.role !== "specialist") {
      res.status(403).send("forbidden");
    }
    formData.url = formData.url.toLowerCase();

    const prevData = await db.collection("domains").findOne({"url": formData.url})

    if ( prevData ) {

      prevData.reviews.forEach(review => {
        if (review.author.email === session.user.email) {
          res.status(403).send();
          return 1;
        }
      })

      let newScore = 0;
      prevData.reviews.forEach(review => {
        newScore += review.score;
      })
      newScore += formData.score;
      newScore /= prevData.reviews.length+1;

      newScore = newScore.toFixed(1);

      await db.collection("domains").updateOne(
        {"url": formData.url},
        {
          $push: {
            "reviews": {
              "description": formData.description,
              "score": Double(formData.score),
              "_id": ObjectId(),
              "author": {
                "name": session.user.name,
                "email": session.user.email
              },
              "creationDate": new Date()
            }
          },
          $set: {
            "score": Double(newScore)
          }
        }
      );

    } else {
      await db.collection("domains").insertOne(
        {
          "url": formData.url,
          "reviews": [
            {
              "description": formData.description,
              "score": Double(formData.score),
              "_id": ObjectId(),
              "author": {
                "name": session.user.name,
                "email": session.user.email
              },
              "creationDate": new Date()
            }
          ],
          "score": Double(formData.score)
        }

      );
    }

    const userUpdate = await db.collection("users").updateOne(
      {"email": session.user.email},
      {
        $push: {
          "domainReviews": {
            "url": formData.url,
            "description": formData.description,
            "score": Double(formData.score),
            "_id": ObjectId(),
            "author": {
              "name": session.user.name,
              "email": session.user.email
            },
            "creationDate": new Date()
          }
        },
        $inc: {"domainReviewsScore": 1}
      }
    );


    
    res.status(200).send();
  } catch (e) {
    console.log(e)
    res.status(500).send(e);
  }
  
}