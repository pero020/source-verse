import clientPromise from "/lib/mongodb"

export default async function handler (req, res) {

  const email = req.query.email;

  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  let userData = await db.collection("users").findOne({email: email});

  res.json(userData);
  
}