import { useSession } from "next-auth/react"

import Avatar from '@mui/material/Avatar';

export default function Profile() {
  const { data: session } = useSession()

  if (!session) {
    return <>
      Access not granted
    </>
  }

  return <>
    <Avatar alt="Remy Sharp" src={session.user.image} />
    <h2>User: {session.user.name}</h2>
    <h2>User: {session.user.email}</h2>
  </>
};