import React, {Component, useState, useEffect} from 'react';
import '../styles/App.css';

const App = () => {
  const [secs, setSecs] = useState('');
  const [time, setTime] = useState('');

  const nextKey = (event) => {
    console.log(event.keyCode);
    if (event.keyCode === 13) {
      stopTimer();
      if (Number(event.target.value) >= 0) setSecs(Number(event.target.value));
      else setSecs(0);
      return;
    }
  };
  const timer = () => {
    const m = setTimeout((event) => setSecs(secs - 1), 1 * 1000);
    setTime(m);
  };
  const stopTimer = () => {
    console.log(time, 'time');
    setTime('');
  };

  useEffect(() => {
    console.log(time);
    window.addEventListener('keydown', keyPressHandler);
    if (secs > 0) timer();
    else stopTimer();
    return () => {
      window.removeEventListener('keydown', keyPressHandler);
    };
  }, [secs]);

  const keyPressHandler = (event) => {
    if (event.keyCode === 13) {
      if (Number(event.target.value) >= 0) {
        setSecs(Math.floor(Number(event.target.value)));
      } else {
        console.log(Number(event.target.value)), ' entered!');
        setTime('');
        return;
      }
    }
  };
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
      <div id="current-time">{secs}</div>
    </div>
  );
};

export default App;