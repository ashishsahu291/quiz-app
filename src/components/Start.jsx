import { QUIZ_STAGES } from "../constants/constants";

const Start = ({ setQuizStage }) => {
  return (
    <div>
      <h1>Ready for a Quizz?</h1>
      <div className="card">
        <button onClick={() => setQuizStage(QUIZ_STAGES.IN_PROGRESS)}>
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default Start;
