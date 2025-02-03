# User Management Portal

A simple **User Management Portal** built with **React (Functional Components, Hooks, Tailwind CSS, ShadCN UI)** for managing users. The portal allows users to **add, update, delete**, and view a list of users, with client-side validation and a confirmation popup for deletions.

## Features 🚀
- **User Listing:** View all users in a table.
- **Add User:** Form to add a new user.
- **Edit User:** Update existing user details.
- **Delete User:** Remove a user with confirmation popup.
- **Client-side Validation:** Ensures correct data entry before submission.
- **API Integration:** Fetch, add, update, and delete users via backend APIs.
- **Styled UI:** Uses **Tailwind CSS** and **ShadCN UI** for a clean design.

## Tech Stack 🛠️
- **Frontend:** React (Hooks, Functional Components)
- **Styling:** Tailwind CSS, ShadCN UI
- **API Calls:** Axios
- **Backend (Placeholder API):** Django (or any API service providing user data)

## Installation & Setup ⚙️
1. Clone the repository:
    ```bash
    git clone https://github.com/your-repo/user-management-portal.git
    cd user-management-portal
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the React application:
    ```bash
    npm start
    ```
4. Run JSON server in another terminal on port 3001:
    ```bash
    npx json-server --watch db.json --port 3001
    ```

## File Structure 📁
```
user-management-portal/
│── src/
│   ├── components/
│   │   ├── UserTable.js       # Displays users in a table
│   │   ├── UserForm.js        # Form to add users
│   │   ├── UpdateUserForm.js  # Form to edit users
│   ├── services/
│   │   ├── api.js             # Handles API calls
│   ├── App.js                 # Main component
│   ├── index.js               # React entry point
│── package.json
│── README.md
```

## API Endpoints 📡
| Method | Endpoint        | Description        |
|--------|----------------|--------------------|
| GET    | `/users`        | Fetch all users   |
| POST   | `/users`        | Add a new user    |
| PUT    | `/users/:id`    | Update a user     |
| DELETE | `/users/:id`    | Delete a user     |

## Contributing 🤝
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to your branch (`git push origin feature-branch`)
5. Open a Pull Request

## License 📝
This project is open-source and available under the [MIT License](LICENSE).

---
**Made with ❤️ by Darshan Gohel**

