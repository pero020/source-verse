import Link from 'next/link'

export default function Navbar () {

  return <div>
    <Link href="/">
      <img width="200px" src="../img/logo_s_i.png"></img>
    </Link>
    <Link href="/login">
      <a>Log in</a>
    </Link>
  </div>

}