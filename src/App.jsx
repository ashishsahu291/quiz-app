import { useState } from "react";
import "./App.css";
import Start from "./components/Start";
import { QUIZ_STAGES } from "./constants/constants";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

function App() {
  const [quizStage, setQuizStage] = useState(QUIZ_STAGES.START);
  const [score, setScore] = useState(0);
  return (
    <div className="quiz-wrapper">
      {quizStage === QUIZ_STAGES.START ? (
        <Start setQuizStage={setQuizStage} />
      ) : quizStage === QUIZ_STAGES.IN_PROGRESS ? (
        <Quiz setQuizStage={setQuizStage} score={score} setScore={setScore} />
      ) : (
        <Result score={score} setScore={setScore} setQuizStage={setQuizStage} />
      )}
    </div>
  );
}

export default App;
