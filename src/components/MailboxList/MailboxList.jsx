// Creating basic looping through mailbox list via map function

const MailboxList = (props) => {
    return (
        <>
        <h2>Mailbox List</h2>
        <ul>
            {props.mailbox.map((currentMailbox) => (
                <li key={currentMailbox.name}>{currentMailbox.name}</li>
            ))}
        </ul>
        </>
    );
};

console.log(MailboxList);





// export default MailboxList;
