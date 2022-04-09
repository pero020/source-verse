import Link from "next/link"

export default function Forum() {


  return <>
    <Link href="/q&a/public">
      <h1>Public Q&A</h1>
    </Link>
    
    <Link href="/q&a/private">
      <h1>Private Q&A</h1>
    </Link>
  </>
}