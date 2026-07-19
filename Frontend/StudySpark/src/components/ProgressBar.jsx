import React from "react";
import "../styles/ProgressBar.css";

function ProgressBar() {
  return (
    <div className="progressSection">

      <p>Question 3 of 10</p>

      <div className="progressBar">
        <div className="progressFill"></div>
      </div>

    </div>
  );
}

export default ProgressBar;