// src/App.jsx
import { useState } from 'react';
import { Routes, Route } from 'react-router';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import MailboxList from './components/MailboxList/MailboxList';
// import MailboxList from './components/MailboxList/MailboxList';
// import MailboxForm from './components/MailboxForm/MailboxForm';
// import MailboxDetails from './components/MailboxDetails/MailboxDetails';

const initialStateMailboxes = [
  {  _id: 1, boxSize: 'Small', boxOwnerName: 'Alex',},
  {  _id: 2, boxSize: 'Medium', boxOwnerName: 'Sylvia',},
  {  _id: 3, boxSize: 'Large', boxOwnerName: 'Daniel',},
  {  _id: 4, boxSize: 'Super-Size', boxOwnerName: 'John',},
];

const App = () => {
  const [mailboxes, setMailboxes] = useState(initialStateMailboxes);
  return (
    <>
      <nav>
        <NavBar/>
      </nav>
      <h1>Digital Post Office!</h1>
      <Routes><MailboxList className='initialStateMailboxes' mailboxes={mailboxes}/></Routes>
      
    </>
  );
};

export default App;


