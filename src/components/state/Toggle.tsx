import { Button } from '@mui/material';
import { useState } from 'react';
import { Posts } from '../useEffect/Posts';

export const Toggle = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <Button variant="contained" onClick={() => setToggle(!toggle)}>
        Toggle
      </Button>
      {toggle && <Posts />}
    </>
  );
};
