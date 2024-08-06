import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [hasElapsed, setHasElapsed] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const time = calculateTimeLeft();
      setTimeLeft(time);
      if (Object.keys(time).length === 0) {
        setHasElapsed(true);
        clearInterval(timer);
      }
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
      {hasElapsed ? (
        <div className="love-message">
          <h2>Happy Anniversary!</h2>
          <p>Every moment with you is a treasure. I love you more with each passing day!</p>
        </div>
      ) : (
        <div className="time">
          <div className="unit">{timeLeft.days || 0} <span>Days</span></div>
          <div className="unit">{timeLeft.hours || 0} <span>Hours</span></div>
          <div className="unit">{timeLeft.minutes || 0} <span>Minutes</span></div>
          <div className="unit">{timeLeft.seconds || 0} <span>Seconds</span></div>
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;
