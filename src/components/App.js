import React, { Component, useState, useEffect } from 'react';
import '../styles/App.css';

const App = () => {
  const [timer, setTimer] = useState(0);
  const keyPressHandler = (event) => {
    if (event.key === 'Enter') {
      const temp = Math.floor(Number(event.target.value));
      if (temp) {
        setTimer = temp;
      }
      else {
        setTimer = 0;
      }
    }
  }
  useEffect(()=>{
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
            type="number"
            id="timeCount"
            onKeyDown={keyPressHandler}
          />{' '}
          sec.
        </h1>
      </div>
      <div id="current-time">{timer}</div>
    </div>
  );
};

export default App;