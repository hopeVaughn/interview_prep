/*
In this solution, we define a functional component called CountUpTimer that contains three state variables, time, isActive, and isPaused. We use the useState hook to update these state variables when the timer is started, paused, or reset.

We also define a intervalRef variable using the useRef hook to store a reference to the interval used for updating the timer.

We define three functions, startTimer, pauseTimer, and resetTimer, that are called when the user clicks the corresponding buttons. Inside these functions, we update the time, isActive, and isPaused state variables, and start, pause, or reset the timer interval using setInterval and clearInterval.

We conditionally render the start, pause, reset, and restart buttons based on the isActive and isPaused state variables. The start button is only displayed when the timer is not active, the pause button is only displayed when the timer is active but not paused, the reset button is displayed when the timer is active or paused, and the restart button is displayed when the timer is paused.

We then render a p element that displays the timer in minutes and seconds. We use the padStart method to add leading zeros to the minutes and seconds when necessary.
*/
import React, { useState, useRef } from 'react';

const CountUpTimer: React.FC = () => {
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
    setIsActive(false);
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
    <div className='w-full md:w-1/2 lg:w-1/3 mx-auto'>
      <p className='text-4xl md:text-6xl lg:text-7xl font-bold text-center'>
        {Math.floor(time / 60)
          .toString()
          .padStart(2, '0')}
        :{(time % 60).toString().padStart(2, '0')}
      </p>
      {!isActive && !isPaused && (
        <button
          className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full md:w-auto mt-4 md:mt-8'
          onClick={startTimer}
        >
          Start
        </button>
      )}
      {isActive && !isPaused && (
        <button
          className='bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 w-full md:w-auto mt-4 md:mt-8'
          onClick={pauseTimer}
        >
          Pause
        </button>
      )}
      {(isActive || isPaused) && (
        <button
          className='bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 w-full md:w-auto mt-4 md:mt-8'
          onClick={resetTimer}
        >
          Reset
        </button>
      )}
      {isPaused && (
        <button
          className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full md:w-auto mt-4 md:mt-8'
          onClick={startTimer}
        >
          Restart
        </button>
      )}
    </div>
  );
};

export default CountUpTimer;
