import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/NoteDetails.css";

function NoteDetails() {

  const navigate = useNavigate();
  const location = useLocation();

  const fileName = location.state?.fileName || "Operating_System_Notes.pdf";

  let summary = "";
  let flashcards = [];

  const name = fileName.toLowerCase();

  if (name.includes("java")) {

    summary =
      "Java is an object-oriented programming language used for developing web, desktop and mobile applications.";

    flashcards = [
      "What is Java?",
      "Features of Java",
      "OOP Concepts"
    ];

  }
  else if (name.includes("dbms")) {

    summary =
      "DBMS is software used to store, organize and manage data efficiently in databases.";

    flashcards = [
      "Primary Key",
      "Foreign Key",
      "Normalization"
    ];

  }
  else if (name.includes("machine")) {

    summary =
      "Machine Learning is a branch of Artificial Intelligence that enables computers to learn from data and improve automatically.";

    flashcards = [
      "Supervised Learning",
      "Unsupervised Learning",
      "Regression"
    ];

  }
  else {

    summary =
      "Operating System is system software that manages hardware, memory, processes and files. It acts as an interface between the user and the computer.";

    flashcards = [
      "What is an Operating System?",
      "Types of Operating Systems",
      "Functions of OS"
    ];

  }

  return (

    <div className="notesPage">

      <div className="notesCard">

        <h1>Study Notes</h1>

        <h3>Uploaded File</h3>
        <p>{fileName}</p>

        <h3>Summary</h3>
        <p>{summary}</p>

        <h3>Flashcards Preview</h3>

        <ul>
          {flashcards.map((card, index) => (
            <li key={index}>{card}</li>
          ))}
        </ul>

        <button
          onClick={() =>
            navigate("/quiz", {
              state: {
                fileName: fileName
              }
            })
          }
        >
          Take Quiz
        </button>

      </div>

    </div>

  );

}

export default NoteDetails;