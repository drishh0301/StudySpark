import React from "react";
import "../styles/CTA.css";
import { useNavigate } from "react-router-dom";

function CTA() {
    const navigate = useNavigate();
    return (
        <section className="cta">
            <h2>Start Learning Smarter Today</h2>

            <p>
                Let AI simplify your study sessions and help you achieve better
                results.
            </p>

            <button onClick={() => navigate("/signup")}>
                Get Started for Free
            </button>
        </section>
    );
}

export default CTA;
