import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import UploadNotes from "./pages/UploadNotes";
import Processing from "./pages/Processing";
import NoteDetails from "./pages/NoteDetails";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Landing />} />

        <Route path="/upload" element={<UploadNotes />} />

        <Route path="/processing" element={<Processing />} />

        <Route path="/notes" element={<NoteDetails />} />

        <Route path="/quiz" element={<Quiz />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;