import React, { Component, useState, useEffect } from 'react';
import '../styles/App.css';

const App = () => {
  // write your code here
  const [timer, setTimer] = useState(0);
  const setTimeout1 = (event) => {
    if (event.key === "Enter") {
      const temp = Math.floor(Number(event.target.value));
      if (temp) {
        setTimer(temp);
      } else {
        setTimer(0);
      }
    }
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  });

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input
            id="timeCount"
            onKeyDown={setTimeout1}
          />{" "}
          sec.
        </h1>
      </div>
      <div id="current-time">{timer}</div>
    </div>
  );
};

export default App;