import clientPromise from "/lib/mongodb"

export default async function handler (req, res) {

  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  const email = req.query.email;
  try {

    let posts = await db.collection("posts").find({ author:email }).toArray();
    res.json(posts)

  } catch (e) {
    res.send(e);
  }
  
}