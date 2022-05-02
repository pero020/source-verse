import { MongoDBAdapter } from "@next-auth/mongodb-adapter"

import clientPromise from "/lib/mongodb"

export default async function addUser(token) {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

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
      role: "user"
    }
  
    let addedUser = await db.collection("users").insertOne(userData);
  
    return addedUser;
  
  }
}