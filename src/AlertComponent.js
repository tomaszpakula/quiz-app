import { Alert } from "@mui/material";
import React from "react";
import { useQuestion } from "./QuestionProvider";
import "./App.css";

export default function AlertComponent() {
  const { success } = useQuestion();
  return (
    <Alert
      severity={success ? "success" : "error"}
      style={{ position: "absolute", width: "10rem", margin: "1rem" }}
    >
      {success ? "Good!" : "Incorrect!!!"}
    </Alert>
  );
}
