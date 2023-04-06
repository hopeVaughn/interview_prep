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
    <div>
      {strings.map((str) => (
        <button key={str} onClick={() => handleClick(str)}>
          {str}
        </button>
      ))}
    </div>
  );
};

export default ButtonList;
