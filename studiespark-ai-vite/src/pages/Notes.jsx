import { useState } from "react";
import "./Notes.css";
import Navbar from "../components/Navbar";
import NotesCard from "../components/NotesCard";

function Notes() {
    const [notes, setNotes] = useState([
        {
            id: 1,
            title: "DSA Notes",
            date: "16 July 2026",
            summary: "Arrays, Binary Search, Sorting...",
        },
        {
            id: 2,
            title: "Operating Systems",
            date: "14 July 2026",
            summary: "Processes, Threads, Scheduling...",
        },
    ]);

    return (
        <>
            <Navbar />
            <div id="notesContainer">
                <h1>My Notes</h1>
                <div id="notesGrid">
                    {notes.map((note) => (
                        <NotesCard key={note.id} note={note} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Notes;
