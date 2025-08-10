# React Router DOM Lab

## About
- Welcome to Reactville, a constantly evolving virtual metropolis. Let’s build this digital town together, one component at a time. Additionally, welcome to Reactville’s local post office! In this lab, the student will develop an application that simulates the management of post office boxes. Features will include creating new mailboxes, viewing a list of all mailboxes, and exploring individual mailbox details.

- **Solution UI Example Image**
![Mailbox_Image](/public/UI_Example_Image.png)

- **My Version - Mailbox List**
![Mailbox_Image](/public/MailboxList.png)

- **My Version - Mailbox Form**
![NewForm_Image](/public/MailboxForm.png)

- **My Version - Homepage**
![Welcome_Image](/public/Welcome.png)

- Throughout the lab, the student use client-side routing tools from the React Router library to navigate between different components. This approach allows this single-page application to function more like a traditional multi-page website, improving the user experience by providing distinct navigable pages without full page reloads.

## Exercise Overview
- In this lab, the student will build an application that simulates a post office, where users can create new mailboxes, view a list of all mailboxes, and explore details about each mailbox.

- The student will utilize several client-side routing tools provided by React Router’s library to complete this lab.

- What is a mailbox in this lab?
Each “mailbox” in this lab represents a type of post office box, often called a PO Box. A PO Box (short for “Post Office Box”) is a secure, numbered box located at a post office where people can receive mail. These boxes are rented by individuals or businesses who want a private or reliable way to get their mail. Only the box owner has access to their assigned box.

**In this lab, each mailbox will have:**
1. A unique box number (_id)
2. The name of the box owner (boxOwner)
3. The size of the box (boxSize), such as Small, Medium, or Large

**In the list below, you’ll find a brief description of the role of each component in our app:**
1. App: The root component that orchestrates the entire application.
2. NavBar: Provides navigation links.
3. MailboxForm: Allows users to enter details for and submit new mailboxes.
4. MailboxList: Displays an index list of all mailboxes.
5. MailboxDetails: Shows details about a specific mailbox.

## User stories
**Here are the user stories for this lab:**

- As a user, I should see a nav bar with links at the top of each page in the application.
- As a user, clicking on the ‘Home’ link should navigate me to a landing page that displays the text ‘Post Office’.
- As a user, clicking on the ‘New Mailbox’ link should navigate me to a page with a form for submitting new mailboxes.
- As a user, when viewing the form on the ‘New Mailbox’ page, I should see a <form> with an <input> for the name of the boxOwner and a <select> menu for the boxSize. The <select> menu should include three options: ‘Small’, ‘Medium’, and ‘Large’.
- As a user, I should not be required to select a box number when creating a new mailbox. When a new mailbox is created, it should be assigned a box number, or _id, automatically. This number should increment based on the number of mailboxes that already exist.
- As a user, when I submit the ‘New Mailbox’ form, I should be redirected to the ‘Mailboxes’ page (/mailboxes) where I will see the newly created mailbox added to the list.
- As a user, clicking on the ‘Mailboxes’ link should navigate me to a ‘Mailboxes’ page.
- As a user, when viewing the ‘Mailboxes’ page, I should be able to see a list of all the existing mailboxes. Each mailbox in the list should be a square container with a box number _id.
- As a user, when viewing the ‘Mailboxes’ list page, I want to be able to click on a mailbox, and be directed to a mailbox details page.
- As a user, when viewing the details page, I should see details about a specific mailbox. The details should include the box number (_id), the name of the box owner, and the box size.
- As a user, I should see the message ‘Mailbox Not Found!’ if I navigate to the details page for a mailbox that does not exist.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
