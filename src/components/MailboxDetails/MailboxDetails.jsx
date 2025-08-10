// getting access to the params -- just need to import this and then do the const params=useParams() - then have access to them in React
import { useParams } from "react-router";

// We are using props to have data being passed into it, so that we can have individual details about the mailboxes.
const MailboxDetails = (props) => {
    const params = useParams();

    console.log('Params are: ', params);



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
