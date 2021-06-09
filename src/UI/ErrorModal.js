import React, { useState } from "react";
import Button from "./Button";
import Card from "./Card";
import styled from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={styled.backdrop} onClick={props.onConfirm} />
      <Card className={styled.modal}>
        <header className={styled.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styled.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styled.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};
export default ErrorModal;
