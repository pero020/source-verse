import { useSession } from "next-auth/react"
import { Container } from "@mui/material"

import Typography from '@mui/material/Typography';

import ChangeUserRole from "/components/admin/ChangeUserRole"
import UsersListByReportsDialog from "/components/admin/UsersListByReportsDialog"

export default function Admin() {
  const { data: session } = useSession()

  if (!session || session.role !== "admin") {
    return <>
    <Container maxWidth="xl" sx={{mt:2, px:1}} >
      <p>Access not allowed</p>
    </Container>
    </>
  }

  return <>
  <Container maxWidth="xl" sx={{mt: 2, px:2, py:3, bgcolor: 'primary', borderRadius: 2}} >
    <Typography variant="h4">Admin</Typography>
    <ChangeUserRole></ChangeUserRole>
    <UsersListByReportsDialog></UsersListByReportsDialog>

  </Container>
  </>
};