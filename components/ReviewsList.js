import { useSession } from "next-auth/react"

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Stack } from "@mui/material"

import DeleteReviewDialog from "/components/DeleteReviewDialog"
  
const style = {
  width: '100%',
  maxWidth: "md",
  bgcolor: 'background.paper',
  borderRadius: '8px',
  px: 3
};

export default function ReviewsList(props) {
  let reviews = props.reviews
  const { data: session } = useSession()

  return (
    <List sx={style}>
    {reviews.map(review => (
      <div key={review._id}>
      <ListItem>
        <ListItemText primary={review.url} secondary={review.description} />
        <Stack direction="row" alignItems="center">
        <Typography>{review.score}</Typography>
        {session && session.user.email === review.author.email && 
        <DeleteReviewDialog url={review.url} getProfileData={props.getProfileData}></DeleteReviewDialog>
        }
        </Stack>
      </ListItem>
      <Divider />
      </div>
    ))}
      
    </List>
  );
}