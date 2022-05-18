import clientPromise from "/lib/mongodb"
import { getSession } from "next-auth/react";

export default async function updateRank(score, currBadge, session) {

  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  console.log(score)
  let newBadge = null;
  let newRankName = null;
  if (score < 10) {
    if (currBadge !== "bronce1") {
      newBadge = "bronce1"
      newRankName = "Bronce 1"
    } 
  } else if (score >= 10 && score < 25) {
    if (currBadge !== "bronce2") {
      newBadge = "bronce2"
      newRankName = "Bronce 2"
    } 
  } else if (score >= 50 && score < 100) {
    if (currBadge !== "bronce3") {
      newBadge = "bronce3"
      newRankName = "Bronce 3"
    }
  } else if (score >= 100 && score < 150) {
    if (currBadge !== "silver1") {
      newBadge = "silver1"
      newRankName = "Silver 1"
    }
  } else if (score >= 150 && score < 250) {
    if (currBadge !== "silver2") {
      newBadge = "silver2"
      newRankName = "Silver 2"
    }
  } else if (score >= 250 && score < 400) {
    if (currBadge !== "silver3") {
      newBadge = "silver3"
      newRankName = "Silver 3"
    }
  } else if (score >= 400 && score < 600) {
    if (currBadge !== "gold1") {
      newBadge = "gold1"
      newRankName = "Gold 1"
    }
  } else if (score >= 600 && score < 1000) {
    if (currBadge !== "gold2") {
      newBadge = "gold2"
      newRankName = "Gold 2"
    }
  } else if (score >= 1000 && score < 1500) {
    if (currBadge !== "gold3") {
      newBadge = "gold3"
      newRankName = "Gold 3"
    }
  } 

  if (newBadge) {
    try {
      if (!session) {
        res.status(403).send();
        return 1;
      }
      let changedBadge = await db.collection("users").updateOne(
        {"email": session.user.email},
        {
          $set: {
            "rank.badge": newBadge,
            "rank.name": newRankName
          }
        }
      )
    } catch (e) {
      console.log(e)
    }
  }
  
  
}