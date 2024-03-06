import { Button, List, ListItem, Paper, Typography } from "@mui/material";
import React from "react";
import { useQuestion } from "./QuestionProvider";
import he from "he";

export default function Question({ question }) {
  const { handleAnswer } = useQuestion();

  return (
    <>
      <h2>{he.decode(question.questionText)}</h2>
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          gap: "2rem",
          height: "50vh",
        }}
      >
        {question.answers.map((answerOption, index) => (
          <Paper key={index} sx={{ width: "75%" }}>
            <Button
              sx={{
                height: "10vh",
                width: "100%",
                padding: "1rem",
                justifyContent: "flex-start",
              }}
              onClick={() => {
                handleAnswer(answerOption === question.correctAnswer);
              }}
            >
              <Typography>{answerOption}</Typography>
            </Button>
          </Paper>
        ))}
      </List>
    </>
  );
}
