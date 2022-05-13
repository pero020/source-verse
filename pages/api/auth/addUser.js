import { MongoDBAdapter } from "@next-auth/mongodb-adapter"

import clientPromise from "/lib/mongodb"

export default async function addUser(token) {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  const Double = require("mongodb").Double;

  let userExists = await db.collection("users").findOne({sub: token.sub});

  if (userExists) {
    return "User exists";
  } else {

    let userData = {
      sub: token.sub,
      name: token.name,
      email: token.email,
      image: token.picture,
      reportStatus: 0,
      reports: [],
      role: "user",
      stats: {
        upvotes: 0,
        answersNum: 0,
        postsNum: 0,
        averageSourceScore: 0,
        score: Double(0)
      },
      rank: {
        badge: "bronce1",
        name: "Bronce 1"
      }
    }
  
    let addedUser = await db.collection("users").insertOne(userData);
  
    return addedUser;
  
  }
}