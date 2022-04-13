import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const style = {
  width: '100%',
  maxWidth: "md",
  bgcolor: 'background.paper',
};

export default function PostsList(props) {
  const posts = props.posts

  function detectMob() {
    return ( ( window.innerWidth <= 800 ) && ( window.innerHeight <= 1000 ) );
  }
  const isMobile = detectMob()

  function formatDate(date) {
    let formatedDate = date.split("T")[0]
    return(formatedDate)
  }
  function setLength(text) {
    let newText
    if (isMobile) {

      newText = text.slice(0, window.innerWidth/10)
    } else {
      newText = text.slice(0, window.innerWidth/10)
    }
    if (newText.length < text.length ) {
      newText = newText + "...";
    }
    return newText
  }

  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      {posts.map((post) => (
        <div key={post._id}>
        <ListItem sx={{px: 0}}>
          <Grid container alignItems={"center"} >

            <Grid item sm={12}>
              <Link underline={"none"} href={"/q&a/public/post/" + post._id}>
                <ListItemText nowrap={"true"} primary={setLength(post.title )} secondary={post.author.name + ", " + formatDate(post.creationDate)} />
              </Link>
            </Grid>

          </Grid>
          
        </ListItem>
        <Divider />
        </div>
      ))} 
    </List>
  );
}