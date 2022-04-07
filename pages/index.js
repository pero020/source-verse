import { useSession } from "next-auth/react"

import Image from 'next/image'

import ResponsiveAppBar from "../components/ResponsiveAppBar.js"
import Demo from '../components/Demo.js'

export default function Home() {
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    return <>
      <h1>Hello {session.user.name}</h1>
      <img src={session.user.image} ></img>
    </>
  }
  return <>
    {/* <Demo></Demo> */}
    <h1>Home page</h1>
  </>

}
