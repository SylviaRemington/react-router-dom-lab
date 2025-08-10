// getting access to the params -- just need to import this and then do the const params=useParams() - then have access to them in React
import { useParams } from "react-router";

// We are using props to have data being passed into it, so that we can have individual details about the mailboxes.
const MailboxDetails = (props) => {
    // getting the mailboxId from the URL (I'm using 'id' to match the Route path '/mailboxes/:id')
    const { id } = useParams();

    // keeping console.log details to keep track of what I did - for future reference when I review old labs.
    // seeing the difference of what happens in console log with params and params.id
    // console.log('Params are: ', params, params.id);

    // finding the mailbox with the matching id (as _id)
    const singleMailbox = props.mailboxes.find( //using find to search the mailboxes array for a mailbox with _id (where _id = the id from the URL)
        // using Number(id) to convert the id (which is a string in the url) to a number so that it matches the _id in my mailboxes array
        (mailbox) => mailbox._id === Number(id)
    );
    console.log(singleMailbox);

    // If no mailbox is found (e.g. is undefined), display error message of 'Mailbox Not Found!'
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
