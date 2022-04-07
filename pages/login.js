import { useSession, signIn, signOut } from "next-auth/react"
import ResponsiveAppBar from "../components/ResponsiveAppBar.js"

import Image from "next/image"

export default function Login() {
  const { data: session } = useSession()
  if (session) {

    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
        <Image src={session.user.image} width="100px" height="100px"></Image>
        
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}