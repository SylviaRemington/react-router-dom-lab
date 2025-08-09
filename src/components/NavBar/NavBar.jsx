// ➜ react-router-dom-lab git:(main) mkdir src/components
// ➜  react-router-dom-lab git:(main) mkdir src/components/NavBar
// ➜  react-router-dom-lab git:(main) touch src/components/NavBar/NavBar.jsx
import '../../App.css';
import "../../App.jsx";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>*Home*</li>
        <li>*Mailboxes(MailboxList)*</li>
        <li>*New Mailbox(MailboxForm)*</li>
        <li>*New Letter(MailboxDetails)*</li>
      </ul>
    </nav>
  );
};

export default NavBar;
