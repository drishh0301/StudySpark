import { useState, useEffect } from "react";
import axios from "axios";
import "./Notes.css";
import Navbar from "../components/Navbar";
import NotesCard from "../components/NotesCard";

function Notes() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetchNotes();
    }, []);

    async function fetchNotes() {
        try {
            const response = await axios.get(
                "http://localhost:5000/api/notes",
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token",
                        )}`,
                    },
                },
            );

            setNotes(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    async function deleteNote(id) {
        try {
            await axios.delete(`http://localhost:5000/api/notes/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });

            fetchNotes();
        } catch (err) {
            console.log(err);
            console.log(err.response);
            console.log(err.response?.status);
            console.log(err.response?.data);

            alert(
                err.response?.data?.message || err.message || "Upload failed",
            );
        }
    }

    async function uploadPDF() {
        if (!selectedFile) {
            alert("Please select a PDF first.");
            return;
        }

        const formData = new FormData();
        formData.append("pdf", selectedFile);

        try {
            await axios.post("http://localhost:5000/api/upload", formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "multipart/form-data",
                },
            });

            alert("PDF uploaded successfully!");

            setSelectedFile(null);

            fetchNotes();
        } catch (err) {
            console.log(err);
            alert("Upload failed.");
        }
    }

    return (
        <>
            <Navbar />

            <div id="notesContainer">
                <h1>My Notes</h1>

                <div className="uploadSection">
                    <input
                        type="file"
                        accept=".pdf"
                        onChange={(e) => setSelectedFile(e.target.files[0])}
                    />

                    <button onClick={uploadPDF}>Upload PDF</button>
                </div>

                <div id="notesGrid">
                    {notes.length === 0 ? (
                        <p>No notes found.</p>
                    ) : (
                        notes.map((note) => (
                            <NotesCard
                                key={note._id}
                                note={note}
                                onDelete={deleteNote}
                            />
                        ))
                    )}
                </div>
            </div>
        </>
    );
}

export default Notes;
