import { Button, Typography } from '@mui/material';
import React, { useState } from 'react';
const orders = [100, 200, 300];
export const Counter = () => {
  const [counter, setCounter] = useState(() => {
    const total = orders.reduce((total, cur) => {
      return total + cur;
    });
    return total;
  });
  const handleCounter = () => {
    setCounter(counter + 10);
  };
  return (
    <div>
      <Typography variant="h2">{counter}</Typography>
      <Button variant="contained" onClick={handleCounter}>
        Increase
      </Button>
    </div>
  );
};
