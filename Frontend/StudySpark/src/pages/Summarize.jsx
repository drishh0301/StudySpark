import Navbar from "../components/Navbar";
import { useState } from "react";
import "./Summarize.css";
import { useLocation } from "react-router-dom";
import axios from "axios";

function Summarize() {
    const location = useLocation();
    const note = location.state?.note;
    const [title, setTitle] = useState(note?.title || "");
    const [notes, setNotes] = useState(note?.content || "");
    const [summary, setSummary] = useState(note?.summary || "");

    async function handleGenerate() {
        if (!notes) {
            alert("No notes found.");
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost:5000/api/summary/generate",
                {
                    noteId: note?._id,
                    content: notes,
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

    return (
        <div className="summarize-page">
            <Navbar />
            <h1 className="app-name">Summarizer</h1>
            <p className="tagline">Turn your notes into a summary</p>

            <div className="summarize-layout">
                <div className="notes-side">
                    <span className="step-label">1. Your Notes</span>

                    <input
                        className="title-input"
                        placeholder="Give your notes a title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <textarea
                        rows="10"
                        placeholder="Paste or type your notes here..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                    />

                    <button onClick={handleGenerate}>
                        Generate Summary &rarr;
                    </button>
                </div>

                <div className="summary-side">
                    <span className="step-label">2. AI Summary</span>

                    {summary ? (
                        <>
                            <p className="summary-text">{summary}</p>
                        </>
                    ) : (
                        <p className="empty-text">
                            Your summary will appear here once generated.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Summarize;
