// App.js
import React from 'react';
import CountdownTimer from './CountdownTimer';
import './App.css';

const App = () => {
  // Set the anniversary date and time to 3 hours and 17 minutes from now
  const anniversaryDate = new Date(new Date().getTime() + (3 * 60 * 60 * 1000) + (17 * 60 * 1000)).toISOString();

  return (
    <div className="App">
      <CountdownTimer targetDate={anniversaryDate} />
    </div>
  );
};

export default App;
