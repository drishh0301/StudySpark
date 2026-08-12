import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/Quiz.css";

function Quiz() {
    const location = useLocation();
    const note = location.state?.note;

    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [current, setCurrent] = useState(0);
    const [selected, setSelected] = useState(null);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);

    async function generateQuiz() {
        try {
            const response = await axios.post(
                "http://localhost:5000/api/quiz/generate",
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

            setQuestions(response.data.quiz);
        } catch (err) {
            console.log(err);
            alert(err.response?.data?.message || "Failed to generate quiz");
        }
    }

    async function loadOrGenerateQuiz() {
        setLoading(true);

        try {
            const existing = await axios.get(
                `http://localhost:5000/api/quiz/${note._id}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                },
            );

            if (existing.data.quiz.length > 0) {
                setQuestions(existing.data.quiz);
                setLoading(false);
                return;
            }
        } catch (err) {
            console.log(err);
            // fall through and try generating instead
        }

        // No existing quiz found — generate one for the first time.
        await generateQuiz();
        setLoading(false);
    }

    useEffect(() => {
        if (note) {
            loadOrGenerateQuiz();
        } else {
            setLoading(false);
        }
    }, []);

    function handleSelect(option) {
        if (selected) return; // already answered this question, wait for Next

        setSelected(option);

        if (option === questions[current].correctAnswer) {
            setScore((prev) => prev + 1);
        }
    }

    function handleNext() {
        if (current < questions.length - 1) {
            setCurrent(current + 1);
            setSelected(null);
        } else {
            setFinished(true);
        }
    }

    function handleRestart() {
        setCurrent(0);
        setSelected(null);
        setScore(0);
        setFinished(false);
    }

    if (!note) {
        return (
            <>
                <Navbar />
                <h2 style={{ textAlign: "center", marginTop: "60px" }}>
                    No note selected.
                </h2>
            </>
        );
    }

    if (loading) {
        return (
            <>
                <Navbar />
                <h2 style={{ textAlign: "center", marginTop: "60px" }}>
                    Loading Quiz...
                </h2>
            </>
        );
    }

    if (questions.length === 0) {
        return (
            <>
                <Navbar />
                <h2 style={{ textAlign: "center", marginTop: "60px" }}>
                    No quiz available.
                </h2>
            </>
        );
    }

    if (finished) {
        return (
            <div className="quiz-page">
                <Navbar />
                <div className="quiz-container">
                    <h1>Quiz Completed!</h1>
                    <p style={{ textAlign: "center", fontSize: "20px" }}>
                        Your Score: {score} / {questions.length}
                    </p>
                    <div style={{ textAlign: "center" }}>
                        <button className="restart-btn" onClick={handleRestart}>
                            Restart Quiz
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    const q = questions[current];

    return (
        <div className="quiz-page">
            <Navbar />

            <div className="quiz-container">
                <h1>StudySpark Quiz</h1>

                <div id="ques-done">
                    <p>
                        Question {current + 1} of {questions.length}
                    </p>
                </div>

                <div className="question-box">
                    <h2>{q.question}</h2>

                    {q.options.map((option, index) => (
                        <button
                            key={index}
                            className={selected === option ? "selected" : ""}
                            onClick={() => handleSelect(option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>

                {selected && (
                    <div className="quiz-buttons">
                        <p>
                            {selected === q.correctAnswer
                                ? "Correct!"
                                : `Correct answer: ${q.correctAnswer}`}
                        </p>
                        <button onClick={handleNext}>
                            {current < questions.length - 1
                                ? "Next Question"
                                : "Finish Quiz"}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Quiz;
