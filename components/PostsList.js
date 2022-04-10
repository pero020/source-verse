import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const style = {
  width: '100%',
  maxWidth: "sm",
  bgcolor: 'background.paper',
};

export default function PostsList(props) {
  const posts = props.posts
  console.log(posts)
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      {posts.map((post) => (
        <div key={post._id}>
        <ListItem button>
          <ListItemText primary={post.title} secondary={post.author.name} />
        </ListItem>
        <Divider />
        </div>
      ))} 
    </List>
  );
}