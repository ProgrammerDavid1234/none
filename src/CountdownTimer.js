// CountdownTimer.js
import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let time = {};

    if (difference > 0) {
      time = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return time;
  }

  return (
    <div className="countdown-timer">
      <h1>Countdown to Our Anniversary</h1>
      <div className="time">
        <div className="unit">{timeLeft.days} <span>Days</span></div>
        <div className="unit">{timeLeft.hours} <span>Hours</span></div>
        <div className="unit">{timeLeft.minutes} <span>Minutes</span></div>
        <div className="unit">{timeLeft.seconds} <span>Seconds</span></div>
      </div>
    </div>
  );
};

export default CountdownTimer;
