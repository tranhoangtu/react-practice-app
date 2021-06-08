import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styled from "./AddUser.module.css";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const addUserHandler = (e) => {
    e.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      return;
    }
    if (+age < 1) {
      return;
    }
    setUsername("");
    setAge("");
  };

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };

  return (
    <Card className={styled.input}>
      <form onSubmit={addUserHandler}>
        <label htmlfor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={usernameChangeHandler}
        ></input>
        <label htmlfor="age">Age</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={ageChangeHandler}
        ></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
