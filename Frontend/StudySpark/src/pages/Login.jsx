import { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        if (!email || !password) {
            setError("Please fill all fields");
            return;
        }

        try {
            const response = await axios.post(
                "https://study-spark-swart-eta.vercel.app/api/auth/login",
                {
                    email,
                    password,
                },
            );

            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", JSON.stringify(response.data.user));

            setError(""); // clear old error
            alert("Login Successful!");

            navigate("/notes");
        } catch (err) {
            setError(err.response?.data?.message || "Login Failed");
        }
    }

    return (
        <div id="login_container">
            <header>
                <h1 id="heading">StudySpark</h1>
                <p id="welcome">Welcome Back!</p>
            </header>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="user_info">
                        <label className="labels">Email:</label>
                        <br />
                        <input
                            type="email"
                            name="email"
                            className="input_field"
                            placeholder="abc@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="user_info">
                        <label className="labels">Password:</label>
                        <br />
                        <input
                            type="password"
                            name="password"
                            className="input_field"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <button type="submit" id="loginbtn">
                        Login
                    </button>
                    <div>
                        <p id="signup">
                            Don't have an account?{" "}
                            <Link to="/signup">Sign Up</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Login;
