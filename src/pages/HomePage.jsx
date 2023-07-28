import { useNavigate } from "react-router-dom";
import videoTrailer from '../videos/video3.mp4';
import './HomePage.css';

const HomePage = () => {
    const payload = JSON.parse(localStorage.getItem('userData'));
    console.log(payload);
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/');
    }
    return (
        <div className="base-container">
            {
                payload && (
                    <div className="profile-image-container">
                        {payload.picture && <img src={payload.picture} className="user-img" alt="User" />}
                    </div>
                )
            }
            <video src={videoTrailer} autoPlay loop muted />
            <h1>Adventure Awaits</h1>
            <p>"{payload.first} {payload.last}"</p>
            <p>What are you waiting for?</p>
            <div className='base-btns'>
                <button className="btn-styled">GET STARED</button>
                <button className="btn-styled">WATCH TRAILER</button>
            </div>
            <button className="custom-button" onClick={handleSubmit}>Log Out</button>
        </div>
    );
}

export default HomePage;