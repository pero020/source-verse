import { useSession } from "next-auth/react"
import { Typography } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Stack, Box } from "@mui/material"
import Rating from '@mui/material/Rating';

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
        <Stack
        alignItems="flex-start"
        >
          <Box>
            <ListItemText primary={review.url} secondary={review.description} />
          </Box>
          <Box>
            <Rating name="half-read-only" precision={0.2} value={review.score} readOnly />
          </Box>
        </Stack>
        
      </ListItem>
      <Divider />
      </div>
    ))}
      
    </List>
  );
}