import { getSession } from "next-auth/react";
import clientPromise from "/lib/mongodb"

export default async function handler (req, res) {
  const session = await getSession({req})

  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  if (session.role !== "admin") {
    res.status(403).send("Forbidden")
  }

  try {

    let usersData = await db.collection("users").find({}).sort({"reportStatus": -1}).toArray();

    res.status(200).json(usersData);
  } catch {
    res.status(500).send(e);
  }




  

  
}