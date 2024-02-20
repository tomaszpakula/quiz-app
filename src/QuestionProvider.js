import React, { useContext, useState } from "react";

const QuestionContext = React.createContext();
export const useQuestion = () => {
  return useContext(QuestionContext);
};

export function QuestionProvider({ children }) {
  const [points, setPoints] = useState(0);
  const [questionId, setQuestionId] = useState(1);
  const [success, setSuccess] = useState(false);
  const [alertOn, setAlertOn] = useState(false);

  function handleAnswer(isCorrect) {
    if (isCorrect) {
      setPoints(points + 1);
      setSuccess(true);
    } else {
      setSuccess(false);
    }
    setQuestionId(questionId + 1);
    setAlertOn(true);
    setTimeout(() => {
      setAlertOn(false);
    }, 1000);
  }

  return (
    <QuestionContext.Provider
      value={{ points, questionId, handleAnswer, success, alertOn }}
    >
      {children}
    </QuestionContext.Provider>
  );
}
