import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    function logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/");
    }

    return (
        <div id="nav_container">
            <div id="logo">StudySpark</div>

            <ul id="nav_links">
                <li>
                    <Link to="/notes">Home</Link>
                </li>

                <li>
                    <Link to="/summarize">Summarize</Link>
                </li>

                <li>
                    <Link to="/notes">My Notes</Link>
                </li>

                <li>
                    <Link to="/profile">Profile</Link>
                </li>

                <li onClick={logout}>Logout</li>
            </ul>
        </div>
    );
};

export default Navbar;
