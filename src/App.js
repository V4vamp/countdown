import React, { useState, useEffect } from "react";
import "./App.css";
import Aurora from "./images/aurora.png";
import { GiDiamondRing } from "react-icons/gi";

const App = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-03-31") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="App">
      <h5>Countdown Aurora's Engagement</h5>
      <GiDiamondRing className="FirstRing" />
      <GiDiamondRing className="SecondRing" />
      <p>Venue: Harvest House, Ismail Estate</p>
      <img src={Aurora} alt="" />
      <div className="CountdownClock">
        <div className="CountdownTimeDetails">
          <h6>{timeLeft.days}</h6>
          <span>Days</span>
        </div>
        <div className="CountdownTimeDetails">
          <h6>{timeLeft.hours}</h6>
          <span>Hours</span>
        </div>
        <div className="CountdownTimeDetails">
          <h6>{timeLeft.minutes}</h6>
          <span>Mins</span>
        </div>
        <div className="CountdownTimeDetails">
          <h6>{timeLeft.seconds}</h6>
          <span>Secs</span>
        </div>
      </div>
    </div>
  );
};

export default App;
