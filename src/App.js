import {
  Alert,
  Button,
  Container,
  List,
  ListItem,
  Paper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Question from "./Question";
import { useQuestion } from "./QuestionProvider";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AlertComponent from "./AlertComponent";
import questions from "./question.json";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const alertStyle = {
  position: "absolute",
  width: "10vw",
  margin: "1rem",
};

function App() {
  const { questionId } = useQuestion();
  const { points } = useQuestion();
  const { alertOn } = useQuestion();


  return (
    <ThemeProvider theme={darkTheme}>
      {alertOn && <AlertComponent />}
      <Container sx={{ marginTop: "1rem" }}>
        <Paper
          elevation={3}
          sx={{ padding: "1rem", width: "8rem", marginBottom: "2rem" }}
        >
          <Typography>Points: {points}</Typography>
        </Paper>
        {questions
          .filter((question) => {
            return question.questionId === questionId;
          })
          .map((question) => (
            <Question question={question} key={question.questionId} />
          ))}
        {questionId > questions.length && (
          <Paper sx={{ padding: "1rem", textAlign: "center" }}>
            <Typography>End of the quiz</Typography>
            <Typography>Points: {points}</Typography>
            <Button onClick={() => window.location.reload()}>Restart</Button>
          </Paper>
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;
