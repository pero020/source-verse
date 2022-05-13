import { MongoDBAdapter } from "@next-auth/mongodb-adapter"

import clientPromise from "/lib/mongodb"

export default async function isBlacklisted(email) {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  const Double = require("mongodb").Double;
  try {
    let blacklist = await db.collection("blacklist").find().toArray();

    console.log("blacklist checked")
  
    for (const user of blacklist) {
      if (user.email === email) {
        return true
      }
    }
  
    return false;
  } catch (e) {
    console.log(e)
  }
  
  
}