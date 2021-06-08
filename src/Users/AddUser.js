import React, { useState } from "react";
import Card from "../UI/Card";

const AddUser = (props) => {
  const addUserHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Card>
      <form onSubmit={addUserHandler}>
        <label htmlfor="username">Username</label>
        <input type="text" id="username"></input>
        <label htmlfor="age">Age</label>
        <input type="number" id="age"></input>
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
