import React from "react";
import "../styles/Features.css";
import { FaBookOpen, FaBrain, FaQuestionCircle } from "react-icons/fa";

function Features() {
  return (
    <section className="features" id="features">

      <p className="featureTag">✨ Powerful AI Features</p>

      <h2>Everything You Need to Study Better</h2>

      <p className="featureDesc">
        StudySpark AI helps students learn faster by converting notes into
        summaries, flashcards, and quizzes in seconds.
      </p>

      <div className="featureGrid">

        <div className="featureCard">

          <div className="iconCircle">
            <FaBookOpen />
          </div>

          <h3>AI Summaries</h3>

          <p>
            Turn lengthy study material into short, easy-to-understand notes.
          </p>

        </div>

        <div className="featureCard">

          <div className="iconCircle">
            <FaBrain />
          </div>

          <h3>Smart Flashcards</h3>

          <p>
            Instantly generate interactive flashcards to revise concepts.
          </p>

        </div>

        <div className="featureCard">

          <div className="iconCircle">
            <FaQuestionCircle />
          </div>

          <h3>AI Quiz Generator</h3>

          <p>
            Test your understanding with AI-generated quizzes in one click.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Features;