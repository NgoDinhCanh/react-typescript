import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { LoggedIn } from './components/state/LoggedIn';
import { User } from './components/state/User';
import { Counter } from './components/state/Counter';
import { Gift } from './components/state/Gift';
import { ListCheckBox } from './components/state/ListCheckBox';
import { TodoList } from './components/state/TodoList';
import { Toggle } from './components/state/Toggle';
import { UseCallback } from './components/useCallback/UseCallback';
import { UseMemo } from './components/useMemo/UseMemo';
import { UseReducer } from './components/userReducer/UseReducer';
import { ToDoList } from './components/userReducer/ToDoList';
const personName = {
  firstName: 'Ngo',
  lastName: 'Canh',
};
const personNameList = [
  {
    firstName: 'Ngo',
    lastName: 'Canh',
  },
  {
    firstName: 'Thao',
    lastName: 'Huyen',
  },
  {
    firstName: 'Tran',
    lastName: 'Vo',
  },
];
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="App">
        <Greet name="Ngo Dinh Canh" messageCount={20} isLoggedIn={true}></Greet>
        <Person name={personName}></Person>
        <PersonList names={personNameList}></PersonList>
        <Status status="success"></Status>
        <Heading>Hello may cung</Heading>
        <Oscar>
          <Heading>Ngo Dinh Canh </Heading>
        </Oscar>
        <LoggedIn></LoggedIn>
        <User></User>
        <Counter />
        <Gift />
        <ListCheckBox />
        <TodoList />
        <Toggle />
        <UseCallback />
        <UseMemo />
        <UseReducer />
        <ToDoList />
      </div>
    </div>
  );
}

export default App;
