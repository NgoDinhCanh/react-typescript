import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';

export const Content = () => {
  const [title, setTitle] = useState('');
  useEffect(() => {
    document.title = title;
  });
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((posts) => console.log(posts));
  return (
    <div>
      <TextField value={title} onChange={(e) => setTitle(e.target.value)}></TextField>
    </div>
  );
};
