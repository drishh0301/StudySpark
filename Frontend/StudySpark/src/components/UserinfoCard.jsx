import "./UserinfoCard.css";

function UserinfoCard({ title, value }) {
    return (
        <div className="userinfoCard">
            <h2>{title}</h2>
            <h1>{value}</h1>
        </div>
    );
}

export default UserinfoCard;
