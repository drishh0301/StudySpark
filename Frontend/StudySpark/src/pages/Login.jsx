import "./Login.css";
const Login = () => {
    return (
        <div>
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
                            // value={formData.username}
                            // onChange={handleChange}
                        />
                    </div>

                    <div className="user_info">
                        <label className="labels">Password:</label>
                        <br />
                        <input
                            type="password"
                            name="password"
                            className="input_field"
                            // value={formData.email}
                            // onChange={handleChange}
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
