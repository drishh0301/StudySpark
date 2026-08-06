import React from "react";
import "../styles/QuestionCard.css";

function QuestionCard() {
  return (
    <div className="questionCard">

      <h3>What does HTML stand for?</h3>

      <button>Hyper Text Markup Language</button>

      <button>High Text Machine Language</button>

      <button>Hyper Transfer Markup Language</button>

      <button>Home Tool Markup Language</button>

      <div className="quizButtons">

        <button className="previous">
          Previous
        </button>

        <button className="next">
          Next
        </button>

      </div>

    </div>
  );
}

export default QuestionCard;