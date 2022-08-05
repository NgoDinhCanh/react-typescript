import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';

export const TodoList = () => {
  const [job, setJob] = useState<string>('');
  const [jobs, setJobs] = useState<string[]>([]);
  const handleAddTodo = () => {
    setJobs((prev) => [...prev, job]);
    setJob('');
  };
  return (
    <Box>
      <Stack spacing={1} direction="row" justifyContent="center">
        <TextField label="Name Todo" value={job} onChange={(e) => setJob(e.target.value)} />
        <Button variant="contained" color="success" onClick={handleAddTodo}>
          Add
        </Button>
      </Stack>
      <Stack spacing={0} direction="row" justifyContent="center">
        <List>
          {jobs.map((job, index) => (
            <ListItem key={index} disableGutters>
              <ListItemButton>
                <ListItemIcon>
                  <CheckIcon />
                </ListItemIcon>
                <ListItemText primary={job} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Stack>
    </Box>
  );
};
