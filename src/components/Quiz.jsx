import React, { useState } from "react";
import { QUESTIONS, QUIZ_STAGES } from "../constants/constants";
import Option from "./Option";

const Quiz = ({ setQuizStage }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const onNextClick = () => {
    if (currentQuestion === QUESTIONS.length - 1) {
      setQuizStage(QUIZ_STAGES.ENDED);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className="quiz-wrapper">
      <div className="header">
        <p>
          {currentQuestion + 1} of {QUESTIONS.length} Questions
        </p>
      </div>
      <div className="quiz">
        <p>Q. {QUESTIONS[currentQuestion].question}</p>

        {QUESTIONS[currentQuestion]?.options.map((option) => (
          <Option
            label={option}
            key={option}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            correctOption={QUESTIONS[currentQuestion].correctAnswer}
          />
        ))}
      </div>
      <button onClick={onNextClick}>Next</button>
    </div>
  );
};

export default Quiz;
