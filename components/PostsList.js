import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

const style = {
  width: '100%',
  maxWidth: "sm",
  bgcolor: 'background.paper',
};

export default function PostsList(props) {
  const posts = props.posts
  console.log(posts)

  function formatDate(date) {
    let formatedDate = date.split("T")[0]
    return(formatedDate)
  }

  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      {posts.map((post) => (
        <div key={post._id}>
        <ListItem button>
          <ListItemText primary={post.title} secondary={post.author.name} />
          <Typography variant="p">{formatDate(post.creationDate)}</Typography>
        </ListItem>
        <Divider />
        </div>
      ))} 
    </List>
  );
}