import { useState } from "react";
import "./Signup.css";


function Signup() {
 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  
  const [error, setError] = useState("");

  function handleSubmit(e) {
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

    console.log("Signup data:", { name, email, password });

    alert("Account created! (This is dummy data for now)");
  }

  return (
    <div className="signup-page">
      <h1 className="app-name">StudySpark</h1>
      <p className="tagline">Create your account</p>

      <div className="signup-card">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            type="text"
            placeholder="Your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email">College Email</label>
          <input
            id="email"
            type="email"
            placeholder="yourname@igdtuw.ac.in"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Re-enter your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          
          {error && <p className="error-text">{error}</p>}

          <button type="submit">Sign Up</button>
        </form>

        <p className="switch-text">
          Already have an account? <a href="/login">Sign In</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
