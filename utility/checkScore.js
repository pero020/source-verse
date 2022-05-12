import { PostAdd } from "@mui/icons-material";

export default async function checkScore(score, currBadge) {
  let newBadge = null;
  if (score < 5) {
    if (currBadge !== "bronce1") {
      newBadge = "bronce1"
    } 
  } else if (score >= 5 && score < 10) {
    if (currBadge !== "bronce2") {
      newBadge = "bronce2"
    } 
  } else if (score >= 10) {
    if (currBadge !== "bronce3") {
      newBadge = "bronce3"
    }
  } 

  if (newBadge) {
    const res = await fetch("/api/profile/updateBadge", {
      method: POST,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        newBadge: newBadge
      })

    })
  }
}