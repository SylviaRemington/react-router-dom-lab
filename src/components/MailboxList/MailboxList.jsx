// Creating basic looping through mailbox list via map function
// import "../../App.css"; //SO I don't need to import App.jsx here because I'm exporting it to App.jsx
import { Link } from "react-router";

const MailboxList = (props) => {
  console.log(props.mailboxes);
  return (
    // rendering everything out here
    <>
      <h2>Mailbox List of all the fabulous mailboxes 📫 🎉🥳 🙌 </h2>
      <ul>
        {props.mailboxes.map((currentMailbox) => (
          <li key={currentMailbox.boxOwnerName}>
            <Link to={`/mailboxes/${currentMailbox._id}`}>
              {currentMailbox.boxOwnerName}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MailboxList;
