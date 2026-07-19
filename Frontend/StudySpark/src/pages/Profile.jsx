import { useState } from "react";
import "./Profile.css";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import UserinfoCard from "../components/UserinfoCard";

function Profile() {
    const [user] = useState({
        name: "Sneha",
        email: "sneha1234@gmail.com",
        joiningDate: "20 March 2026",
        flashcards: 25,
        quizzes: 18,
        notes: 42,
    });

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
                <button id="logoutBtn">Logout</button>
            </div>
        </>
    );
}

export default Profile;
