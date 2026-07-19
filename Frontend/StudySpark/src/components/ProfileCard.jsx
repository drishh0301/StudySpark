import "./ProfileCard.css";

function ProfileCard({ user }) {
    const randomColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)}, 1)`;
    return (
        <div id="profileCard">
            <div id="profilePic" style={{ backgroundColor: randomColor }}>
                {user.name.charAt(0).toUpperCase()}
            </div>

            <div id="userInfo">
                <h1>{user.name.toUpperCase()}</h1>
                <p>{user.email}</p>
                <p>Joining Date: {user.joiningDate}</p>
            </div>
        </div>
    );
}

export default ProfileCard;
