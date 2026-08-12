import React from "react";
import "../styles/Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <h2>StudySpark</h2>

            <p>AI-powered study companion for smarter learning.</p>

            <div className="footerLinks">
                <a href="#features">Features</a>
                <a href="#about">How It Works</a>
            </div>

            <p className="copy">© 2026 StudySpark. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
