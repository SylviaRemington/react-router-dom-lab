// src/App.jsx
import { useState } from 'react';
import { Routes, Route } from 'react-router';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import MailboxList from './components/MailboxList/MailboxList';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
// import MailboxForm from './components/MailboxForm/MailboxForm';

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
      <Routes>
        <Route path='/' element={ <h2>Welcome! You are currently on the home page. Yes!</h2> }></Route>
        <Route path='/mailboxes' element={<MailboxList className='initialStateMailboxes' mailboxes={mailboxes}/>}></Route>
        <Route path='/mailboxes/:id' element={<MailboxDetails />}></Route>
        <Route path='*' element={<h2>Whoops! You typed in an incorrect path. Try again.</h2>}></Route>
      </Routes>
      
    </>
  );
};

export default App;


