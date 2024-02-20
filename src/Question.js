import { Button, List, ListItem, Paper, Typography } from "@mui/material";
import React from "react";
import { useQuestion } from "./QuestionProvider";

export default function Question({ question }) {

    const {handleAnswer} = useQuestion();

  return (
    <>
      <h2>{question.questionText}</h2>
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "50vh",
        }}
      >
        {question.answerOptions.map((answerOption, index) => (
          <Paper key={index} sx={{ width: "75%" }}>
            <Button
              sx={{
                height: "10vh",
                width: "100%",
                padding: "1rem",
                justifyContent: "flex-start",
              }}
              onClick={()=>{handleAnswer(answerOption.isCorrect)}}
            >
              <Typography>{answerOption.answerText}</Typography>
            </Button>
          </Paper>
        ))}
      </List>
    </>
  );
}
