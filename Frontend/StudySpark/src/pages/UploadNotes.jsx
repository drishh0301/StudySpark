import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/UploadNotes.css";

function UploadNotes() {
    const [fileName, setFileName] = useState("");
    const navigate = useNavigate();

    const handleFile = (e) => {
        if (e.target.files.length > 0) {
            setFileName(e.target.files[0].name);
        }
    };

    const handleUpload = () => {
        if (fileName === "") {
            alert("Please select a file first.");
            return;
        }

        navigate("/processing", {
            state: {
                fileName: fileName,
            },
        });
    };

    return (
        <div className="uploadPage">
            <div className="uploadCard">
                <h1>Upload Study Notes</h1>

                <p>
                    Upload your notes and let StudySpark AI generate summaries,
                    flashcards and quizzes.
                </p>

                <label className="uploadBox">
                    <input
                        type="file"
                        accept=".pdf,.doc,.docx,.txt"
                        onChange={handleFile}
                        hidden
                    />

                    <div className="uploadIcon">📄</div>

                    <h3>Choose your study file</h3>

                    <span>PDF • DOCX • TXT</span>
                </label>

                <div className="selectedFile">
                    {fileName
                        ? `Selected File: ${fileName}`
                        : "No file selected"}
                </div>

                <button className="uploadBtn" onClick={handleUpload}>
                    Upload Notes
                </button>
            </div>
        </div>
    );
}

export default UploadNotes;
