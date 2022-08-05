import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';

type AuthUser = {
  name: string;
  email: string;
};
export const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const handleLogin = () => {
    setUser({
      name: 'Ngo Dinh Canh',
      email: 'canhngo@tlcmodular.com',
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <Box>
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Login
        </Button>
        <Button variant="outlined" color="warning" onClick={handleLogout}>
          Logout
        </Button>
      </Box>
      <Typography variant="h5"> User name is {user?.name}</Typography>
      <Typography variant="h5"> User email is {user?.email}</Typography>
    </div>
  );
};
