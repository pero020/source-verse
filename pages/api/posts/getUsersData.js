import clientPromise from "/lib/mongodb"

export default async function handler (req, res) {

  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  const emailsList = req.body

  try {
    let allUsers = await db.collection("users").find({"email": {$in: emailsList}}).toArray();
    res.json(allUsers);
  } catch (e) {
    res.send(e);
  }
  
}