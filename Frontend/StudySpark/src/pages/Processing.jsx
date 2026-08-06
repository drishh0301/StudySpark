import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Processing() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/notes", {
        state: {
          fileName: location.state?.fileName || "Uploaded Notes",
        },
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate, location.state]);

  return (
    <div style={{ textAlign: "center", padding: "100px 20px" }}>
      <h1>Analyzing Your Notes...</h1>
      <p>StudySpark AI is processing your file.</p>
      <p>Reading notes → Generating summary → Creating flashcards</p>
    </div>
  );
}

export default Processing;