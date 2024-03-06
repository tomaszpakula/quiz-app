import { Button, Container, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Question from "./Question";
import { useQuestion } from "./QuestionProvider";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AlertComponent from "./AlertComponent";

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
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10")
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data.results.map((question, index) => ({ 
          questionId: index + 1,
          questionText: question.question,
          correctAnswer: question.correct_answer,
          answers: [...question.incorrect_answers, question.correct_answer].sort(() => Math.random() - 0.5),
           })));
      });
  }, []);

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
