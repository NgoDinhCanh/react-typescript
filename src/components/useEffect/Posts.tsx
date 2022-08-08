import { Button, IconButton, List, ListItem, ListItemText } from '@mui/material';
import { useEffect, useState } from 'react';
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';
import { Box } from '@mui/system';

interface ListPosts {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const tabs = ['posts', 'comments', 'albums'];
export const Posts = () => {
  const [posts, setPosts] = useState<ListPosts[]>([]);
  const [type, setType] = useState('posts');
  const [showButtonGoToTop, setshowButtonGoToTop] = useState(false);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => setPosts(posts));
  }, [type]);
  useEffect(() => {
    const handleScroll = () => setshowButtonGoToTop(window.scrollY >= 200);
    window.addEventListener('scroll', handleScroll);
    console.log('Mounted...');
    return () => {
      window.removeEventListener('scroll', handleScroll);
      console.log('Umounted...');
    };
  }, []);
  return (
    <div>
      {tabs.map((tab, index) => (
        <Button
          key={index}
          variant="outlined"
          size="small"
          onClick={() => setType(tab)}
          color={type === tab ? 'success' : 'primary'}
        >
          {tab}
        </Button>
      ))}
      <List>
        {posts.map((post, index) => (
          <ListItem key={index}>
            <ListItemText primary={post.title ?? post.body} />
          </ListItem>
        ))}
      </List>
      {showButtonGoToTop && (
        <Box position="fixed" right={20} bottom={20}>
          <IconButton color="primary" size="large">
            <VerticalAlignTopIcon />
          </IconButton>
        </Box>
      )}
    </div>
  );
};
