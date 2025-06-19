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
          : "disabled")
      }`}
      onClick={() => setSelectedOption(label)}
    >
      {label}
    </button>
  );
};

export default Option;
