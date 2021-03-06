import { getSession } from "next-auth/react";
import clientPromise from "/lib/mongodb"

export default async function handler (req, res) {
  const session = await getSession({req})

  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  if (session.role !== "admin") {
    res.status(403).send("Forbidden")
  }

  const email = req.query.email;

  try {

    let usersData = await db.collection("users").deleteOne({"email": email});
    let userPosts = await db.collection("posts").deleteMany({"author.email": email})
    let userAnswers = await db.collection("posts").updateMany({}, {$pull: {"answers": {"author.email": email} }})
    let isBlacklisted = await db.collection("blacklist").insertOne({"email": email})

    res.status(200).json(usersData);
  } catch (e) {
    console.log(e)
    res.status(500).send(e);
  }




  

  
}