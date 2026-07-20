import { use, useState } from "react";
import "./Login.css";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div id="login_container">
            <header>
                <h1 id="heading">StudySpark</h1>
                <p id="welcome">Welcome Back!</p>
            </header>
            <div>
                <form>
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

                    <button type="submit" id="loginbtn">
                        Login
                    </button>
                    <div>
                        <p id="signup">Don't have an account? Sign Up</p>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Login;
