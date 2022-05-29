import clientPromise from "/lib/mongodb"

export default async function handler (req, res) {

  try {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
  
    let email = req.body.email;
    let url = req.body.url.toLowerCase();
    let vote = req.body.vote;

    const prevData = await db.collection("domains").findOne({"url": url})

    if (vote === -1 && prevData) {
      await db.collection("domains").updateOne(
        {"url": url},
        {
          $pull: {
            "communityVotes": email
          }
        }
      )
    } else if (vote === -1 && !prevData) {

    } else if (vote === 1  && prevData) {
      if (prevData.communityVotes.includes(email)) {
        res.status(200).send()
        return 1;
      }
      await db.collection("domains").updateOne(
        {"url": url},
        {
          $push: {
            "communityVotes": email
          }
        }
      )
    } else {
      await db.collection("domains").insertOne(
        {
          "url": url,
          "reviews": [],
          "communityVotes": [email],
          "score": 0
        }

      );
    }
    
    res.status(200).send();
  } catch (e) {
    console.log(e)
    res.status(500).send(e);
  }
  
  }
