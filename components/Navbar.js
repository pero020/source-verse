import { useSession } from "next-auth/react"

import Link from 'next/link'

export default function Navbar () {
  const { data: session, status } = useSession();

  return <div>
    <Link href="/">
      <img width="200px" src="../img/logo_s_i.png"></img>
    </Link>
    {status==="unauthenticated" &&
      <Link href="/login">
        <a>Log in</a>
      </Link>
    }
    {status==="authenticated" &&
      <Link href="/login">
        <a>Profile</a>
      </Link>
    }
  </div>

}