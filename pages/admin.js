import { useSession } from "next-auth/react"
import { Container } from "@mui/material"

import Typography from '@mui/material/Typography';
import EditSpecialistData from "/components/admin/EditSpecialistData"

import ChangeUserRole from "/components/admin/ChangeUserRole"
import UsersListByReportsDialog from "/components/admin/UsersListByReportsDialog"

export default function Admin() {
  const { data: session } = useSession()

  if (!session || session.role !== "admin") {
    return <>
    <Container maxWidth="xl" sx={{mt: 1, px:1}} >
      <p>Access not allowed</p>
    </Container>
    </>
  }

  return <>
  <Container maxWidth="xl" sx={{mt: 2, px:2, py:3, bgcolor: 'primary.main', borderRadius: 2}} >
    <Typography sx={{mb: 2}} variant="h4">Admin</Typography>
    <ChangeUserRole></ChangeUserRole>
    <UsersListByReportsDialog></UsersListByReportsDialog>
    <EditSpecialistData></EditSpecialistData>

  </Container>
  </>
};