// src/App.jsx
import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import MailboxList from './components/MailboxList/MailboxList';
// import MailboxList from './components/MailboxList/MailboxList';
// import MailboxForm from './components/MailboxForm/MailboxForm';
// import MailboxDetails from './components/MailboxDetails/MailboxDetails';

const initialStateMailbox = [
  {  _id: 1, boxSize: 'Small', boxOwner: 'Alex',},
  {  _id: 2, boxSize: 'Medium', boxOwner: 'Sylvia',},
  {  _id: 3, boxSize: 'Large', boxOwner: 'Daniel',},
  {  _id: 4, boxSize: 'Super-Size', boxOwner: 'John',},
];

const App = () => {
  return (
    <>
      <h1>Hello world!</h1>
      <MailboxList />
    </>
  );
};

export default App;
