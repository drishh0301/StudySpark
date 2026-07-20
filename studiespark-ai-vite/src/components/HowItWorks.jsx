import React from "react";
import "../styles/HowItWorks.css";
import { FaUpload, FaRobot, FaGraduationCap } from "react-icons/fa";

function HowItWorks() {
  return (
    <section className="howItWorks" id="about">

      <p className="howTag">🚀 How It Works</p>

      <h2>Study in 3 Simple Steps</h2>

      <p className="howDesc">
        Upload your notes and let StudySpark AI do the hard work.
        Get summaries, flashcards, and quizzes instantly.
      </p>

      <div className="steps">

        <div className="stepCard">

          <div className="stepIcon">
            <FaUpload />
          </div>

          <span className="stepNumber">01</span>

          <h3>Upload Notes</h3>

          <p>
            Upload your PDF, Word document, or study notes securely.
          </p>

        </div>

        <div className="stepCard">

          <div className="stepIcon">
            <FaRobot />
          </div>

          <span className="stepNumber">02</span>

          <h3>AI Processing</h3>

          <p>
            Our AI analyzes your notes and extracts the key concepts.
          </p>

        </div>

        <div className="stepCard">

          <div className="stepIcon">
            <FaGraduationCap />
          </div>

          <span className="stepNumber">03</span>

          <h3>Start Learning</h3>

          <p>
            Receive summaries, flashcards, and quizzes instantly.
          </p>

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;