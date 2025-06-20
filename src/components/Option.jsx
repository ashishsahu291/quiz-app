import React from "react";

const Option = ({
  label,
  selectedOption,
  setSelectedOption,
  correctOption,
}) => {
  return (
    <button
      className={`quiz-option ${
        selectedOption &&
        (label === correctOption
          ? "correct"
          : label === selectedOption
          ? "incorrect"
          : "")
      }`}
      onClick={() => setSelectedOption(label)}
      disabled={!!selectedOption}
    >
      {label}
    </button>
  );
};

export default Option;
