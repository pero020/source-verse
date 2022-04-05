import { useSession, signIn, signOut } from "next-auth/react"
import Navbar from '../components/Navbar.js'

export default function Login() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <Navbar></Navbar>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
        <img src={session.user.image}></img>
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