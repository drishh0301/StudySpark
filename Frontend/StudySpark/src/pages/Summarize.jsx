import Navbar from "../components/Navbar";
import { useState } from "react";
import "./Summarize.css";

function Summarize() {
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [summary, setSummary] = useState("");

  function handleGenerate() {
    if (!notes) {
      alert("Please write some notes first!");
      return;
    }

    setSummary("This is a placeholder summary of your notes. Real AI summary will appear here later.");
  }

  function handleSave() {
    console.log("Saved note:", { title, notes, summary });
    alert("Note saved! (dummy for now)");
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

          <button onClick={handleGenerate}>Generate Summary &rarr;</button>
        </div>

        <div className="summary-side">
          <span className="step-label">2. AI Summary</span>

          {summary ? (
            <>
              <p className="summary-text">{summary}</p>
              <button className="save-btn" onClick={handleSave}>Save Note</button>
            </>
          ) : (
            <p className="empty-text">Your summary will appear here once generated.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Summarize;
