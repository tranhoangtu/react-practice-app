import React, { useState } from "react";

const AddUser = (props) => {
  const addUserHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={addUserHandler}>
      <label htmlfor="username">Username</label>
      <input type="text" id="username"></input>
      <label htmlfor="age">Age</label>
      <input type="number" id="age"></input>
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
