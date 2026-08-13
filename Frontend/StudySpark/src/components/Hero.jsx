import React from "react";
import "../styles/Hero.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Hero() {
    const navigate = useNavigate();

    return (
        <section className="hero">
            <div className="blob blob1"></div>
            <div className="blob blob2"></div>

            <div className="heroLeft">
                <motion.p
                    className="tag"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    AI Powered Learning Platform
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span style={{ color: "#120e4e" }}>StudySpark</span>
                    <br />
                    <h6>Study Smarter,</h6>
                    <h6>Not Harder.</h6>
                </motion.h1>

                <motion.p
                    className="desc"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    Instantly transform your study notes into AI-generated
                    summaries, flashcards and quizzes. Learn faster and score
                    better.
                </motion.p>

                <div className="heroButtons">
                    <button
                        className="primary"
                        onClick={() => navigate("/signup")}
                    >
                        Get Started
                    </button>
                </div>
            </div>

            <div className="heroRight">
                <div className="dashboard">
                    <div className="dashboardTop">
                        <h3>Study Dashboard</h3>
                        <span>Today</span>
                    </div>

                    <div className="dashboardCard">
                        <div>
                            <h4>Summary Generated</h4>
                            <p>Machine Learning.pdf</p>
                        </div>
                        <span className="success">Done</span>
                    </div>

                    <div className="dashboardCard">
                        <div>
                            <h4>Flashcards</h4>
                            <p>25 Cards Ready</p>
                        </div>
                        <span className="success">Ready</span>
                    </div>

                    <div className="dashboardCard">
                        <div>
                            <h4>Quiz</h4>
                            <p>10 Questions</p>
                        </div>
                        <span className="success">Start</span>
                    </div>

                    <div className="progress">
                        <div className="progressFill"></div>
                    </div>

                    <p className="progressText">AI Processing Complete</p>
                </div>
            </div>
        </section>
    );
}

export default Hero;
