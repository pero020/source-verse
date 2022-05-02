import clientPromise from "/lib/mongodb"

export default async function handler (req, res) {

  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  const ObjectId = require('mongodb').ObjectID

  const id = req.query.id;

  try {
    let specialistData = await db.collection("users").findOne( {"_id": ObjectId(id)} );
    res.status(200).json(specialistData)

  } catch (e) {
    res.send(e);
  }
  
}