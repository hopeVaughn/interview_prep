/*
In this solution, we define a functional component called CountdownTimer that takes a startTime prop, which is the number of seconds to count down from. Inside the component, we define a time state variable that keeps track of the current time. We use the useEffect hook to set up an interval that updates the time state variable every second. We also return a cleanup function from the useEffect hook that clears the interval when the component is unmounted.

We then render the current time in an h1 element, or a "Time's up!" message if the time is zero or negative.
*/
import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC<{ startTime: number }> = ({ startTime }) => {
  const [time, setTime] = useState(startTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='w-full md:w-1/2 lg:w-1/3 mx-auto flex flex-col items-center mt-16'>
      <div className='bg-gray-200 rounded-full w-36 h-36 flex items-center justify-center'>
        <h1 className='text-4xl text-center'>
          {time > 0 ? time : "Time's up!"}
        </h1>
      </div>
    </div>
  );
};

export default CountdownTimer;
