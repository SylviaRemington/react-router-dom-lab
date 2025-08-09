// Creating basic looping through mailbox list via map function
import '../../App.css';

const MailboxList = (props) => {
    console.log(props.mailboxes);
    return (
        <>
        <h2>Mailbox List of all the fabulous mailboxes 📫 🎉🥳 🙌 </h2>
        <ul>
            {props.mailboxes.map((currentMailbox) => (
                <li key={currentMailbox.boxOwnerName}>{currentMailbox.boxOwnerName}</li>
            ))}
        </ul>
        </>
    );
};



export default MailboxList;

