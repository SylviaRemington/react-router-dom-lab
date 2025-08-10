// getting access to the params -- just need to import this and then do the const params=useParams() - then have access to them in React
import { useParams } from "react-router";

// We are using props to have data being passed into it, so that we can have individual details about the mailboxes.
const MailboxDetails = (props) => {
    // getting the mailboxId from the URL (I'm using 'id' to match the Route path '/mailboxes/:id')
    const { id } = useParams();
    // seeing the difference of what happens in console log with params and params.id
    // console.log('Params are: ', params, params.id);

    // finding the mailbox with the matching id (as _id)
    const singleMailbox = props.mailboxes.find(
        (mailbox) => mailbox._id === Number(id)
    );

    // If no mailbox is found, display error message of 'Mailbox Not Found!'
    if (!singleMailbox) {
        return (
            <>
                <h2>Mailbox Details Page</h2>
                <p>Mailbox Not Found!</p>
            </>
        );
    }

    // If mailbox is found, then I display all its details
    return (
        <>
            <h2>Mailbox Details Page</h2>
            <ul>
                <li>Box Number: {singleMailbox._id}</li>
                <li>Mailbox Size: {singleMailbox.boxSize}</li>
                <li>Mailbox Owner Name: {singleMailbox.boxOwnerName}</li>
                
            </ul>
        </>
    );
};

export default MailboxDetails;
