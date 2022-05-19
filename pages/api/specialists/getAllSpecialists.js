import clientPromise from "/lib/mongodb"

export default async function handler (req, res) {

  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  try {

    let specialists = await db.collection("users").find({ "role": "specialist" }).sort({"domainReviewsScore": -1}).toArray();
    res.status(200).json(specialists)

  } catch (e) {
    res.send(e);
  }
  
}