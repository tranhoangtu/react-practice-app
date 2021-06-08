import React, { useState } from "react";
import AddUser from "./Users/AddUser";
import UsersList from "./Users/UsersList";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prev) => [
      ...prev,
      { username: uName, age: uAge, id: Math.random() },
    ]);
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userList} />
    </div>
  );
}

export default App;
