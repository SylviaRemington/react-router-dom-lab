// Creating basic looping through mailbox list via map function

const MailboxList = (props) => {
    console.log(props.mailboxes);
    return (
        <>
        <h2>Mailbox List of All Mailboxes</h2>
        <ul>
            {props.mailboxes.map((currentMailbox) => (
                <li key={currentMailbox.boxOwnerName}>{currentMailbox.boxOwnerName}</li>
            ))}
        </ul>
        </>
    );
};



export default MailboxList;

