import "./NotesCard.css";

function NoteCard({ note }) {
    return (
        <div className="noteCard">
            <div className="noteHeader">
                <h2>{note.title}</h2>
                <p>{note.date}</p>
            </div>
            <div className="summaryBox">{note.summary}</div>
            <div className="noteFooter">
                <button className="viewBtn">View</button>
                <button className="deleteBtn">Delete</button>
            </div>
        </div>
    );
}

export default NoteCard;
