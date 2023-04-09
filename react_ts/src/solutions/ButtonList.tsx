/*
In this solution, we define a functional component called ButtonList that takes an array of strings as its props. Inside the component, we define a handleClick function that displays an alert with the given string. We then render a list of buttons using the map method on the strings array. Each button has a unique key attribute that is set to the corresponding string, and an onClick handler that calls the handleClick function with the corresponding string as its argument.
*/
import React from 'react';

interface Props {
  strings: string[];
}

const ButtonList: React.FC<Props> = ({ strings }) => {
  const handleClick = (str: string) => {
    alert(str);
  };

  return (
    <div className='w-full md:w-1/2 lg:w-1/3 mx-auto px-6 mt-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {strings.map((str) => (
          <button
            key={str}
            onClick={() => handleClick(str)}
            className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
          >
            {str}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
