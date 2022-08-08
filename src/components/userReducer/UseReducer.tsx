import React, { useReducer } from 'react';
// Init State
const initState = 0;
// Actions
const UP_ACTION = 'up';
const DOWN_ACTION = 'down';
//Reducer

const reducer = (state: any, action: any) => {
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error('Invalid action');
  }
};

export const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, initState);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
      <button onClick={() => dispatch(UP_ACTION)}>Up</button>
    </div>
  );
};
