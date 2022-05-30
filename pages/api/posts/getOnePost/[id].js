import clientPromise from "/lib/mongodb"

export default async function handler (req, res) {

  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  const ObjectId = require('mongodb').ObjectID

  const id = req.query.id;

  const getDomain = (url) => {
    try {
      url = url.split("//")
      url = url[url.length-1]
      url = url.split("/")[0]
      url = url.split(".")
      url = url[url.length-2] + "." + url[url.length-1]

      return url
    } catch (e) {
      return url
    }
    
  }

  const setSourceScores = async (postData) => {
    for (const answer of postData.answers) {
      let domainData = await db.collection("domains").aggregate([
        {
          $search: {
            "index": "domainSearch",
            "text": {
              "query": getDomain(answer.url),
              "path": "url",
            }
          }
        },
        {
          $limit: 1
        }
      ]).toArray();
      
      domainData = domainData[0]
      if (!domainData) {
        answer["sourceScore"] = null;
        continue;
      }

      answer["sourceScore"] = domainData.score;
      if (domainData.communityVotes) {
        answer["communityVotes"] = domainData.communityVotes;
      } else {
        answer["communityVotes"] = [];
      }
    };
  }


  try {
    let postData = await db.collection("posts").findOne( {"_id": ObjectId(id)} );
    await setSourceScores(postData);

    res.status(200).json(postData);
  } catch (e) {
    console.log(e)
    res.send(e);
  }
  
}