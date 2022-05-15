import clientPromise from "/lib/mongodb"

export default async function handler (req, res) {

  const { category, searchTerm } = req.query

  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  let filteredPosts = []

  try {
    
    if (category && !searchTerm) {
      filteredPosts = await db.collection("posts").find({"category": category}).sort("creationDate", -1).limit(50).toArray();
    } else if (!category && searchTerm) {
      filteredPosts = await db.collection("posts").find({ $text: { $search: searchTerm}}).sort( { score: { $meta: "textScore" } } ).limit(50).toArray();
    } else if (!category && !searchTerm) {
      filteredPosts = await db.collection("posts").find().sort("creationDate", -1).limit(50).toArray();
    } else if (category && searchTerm) {
      filteredPosts = await db.collection("posts").find({category: category, $text: { $search: searchTerm}}).sort( { score: { $meta: "textScore" } } ).limit(50).toArray();
    }
    

    res.status(200).json({posts: filteredPosts});
  } catch (e) {
    console.log(e)
    res.status(500).send(e);
  }
  
}