import React from "react";
import "../styles/Features.css";

function Features() {
    return (
        <section className="features" id="features">
            <p className="featureTag">Powerful AI Features</p>

            <h2>Everything You Need to Study Better</h2>

            <p className="featureDesc">
                StudySpark AI helps students learn faster by converting notes
                into summaries, flashcards, and quizzes in seconds.
            </p>

            <div className="featureGrid">
                <div className="featureCard">
                    <h3>AI Summaries</h3>

                    <p>
                        Turn lengthy study material into short,
                        easy-to-understand notes.
                    </p>
                </div>

                <div className="featureCard">
                    <h3>Smart Flashcards</h3>

                    <p>
                        Instantly generate interactive flashcards to revise
                        concepts.
                    </p>
                </div>

                <div className="featureCard">
                    <h3>AI Quiz Generator</h3>

                    <p>
                        Test your understanding with AI-generated quizzes in one
                        click.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Features;
