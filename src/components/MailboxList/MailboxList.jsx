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
          // <li key={currentMailbox.boxOwnerName}>
          <li key={currentMailbox._id}>
            <div className="mail-box">
              <Link to={`/mailboxes/${currentMailbox._id}`}>
                {/* {currentMailbox.boxOwnerName} */}
                {/* The user story says: “Each mailbox in the list should be a square container with a box number _id.” */}
                Box #{currentMailbox._id}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MailboxList;
