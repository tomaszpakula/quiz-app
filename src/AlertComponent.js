import { Alert } from "@mui/material";
import React from "react";
import { CSSTransition } from "react-transition-group";
import { useQuestion } from "./QuestionProvider";
import "./App.css";

export default function AlertComponent() {
  const { success } = useQuestion();
  const { alertOn } = useQuestion();
  return (
    <Alert
      severity={success ? "success" : "error"}
      style={{ position: "absolute", width: "10rem", margin: "1rem" }}
    >
      {success ? "Dobrze" : "Źle"}
    </Alert>
  );
}
