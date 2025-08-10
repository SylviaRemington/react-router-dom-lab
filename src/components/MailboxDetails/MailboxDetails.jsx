
// We are using props to have data being passed into it, so that we can have individual details about the mailboxes.
const MailboxDetails = (props) => {
    return (
        <>
            <h2>Mailbox Details Page</h2>
            {/* {props.MailboxDetails} */}
            <ul>
                <li>Mailbox Size: </li>
                <li>Mailbox Owner Name: </li>
            </ul>
        </>

    )
}


export default MailboxDetails;
