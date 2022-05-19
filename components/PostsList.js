import { Avatar } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const style = {
  width: '100%',
  maxWidth: "md",
  bgcolor: 'background.paper',
  borderRadius: '8px',
  px: 3
};

export default function PostsList(props) {
  const posts = props.posts

  function formatDate(date) {
    let formatedDate = date.split("T")[0]
    return(formatedDate)
  }

  function maxLength(text) {
    let newText = null
    if (text.length > 75) {

      newText = text.slice(0, 75)
      newText = newText + "...";
      console.log(newText)
    } else {
      newText = text
    }
    
    return newText
  }



  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
    {posts.length === 0 && <Typography>No results</Typography>}
      {posts.map((post) => (
        <div key={post._id}>
        <ListItem sx={{px: 0}}>
          <Grid container alignItems={"center"} >

            <Grid item xs={12}>
              <Link underline={"none"} href={"/q&a/public/post/" + post._id}>
                <Stack direction="row" spacing={1} justifyContent="space-between">
                    <ListItemText nowrap={"true"} sx={{color: "white"}} primary={maxLength(post.title)} secondary={post.category} />
                </Stack>
              </Link>
                
                <Stack direction="row" spacing={1} justifyContent="right" alignItems="center">
                  <Chip
                    avatar={<Avatar alt={props.authorsData.find(author => author.email === post.author.email).name} src={"/badges/" + props.authorsData.find(author => author.email === post.author.email).rank.badge + ".svg"} />}
                    size="small"
                    label={props.authorsData.find(author => author.email === post.author.email).name}
                    variant="contained"
                  />
                  <Chip size="small" label={formatDate(post.creationDate)} color="secondary" />
                </Stack>
            </Grid>

          </Grid>
          
        </ListItem>
        <Divider light/>
        </div>
      ))} 
    </List>
  );
}