// ➜ react-router-dom-lab git:(main) mkdir src/components
// ➜  react-router-dom-lab git:(main) mkdir src/components/NavBar
// ➜  react-router-dom-lab git:(main) touch src/components/NavBar/NavBar.jsx
// import '../../App.css';
// import "../../App.jsx";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">*Home*</Link>
        </li>

        <li>
          <Link to="/mailboxes">*Mailboxes(MailboxList)*</Link>
        </li>

        <li>
          <Link to="/new-mailbox">*New Mailbox(MailboxForm)*</Link>
        </li>

        {/* <li>
          <Link to="/mailboxes/:mailboxId">*New Letter(MailboxDetails)*</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default NavBar;
