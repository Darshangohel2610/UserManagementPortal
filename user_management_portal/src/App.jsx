import { useEffect, useState } from "react";
import UserTable from "./components/UserTable";
import Userform from "./components/Userform";
import UpdateUserForm from "./components/UpdateUserForm";

import { fetchUsers, addUser, deleteUser, updateUser } from "./services/api";

function App() {
  const [users, setUsers] = useState([]);
  const [userToEdit, setUserToEdit] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const users = await fetchUsers();
        setUsers(users);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };
    getUsers();
  }, []);

  const handleAddUser = async (user) => {
    try {
      const newUser = await addUser(user);
      setUsers([...users, newUser]);
    } catch (error) {
      console.error("Failed to add user:", error);
    }
  };

  const handleDeleteUser = async (id, user) => {
    const confirmationPopup = confirm(
      "are sure you want to delete " + user.name
    );
    if (confirmationPopup) {
      try {
        await deleteUser(id);
        setUsers(users.filter((user) => user.id !== id));
      } catch (error) {
        console.error("Failed to delete user:", error);
      }
    }
  };

  const handleEdit = (user) => {
    setUserToEdit(user);
    setIsEditing(true);
  };

  const handleUpdateUser = async (updatedUser) => {
    try {
      await updateUser(updatedUser.id, updatedUser);
      setUsers(
        users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
      );
      setIsEditing(false);
    } catch (error) {
      console.error("Something went wrong:", error);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setUserToEdit(null);
  };

  return (
    <div className="max-w-3xl mx-auto mt-6 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        User Management Portal
      </h1>

      {isEditing ? (
        <UpdateUserForm
          userToEdit={userToEdit}
          onUpdateUser={handleUpdateUser}
          onCancel={handleCancelEdit}
        />
      ) : (
        <Userform addNewUser={handleAddUser} />
      )}

      <UserTable
        users={users}
        onDeleteUser={handleDeleteUser}
        onUpdateUser={handleEdit}
      />
    </div>
  );
}

export default App;
