import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/Processing.css";

function Processing() {

  const navigate = useNavigate();
  const location = useLocation();

  const fileName = location.state?.fileName || "";

  useEffect(() => {

    const timer = setTimeout(() => {

      navigate("/notes", {
        state: {
          fileName: fileName
        }
      });

    }, 3000);

    return () => clearTimeout(timer);

  }, [navigate, fileName]);

  return (

    <div className="processingPage">

      <div className="processingCard">

        <h1>🤖 StudySpark AI</h1>

        <h2>Analyzing your notes...</h2>

        {fileName && (
          <p><strong>File:</strong> {fileName}</p>
        )}

        <div className="loader">
          <div className="loaderFill"></div>
        </div>

        <div className="steps">
          <p>✅ Reading PDF</p>
          <p>✅ Generating Summary</p>
          <p>✅ Creating Flashcards</p>
          <p>✅ Preparing Quiz</p>
        </div>

      </div>

    </div>

  );
}

export default Processing;