import { useState } from "react";
import Navbar from "../components/Navbar";
import "./Flashcards.css";


const dummyCards = [
  { question: "What does the useState hook return?", answer: "An array: [value, setValue function]" },
  { question: "What is JSX?", answer: "A syntax that lets you write HTML-like code inside JavaScript" },
  { question: "What is a prop in React?", answer: "Data passed from a parent component to a child component" },
  { question: "What does useEffect do?", answer: "Runs side effects like API calls after the component renders" },
];

function Flashcards() {
  const [cards, setCards] = useState(dummyCards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentCard = cards[currentIndex];

  function handleFlip() {
    setIsFlipped(!isFlipped);
  }

  function handleNext() {
    setIsFlipped(false);
    setCurrentIndex((currentIndex + 1) % cards.length);
  }

  function handlePrev() {
    setIsFlipped(false);
    setCurrentIndex((currentIndex - 1 + cards.length) % cards.length);
  }

  function handleShuffle() {
    
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
  }

  return (
    <div className="flashcards-page">
      <Navbar />

      <h1 className="app-name">Flashcards</h1>
      <p className="tagline">
        Card {currentIndex + 1} of {cards.length}
      </p>

      <div className="flashcard" onClick={handleFlip}>
        <div className={`flashcard-inner ${isFlipped ? "flipped" : ""}`}>
          <div className="flashcard-front">
            <p>{currentCard.question}</p>
          </div>
          <div className="flashcard-back">
            <p>{currentCard.answer}</p>
          </div>
        </div>
      </div>

      <p className="hint-text">Click the card to flip it</p>

      <div className="flashcard-buttons">
        <button onClick={handlePrev}>&larr; Prev</button>
        <button className="shuffle-btn" onClick={handleShuffle}>Shuffle</button>
        <button onClick={handleNext}>Next &rarr;</button>
      </div>

      <button className="quiz-btn">Start Quiz</button>
    </div>
  );
}

export default Flashcards;
