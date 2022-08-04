import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import React, { useState } from 'react';
import WelcomeMessage from './WelcomeMessage';

// import { makeStyles } from '@mui/material/styles';

// const useStyles = makeStyles({
//   root: {
//     color: 'white',
//     boderBottom: '1px solid white',
//   },
// });

const Navbar = () => {
  //state
  const [position, setPosition] = useState<string>('Full Stack Developer');
  const onPositionChange = (event: SelectChangeEvent<string>) => setPosition(event.target.value);
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Box display="flex" justifyContent="space-between" alignItems="center" width={1} py={2}>
          <Typography variant="h6">My movies</Typography>
          <Box textAlign="center">
            <WelcomeMessage position={position} country="Singapore" />
            <Box mt={1}>
              <FormControl>
                <Select value={position} onChange={onPositionChange}>
                  <MenuItem value="Full Stack Developer">Full Stack Developer</MenuItem>
                  <MenuItem value="Font End Developer">Font End Developer</MenuItem>
                  <MenuItem value="Back End Developer">Back End Developer</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
