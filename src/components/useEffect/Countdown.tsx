import { useEffect, useState } from 'react';

export const Countdown = () => {
  const [countdown, setCountdown] = useState(180);
  useEffect(() => {
    const setTimeoutId = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);
    return () => {
      clearTimeout(setTimeoutId);
    };
  }, [countdown]);
  return (
    <div>
      <h1>{countdown}</h1>
    </div>
  );
};
