import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";

import "./NoteDetails.css";

function NoteDetails() {
    const location = useLocation();
    const navigate = useNavigate();
    const note = location.state?.note;
    const [summary, setSummary] = useState(note?.summary || "");
    const [hasFlashcards, setHasFlashcards] = useState(false);

    useEffect(() => {
        if (!note) return;

        async function checkFlashcards() {
            try {
                const response = await axios.get(
                    `http://localhost:5000/api/flashcards/${note._id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                    },
                );

                setHasFlashcards(response.data.flashcards.length > 0);
            } catch (err) {
                console.log(err);
            }
        }

        checkFlashcards();
    }, [note]);

    if (!note) {
        return (
            <>
                <Navbar />
                <h2 style={{ textAlign: "center", marginTop: "40px" }}>
                    Note not found.
                </h2>
            </>
        );
    }

    async function generateSummary() {
        try {
            const response = await axios.post(
                "http://localhost:5000/api/summary/generate",
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

            setSummary(response.data.summary);
        } catch (err) {
            console.log(err);
            alert(err.response?.data?.message || "Failed to generate summary");
        }
    }

    function goToFlashcards() {
        navigate("/flashcards", {
            state: { note },
        });
    }

    return (
        <>
            <Navbar />

            <div className="detailsContainer">
                <h1>{note.title}</h1>

                <h2>Original Notes</h2>

                <div className="ndContentBox">{note.content}</div>

                <h2>Summary</h2>

                <div className="ndSummaryBox">
                    {summary || "No summary generated yet."}
                </div>
                <button
                    className="actionBtn summaryBtn"
                    onClick={generateSummary}
                >
                    Generate Summary
                </button>

                <button
                    className="actionBtn flashcardBtn"
                    onClick={goToFlashcards}
                >
                    {hasFlashcards ? "View Flashcards" : "Generate Flashcards"}
                </button>
            </div>
        </>
    );
}

export default NoteDetails;
