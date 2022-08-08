import { Button } from '@mui/material';
import { useState } from 'react';
import { Avatar } from '../useEffect/Avatar';
import { Count } from '../useEffect/Count';
import { Countdown } from '../useEffect/Countdown';
import { Posts } from '../useEffect/Posts';
import { Resize } from '../useEffect/Resize';

export const Toggle = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <Button variant="contained" onClick={() => setToggle(!toggle)}>
        Toggle
      </Button>
      {toggle && <Count />}
      {toggle && <Avatar />}
      {toggle && <Countdown />}
      {toggle && <Resize />}
      {toggle && <Posts />}
    </>
  );
};
