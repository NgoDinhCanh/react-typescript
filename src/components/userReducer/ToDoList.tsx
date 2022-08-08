import React, { useReducer, useRef } from 'react';
type ToDoListState = {
  job: string;
  jobs: string[];
};
type ToDoListAction = {
  type: string;
  payload: string;
};
const initState = {
  job: '',
  jobs: [] as string[],
};
const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const DELETE_JOB = 'delete_job';
const setJob = (payload: string) => {
  return {
    type: SET_JOB,
    payload,
  };
};
const addJob = (payload: string) => {
  return {
    type: ADD_JOB,
    payload,
  };
};
const deleteJob = (payload: string) => {
  return {
    type: DELETE_JOB,
    payload,
  };
};

const reducer = (state: ToDoListState, action: ToDoListAction) => {
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload as string,
      };
    case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
    case DELETE_JOB:
      const newJobs = [...state.jobs].filter((e) => {
        return e !== action.payload;
      });
      return {
        ...state,
        jobs: newJobs,
      };
    default:
      throw new Error('Invalid action');
  }
};
export const ToDoList = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs } = state;

  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(''));
    inputRef.current?.focus();
  };
  return (
    <div>
      <h3>Todo</h3>
      <input
        type="text"
        ref={inputRef}
        value={job}
        placeholder="Enter todo..."
        onChange={(e) => {
          dispatch(setJob(e.target.value));
        }}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job} <span onClick={() => dispatch(deleteJob(job))}>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
