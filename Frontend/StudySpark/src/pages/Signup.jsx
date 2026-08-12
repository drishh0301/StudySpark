import { useState } from "react";
import "./Signup.css";
import axios from "axios";

function Signup() {
    console.log("Signup rendered");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [error, setError] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        if (!name || !email || !password || !confirmPassword) {
            setError("Please fill in all fields.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        setError("");

        try {
            const response = await axios.post(
                "http://localhost:5000/api/auth/signup",
                {
                    name,
                    email,
                    password,
                    confirmPassword,
                },
            );

            alert("Signup successful!");

            console.log(response.data);

            // Optional: clear the form
            setName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
        } catch (err) {
            if (err.response) {
                setError(err.response.data.message);
            } else {
                setError("Server error. Please try again.");
            }
        }
    }

    return (
        <div className="signup-page">
            <div id="header">
                <h1 id="heading">StudySpark</h1>
                <p className="tagline">Create your account</p>
            </div>
            <div className="signup-card">
                <form onSubmit={handleSubmit}>
                    <div className="user_info_signup">
                        <label className="labels" htmlFor="name">
                            Full Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            className="input_field"
                            placeholder="Your full name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="user_info_signup">
                        <label className="labels" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            className="input_field"
                            type="email"
                            placeholder="abc@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="user_info_signup">
                        <label className="labels" htmlFor="password">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            className="input_field"
                            placeholder="Create a password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="user_info_signup">
                        <label className="labels" htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <input
                            id="confirmPassword"
                            type="password"
                            className="input_field"
                            placeholder="Re-enter your password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>

                    {error && <p className="error-text">{error}</p>}

                    <button id="signup_button" type="submit">
                        Sign Up
                    </button>
                    <p id="login">
                        Already have an account? <a href="/login">Sign In</a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Signup;
