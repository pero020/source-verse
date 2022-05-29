import clientPromise from "/lib/mongodb"

export default async function handler (req, res) {

  try {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
  
    let url = req.query.url.toLowerCase();
  
    let domainData = await db.collection("domains").aggregate([
      {
        $search: {
          "index": "domainSearch",
          "text": {
            "query": url,
            "path": "url"
          }
        }
      },
      {
        $limit: 1
      }
    ]).toArray();
    
    
    domainData = domainData[0]
    if (!domainData) {
      res.status(404).send("Domain not found");
      return 0;
    }
    res.status(200).json(domainData);
  } catch (e) {
    console.log(e)
    res.status(500).send(e);
  }
  
  }
