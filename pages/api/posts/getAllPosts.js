import clientPromise from "/lib/mongodb"

export default async function handler (req, res) {

  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  try {
    let allPosts = await db.collection("posts").find().sort("creationDate", -1).limit(50).toArray();
    res.json(allPosts);
  } catch (e) {
    res.send(e);
  }
  
}