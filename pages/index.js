import { useSession } from "next-auth/react"
import Navbar from '../components/Navbar.js'
import Demo from '../components/Demo.js'

export default function Home() {
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    return <>
      <Navbar></Navbar>
      <h1>Hello {session.user.name}</h1>
    </>
  }
  return <div>
    <Navbar></Navbar>
    <Demo></Demo>
  </div>

}
