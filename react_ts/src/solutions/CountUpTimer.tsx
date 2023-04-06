/*
In this solution, we define a functional component called Timer that contains three state variables, time, isActive, and isPaused. We use the useState hook to update these state variables when the timer is started, paused, or reset.

We also define a intervalRef variable using the useRef hook to store a reference to the interval used for updating the timer.

We define three functions, startTimer, pauseTimer, and resetTimer, that are called when the user clicks the corresponding buttons. Inside these functions, we update the time, isActive, and isPaused state variables, and start, pause, or reset the timer interval using setInterval and clearInterval.

We then render a p element that displays the timer in minutes and seconds. We use the padStart method to add leading zeros to the minutes and seconds when necessary.

We also conditionally render the start, pause, and reset buttons based on the isActive and isPaused state variables. The start button is only displayed when the timer is not active, the pause button is only displayed when the timer is active but not paused, and the reset button is displayed when the timer is active or paused.
*/
import React, { useState, useRef } from 'react';

const Timer: React.FC = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const startTimer = () => {
    setIsActive(true);
    setIsPaused(false);
    intervalRef.current = window.setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const pauseTimer = () => {
    setIsActive(true);
    setIsPaused(true);
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
    }
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsPaused(false);
    setTime(0);
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
    }
  };

  return (
    <div>
      <p>
        {Math.floor(time / 60)
          .toString()
          .padStart(2, '0')}
        :{(time % 60).toString().padStart(2, '0')}
      </p>
      {!isActive && !isPaused && <button onClick={startTimer}>Start</button>}
      {isActive && !isPaused && <button onClick={pauseTimer}>Pause</button>}
      {(isActive || isPaused) && <button onClick={resetTimer}>Reset</button>}
    </div>
  );
};

export default Timer;
