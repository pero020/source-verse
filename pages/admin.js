import { useSession } from "next-auth/react"

export default function Admin() {
  const { data: session } = useSession()

  if (session.role !== "admin") {
    return <>
      <p>Access not allowed</p>
    </>
  }

  return <>
    <h1>Admin Page</h1>
  </>
};