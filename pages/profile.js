import { useState, useEffect} from "react"
import { useSession } from "next-auth/react"

import LinearProgress from '@mui/material/LinearProgress';
import Avatar from '@mui/material/Avatar';

export default function Profile() {
  const { data: session } = useSession()
  const [userData, setUserData] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function getData() {
      const res = await fetch("api/getUser/" + session.user.email);
      const data = await res.json();
      setUserData(data)
      setIsLoading(false)
    }
    if (session) {
      getData()
    }
  }, [])

  if (!session) {
    return <>
      <p>Access not allowed</p>
    </>
  }
  if (isLoading) {
    return <>
      <LinearProgress />
    </>
  }

  return <>
    <Avatar alt="Remy Sharp" src={userData.image} />
    <h2>User: {userData.name}</h2>
    <h2>User: {userData.email}</h2>
  </>
};