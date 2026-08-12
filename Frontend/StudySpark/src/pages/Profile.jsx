import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Profile.css";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import UserinfoCard from "../components/UserinfoCard";

function Profile() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProfileData();
    }, []);

    async function fetchProfileData() {
        try {
            const token = localStorage.getItem("token");
            const headers = { Authorization: `Bearer ${token}` };

            const [profileRes, notesRes, flashcardsRes, quizRes] =
                await Promise.all([
                    axios.get("http://localhost:5000/api/auth/profile", {
                        headers,
                    }),
                    axios.get("http://localhost:5000/api/notes", { headers }),
                    axios.get("http://localhost:5000/api/flashcards", {
                        headers,
                    }),
                    axios.get("http://localhost:5000/api/quiz", { headers }),
                ]);

            const joiningDate = profileRes.data.createdAt
                ? new Date(profileRes.data.createdAt).toLocaleDateString(
                      "en-US",
                      { day: "numeric", month: "long", year: "numeric" },
                  )
                : "";

            setUser({
                name: profileRes.data.name,
                email: profileRes.data.email,
                joiningDate,
                notes: notesRes.data.length,
                flashcards: flashcardsRes.data.count,
                quizzes: quizRes.data.count,
            });
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    function handleLogout() {
        localStorage.removeItem("token");
        navigate("/login");
    }

    if (loading) {
        return (
            <>
                <Navbar />
                <h2 style={{ textAlign: "center", marginTop: "60px" }}>
                    Loading Profile...
                </h2>
            </>
        );
    }

    if (!user) {
        return (
            <>
                <Navbar />
                <h2 style={{ textAlign: "center", marginTop: "60px" }}>
                    Couldn't load your profile. Please try logging in again.
                </h2>
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div id="profileContainer">
                <ProfileCard user={user} />
                <div id="cardsContainer">
                    <UserinfoCard
                        title="Flashcards Generated"
                        value={user.flashcards}
                    />
                    <UserinfoCard
                        title="Quizzes Attempted"
                        value={user.quizzes}
                    />
                    <UserinfoCard title="Notes Created" value={user.notes} />
                </div>
                <button id="logoutBtn" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </>
    );
}

export default Profile;
