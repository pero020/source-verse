import clientPromise from "/lib/mongodb"

export default async function handler (req, res) {

  const { category } = req.query

  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  try {
    let filteredPosts = await db.collection("posts").find({"category": category}).sort("creationDate", -1).toArray();
    res.json(filteredPosts);
  } catch (e) {
    res.send(e);
  }
  
}