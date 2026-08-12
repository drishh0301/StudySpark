import { useNavigate } from "react-router-dom";
import "./NotesCard.css";

function NotesCard({ note, onDelete }) {
    const navigate = useNavigate();

    return (
        <div className="noteCard">
            <div className="noteHeader">
                <h2>{note.title}</h2>
            </div>

            <div className="summaryBox">
                {note.content.substring(0, 150)}...
            </div>

            <div className="noteFooter">
                <button
                    className="viewBtn"
                    onClick={() =>
                        navigate("/note", {
                            state: { note },
                        })
                    }
                >
                    View
                </button>

                <button
                    className="deleteBtn"
                    onClick={() => onDelete(note._id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default NotesCard;
