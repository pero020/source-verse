import { useSession, signIn, signOut } from "next-auth/react"
import Navbar from '../components/Navbar.js'

// import clientPromise from "../lib/mongodb";

import Image from "next/image"

export default function Login() {
  const { data: session } = useSession()
  if (session) {

    return (
      <>
        <Navbar></Navbar>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
        <Image src={session.user.image} width="100px" height="100px"></Image>
        
      </>
    )
  }
  return (
    <>
      <Navbar></Navbar>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}

// export async function getServerSideProps(context) {
//   const client = await clientPromise;

//   const db = client.db(process.env.MONGODB_DB);

//   let users = await db.collection("users").find({}).toArray();
//   users = JSON.parse(JSON.stringify(users));

//   return {
//     props: { users },
//   };
// }