import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Quiz.css";

function Quiz() {
  const location = useLocation();
  const navigate = useNavigate();

  const fileName = location.state?.fileName || "";
  const name = fileName.toLowerCase();

  let questions = [];

  // ================= JAVA =================

  if (name.includes("java")) {
    questions = [
      {
        question: "Java is a ______ language.",
        options: [
          "Programming",
          "Database",
          "Operating System",
          "Markup Language",
        ],
        answer: "Programming",
      },
      {
        question: "Java follows which programming concept?",
        options: [
          "Object Oriented",
          "Procedural",
          "Functional",
          "None",
        ],
        answer: "Object Oriented",
      },
      {
        question: "Which company developed Java?",
        options: [
          "Sun Microsystems",
          "Google",
          "Microsoft",
          "Apple",
        ],
        answer: "Sun Microsystems",
      },
      {
        question: "Which keyword is used to create an object?",
        options: ["new", "class", "this", "void"],
        answer: "new",
      },
      {
        question: "Java files have which extension?",
        options: [".java", ".js", ".cpp", ".py"],
        answer: ".java",
      },
    ];
  }

  // ================= DBMS =================

  else if (name.includes("dbms")) {
    questions = [
      {
        question: "Primary Key is used to...",
        options: [
          "Uniquely identify records",
          "Delete records",
          "Store images",
          "Create folders",
        ],
        answer: "Uniquely identify records",
      },
      {
        question: "Normalization helps to...",
        options: [
          "Reduce redundancy",
          "Increase redundancy",
          "Delete tables",
          "Format text",
        ],
        answer: "Reduce redundancy",
      },
      {
        question: "SQL stands for...",
        options: [
          "Structured Query Language",
          "Simple Query Language",
          "System Query Language",
          "Standard Question Language",
        ],
        answer: "Structured Query Language",
      },
      {
        question: "DBMS stands for...",
        options: [
          "Database Management System",
          "Data Backup Management System",
          "Digital Base Management",
          "Database Memory System",
        ],
        answer: "Database Management System",
      },
      {
        question: "Which command is used to retrieve data?",
        options: [
          "SELECT",
          "DELETE",
          "DROP",
          "UPDATE",
        ],
        answer: "SELECT",
      },
    ];
  }

  // ================= OPERATING SYSTEM =================

  else {
    questions = [
      {
        question: "Operating System is...",
        options: [
          "System Software",
          "Application Software",
          "Database",
          "Compiler",
        ],
        answer: "System Software",
      },
      {
        question: "Which is an Operating System?",
        options: [
          "Windows",
          "Google",
          "Oracle",
          "Chrome",
        ],
        answer: "Windows",
      },
      {
        question: "Which of these is NOT an Operating System?",
        options: [
          "MS Word",
          "Linux",
          "Windows",
          "macOS",
        ],
        answer: "MS Word",
      },
      {
        question: "Which OS is open source?",
        options: [
          "Linux",
          "Windows",
          "MS DOS",
          "None",
        ],
        answer: "Linux",
      },
      {
        question: "CPU scheduling is done by...",
        options: [
          "Operating System",
          "Compiler",
          "Browser",
          "Database",
        ],
        answer: "Operating System",
      },
    ];
  }

  // ================= STATES =================

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(
    new Array(questions.length).fill("")
  );
  const [finished, setFinished] = useState(false);

  const handleSelect = (option) => {
    const temp = [...selected];
    temp[current] = option;
    setSelected(temp);
  };

  const nextQuestion = () => {
    if (current === questions.length - 1) {
      setFinished(true);
    } else {
      setCurrent(current + 1);
    }
  };

  const previousQuestion = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const score = selected.filter(
    (ans, index) => ans === questions[index].answer
  ).length;

  // ================= RESULT PAGE =================

  if (finished) {
    return (
      <div className="quiz-page">
        <div className="quiz-container">

          <h1>🎉 Quiz Completed!</h1>

          <h2>
            Your Score: {score} / {questions.length}
          </h2>

          <button
            className="restart-btn"
            onClick={() => window.location.reload()}
          >
            Retake Quiz
          </button>

          <button
            className="restart-btn"
            onClick={() => navigate("/notes")}
            style={{ marginLeft: "15px" }}
          >
            Back to Notes
          </button>

        </div>
      </div>
    );
  }

  // ================= QUIZ PAGE =================

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
                width: `${((current + 1) / questions.length) * 100}%`,
              }}
            ></div>
          </div>

        </div>

        <div className="question-box">

          <h2>{questions[current].question}</h2>

          {questions[current].options.map((option, index) => (
            <button
              key={index}
              className={
                selected[current] === option
                  ? "selected"
                  : ""
              }
              onClick={() => handleSelect(option)}
            >
              {option}
            </button>
          ))}

        </div>

        <div className="quiz-buttons">

          <button
            onClick={previousQuestion}
            disabled={current === 0}
          >
            Previous
          </button>

          <button onClick={nextQuestion}>
            {current === questions.length - 1
              ? "Finish"
              : "Next"}
          </button>

        </div>

      </div>

    </div>
  );
}

export default Quiz;