import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
    const [timer, setTimer] = useState(1 * 3600 + 30 * 60 + 15); // 1 hour 30 minutes 15 seconds

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 1 * 3600 + 30 * 60 + 15));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatTime = (time) => {
        const hours = String(Math.floor(time / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, '0');
        const seconds = String(time % 60).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

    return (
        <div className="App">
            <div className="banner-desktop">
                <div className="offer">
                    <img src="https://img.icons8.com/emoji/48/000000/hourglass-not-done.png" alt="Timer" />
                    <span>LIMITED TIME OFFER</span>
                </div>
                <div className="timer-container">
                    Ends in: <span className="timer">{formatTime(timer)}</span>
                </div>
                <div>
                    GET 10% OFF Use Code: <strong>EXAMSTART</strong>
                </div>
            </div>

            <div className="banner-mobile">
                <h1>Limited Time Offer</h1>
                <p>Ends in: <span className="timer">{formatTime(timer)}</span></p>
                <p><strong>Get 10% Off</strong> Use Code: <strong>EXAMSTART</strong></p>
            </div>
        </div>
    );
};

export default App;
