import { useState } from 'react';
import { useNavigate } from 'react-router';

const MailboxForm = (props) => {
  // adding state to manage form inputting
  const [boxOwnerName, setBoxOwnerName] = useState('');
  const [boxSize, setBoxSize] = useState('Small'); // initial use state is small - defaulting to small
  const navigate = useNavigate(); // for redirecting after a user submits the form

  // handling a form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // This is preventing the page to refresh.

    // This creates a new mailbox object.
    const newMailbox = {
      boxOwnerName,
      boxSize,
    };

    // This is calling an addBox function that is being passed via props.
    props.addBox(newMailbox);

    // redirecting to /mailboxes
    navigate('/mailboxes');

    // resetting the form
    setBoxOwnerName('');
    setBoxSize('Small');
  };

  return (
    <>
      <h2>New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='boxOwnerName'>Enter Mailbox Owner Name: </label>
          <input
            type='text'
            id='boxOwnerName'
            value={boxOwnerName}
            onChange={(e) => setBoxOwnerName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor='boxSize'>Select A Mailbox Size: </label>
          <select
            id='boxSize'
            value={boxSize}
            onChange={(e) => setBoxSize(e.target.value)}
          >
            <option value='Small'>Small</option>
            <option value='Medium'>Medium</option>
            <option value='Large'>Large</option>
            <option value='Super-Size'>Super-Size</option>
          </select>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};

export default MailboxForm;


