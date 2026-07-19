import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Quiz.css";

function Quiz() {

  const location = useLocation();

  const fileName = location.state?.fileName || "";
  const name = fileName.toLowerCase();

  let questions = [];

  if (name.includes("java")) {

    questions = [
      {
        question: "Java is a ______ language.",
        options: [
          "Programming",
          "Database",
          "Operating System",
          "Markup"
        ],
        answer: "Programming"
      },
      {
        question: "Java follows which programming concept?",
        options: [
          "Object Oriented",
          "Procedural Only",
          "Functional Only",
          "None"
        ],
        answer: "Object Oriented"
      }
    ];

  }

  else if (name.includes("dbms")) {

    questions = [
      {
        question: "Primary Key is used to...",
        options: [
          "Uniquely identify records",
          "Delete records",
          "Store images",
          "Create folders"
        ],
        answer: "Uniquely identify records"
      },
      {
        question: "Normalization helps to...",
        options: [
          "Reduce redundancy",
          "Increase redundancy",
          "Delete tables",
          "Format text"
        ],
        answer: "Reduce redundancy"
      }
    ];

  }

  else if (name.includes("machine")) {

    questions = [
      {
        question: "Machine Learning is a part of...",
        options: [
          "Artificial Intelligence",
          "DBMS",
          "Networking",
          "Cloud Computing"
        ],
        answer: "Artificial Intelligence"
      },
      {
        question: "Which is a type of Machine Learning?",
        options: [
          "Supervised Learning",
          "Sorting",
          "Searching",
          "Compiling"
        ],
        answer: "Supervised Learning"
      }
    ];

  }

  else {

    questions = [
      {
        question: "Operating System is...",
        options: [
          "System Software",
          "Application Software",
          "Database",
          "Compiler"
        ],
        answer: "System Software"
      },
      {
        question: "Which is an Operating System?",
        options: [
          "Windows",
          "Chrome",
          "Google",
          "Oracle"
        ],
        answer: "Windows"
      }
    ];

  }

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  function checkAnswer(option) {

    let newScore = score;

    if (option === questions[current].answer) {
      newScore++;
      setScore(newScore);
    }

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      alert(`Quiz Completed!\nYour Score: ${newScore}/${questions.length}`);
    }

  }

  return (

    <div className="quiz-page">

      <div className="quiz-container">

        <h1>StudySpark Quiz</h1>

        <div className="progress">

          <p>
            Question {current + 1} of {questions.length}
          </p>

          <div className="progress-bar">

            <div
              className="progress-fill"
              style={{
                width: `${((current + 1) / questions.length) * 100}%`
              }}
            ></div>

          </div>

        </div>

        <div className="question-box">

          <h2>{questions[current].question}</h2>

          {questions[current].options.map((option, index) => (

            <button
              key={index}
              onClick={() => checkAnswer(option)}
            >
              {option}
            </button>

          ))}

        </div>

      </div>

    </div>

  );

}

export default Quiz;