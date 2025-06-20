import { QUIZ_STAGES } from "../constants/constants";

const Result = ({ score, setScore, setQuizStage }) => {
  const restart = () => {
    setScore(0);
    setQuizStage(QUIZ_STAGES.IN_PROGRESS);
  };

  return (
    <div className="result-wrapper">
      <div className="score">Your Score: {score}</div>
      <button className="restart" onClick={restart}>
        Restart
      </button>
    </div>
  );
};

export default Result;
