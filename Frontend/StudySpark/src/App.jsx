import { Routes, Route } from "react-router-dom";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Notes from "./pages/Notes";
import Flashcards from "./pages/Flashcards";
import Profile from "./pages/Profile";
import Summarize from "./pages/Summarize";
import NoteDetails from "./pages/NoteDetails";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
    return (
        <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Protected Routes */}
            <Route
                path="/notes"
                element={
                    <ProtectedRoute>
                        <Notes />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/flashcards"
                element={
                    <ProtectedRoute>
                        <Flashcards />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/profile"
                element={
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/summarize"
                element={
                    <ProtectedRoute>
                        <Summarize />
                    </ProtectedRoute>
                }
            />

            <Route path="/note" element={<NoteDetails />} />
        </Routes>
    );
}

export default App;
