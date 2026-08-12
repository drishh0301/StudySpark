import { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import "./Flashcards.css";

if (loading) {
    return (
        <>
            <Navbar />
            <h2 style={{ textAlign: "center", marginTop: "60px" }}>
                Generating Flashcards...
            </h2>
        </>
    );
}

if (cards.length === 0) {
    return (
        <>
            <Navbar />
            <h2 style={{ textAlign: "center", marginTop: "60px" }}>
                No flashcards available.
            </h2>
        </>
    );
}

function Flashcards() {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const location = useLocation();
    const note = location.state?.note;

    const currentCard = cards[currentIndex] || {};

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

    async function generateFlashcards() {
        setLoading(true);

        try {
            const response = await axios.post(
                "http://localhost:5000/api/flashcards/generate",
                {
                    noteId: note._id,
                    content: note.content,
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                },
            );

            setCards(response.data.flashcards);
            setCurrentIndex(0);
            setIsFlipped(false);
        } catch (err) {
            console.log(err);
            alert(
                err.response?.data?.message || "Failed to generate flashcards",
            );
        }

        setLoading(false);
    }

    useEffect(() => {
        if (note) {
            generateFlashcards();
        }
    }, []);

    return (
        <div className="flashcards-page">
            <Navbar />

            <h1 className="app-name">Flashcards</h1>
            <p className="tagline">
                Card {currentIndex + 1} of {cards.length}
            </p>

            <div className="flashcard" onClick={handleFlip}>
                <div
                    className={`flashcard-inner ${isFlipped ? "flipped" : ""}`}
                >
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
                <button className="shuffle-btn" onClick={handleShuffle}>
                    Shuffle
                </button>
                <button onClick={handleNext}>Next &rarr;</button>
            </div>

            <button className="quiz-btn">Start Quiz</button>
        </div>
    );
}

export default Flashcards;
