import React from "react";
import "../styles/Trusted.css";
import { FaStar } from "react-icons/fa";

function Trusted() {
  return (
    <section className="trusted">

      <p className="trustedTitle">
        Trusted by Students Worldwide
      </p>

      <h2>
        Over <span>5,000+</span> learners use StudySpark AI every day
      </h2>

      <div className="rating">

        <div className="stars">
          <FaStar/>
          <FaStar/>
          <FaStar/>
          <FaStar/>
          <FaStar/>
        </div>

        <p>Rated 4.9/5 by students</p>

      </div>

      <div className="trustedCards">

        <div className="tCard">
          <h3>5K+</h3>
          <p>Students</p>
        </div>

        <div className="tCard">
          <h3>100K+</h3>
          <p>Flashcards</p>
        </div>

        <div className="tCard">
          <h3>50K+</h3>
          <p>Quizzes</p>
        </div>

        <div className="tCard">
          <h3>98%</h3>
          <p>Success Rate</p>
        </div>

      </div>

    </section>
  );
}

export default Trusted;