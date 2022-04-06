import { MongoDBAdapter } from "@next-auth/mongodb-adapter"

import clientPromise from "/lib/mongodb"

export default async function addUser(token) {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  let userExists = await db.collection("users").findOne({sub: token.sub});

  console.log("pokuso je")

  if (userExists) {
    return "User exists";
  } else {

    let userData = {
      sub: token.sub,
      name: token.name,
      email: token.email,
      picture: token.picture,
    }
  
    let addedUser = await db.collection("users").insertOne(userData);
  
    return addedUser;
  
  }
}