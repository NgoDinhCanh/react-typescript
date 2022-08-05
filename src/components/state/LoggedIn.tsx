import { Button, Stack } from '@mui/material';
import React, { useState } from 'react';

export const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogIn = () => {
    setIsLoggedIn(true);
  };
  const handleLogOut = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      <Stack spacing={1}>
        <Button variant="contained" onClick={handleLogIn}>
          Login
        </Button>
        <Button variant="outlined" onClick={handleLogOut}>
          LogOut
        </Button>
      </Stack>
      <div>User is {isLoggedIn ? 'logged in' : 'logged out'}</div>
    </div>
  );
};
