import clientPromise from "/lib/mongodb"

export default async function handler (req, res) {

  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
  
    const url = req.query.url;
  
    let domainData = await db.collection("domains").findOne({url: url});

    if (!domainData) {
      res.status(404).send("Domain not found");
      return 0;
    }

    res.status(200).json(domainData);
  } catch (e) {
    res.status(500).send(e);
  }
  
  }
