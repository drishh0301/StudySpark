import React from "react";
import "../styles/QuizHeader.css";

function QuizHeader() {
  return (
    <div className="quiz-header">

      <h1>StudySpark Quiz</h1>

      <div className="timer">
        ⏰ Time Left: 15:00
      </div>

    </div>
  );
}

export default QuizHeader;