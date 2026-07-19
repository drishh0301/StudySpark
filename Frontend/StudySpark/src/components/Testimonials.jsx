import React from "react";
import "../styles/Testimonials.css";

function Testimonials() {
  const reviews = [
    {
      name: "Aarav Sharma",
      role: "Computer Science Student",
      review:
        "StudySpark AI helped me prepare for my semester exams in half the time. The quizzes are amazing!"
    },
    {
      name: "Priya Verma",
      role: "Engineering Student",
      review:
        "The flashcards and summaries made revision so much easier. I use it every day."
    },
    {
      name: "Rahul Mehta",
      role: "B.Tech Student",
      review:
        "The interface is beautiful and the AI-generated notes are surprisingly accurate."
    }
  ];

  return (
    <section className="testimonials">
      <p className="sectionTag">💬 Testimonials</p>

      <h2>What Students Say</h2>

      <div className="testimonialGrid">
        {reviews.map((item, index) => (
          <div className="testimonialCard" key={index}>
            <div className="quote">❝</div>

            <p>{item.review}</p>

            <h3>{item.name}</h3>

            <span>{item.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;