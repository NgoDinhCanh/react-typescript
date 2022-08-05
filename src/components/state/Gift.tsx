import { Button, Typography } from '@mui/material';
import React, { useState } from 'react';

const gifts = ['Iphone 13 Pro Max', 'BMW i8', 'Exciter 150', 'Ipad Pro 2021'];
export const Gift = () => {
  const [gift, setGift] = useState<string>('Empty gift');
  const handleTakeGift = () => {
    const index = Math.floor(Math.random() * gifts.length);
    setGift(gifts[index]);
  };
  return (
    <div>
      <Typography>{gift}</Typography>
      <Button variant="contained" onClick={handleTakeGift}>
        Take Gift
      </Button>
    </div>
  );
};
