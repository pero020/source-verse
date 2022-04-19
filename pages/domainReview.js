import { useSession } from "next-auth/react"

export default function Admin() {
  const { data: session } = useSession()

  if (session.role !== "specialist") {
    return <>
      <p>Access not allowed</p>
    </>
  }

  return <>
    <h1>Domain Reviews Page</h1>
  </>
};