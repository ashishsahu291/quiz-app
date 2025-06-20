import React, { useState } from "react";
import { QUESTIONS, QUIZ_STAGES } from "../constants/constants";
import Option from "./Option";

const Quiz = ({ setQuizStage, score, setScore }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const onNextClick = () => {
    if (selectedOption === QUESTIONS[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    if (currentQuestion === QUESTIONS.length - 1) {
      setQuizStage(QUIZ_STAGES.ENDED);
    }
    setCurrentQuestion(currentQuestion + 1);
    setSelectedOption(null);
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
