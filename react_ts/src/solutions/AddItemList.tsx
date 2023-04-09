/*
In this solution, we define a functional component called AddItemList that contains two state variables, items and text. We use the useState hook to update these state variables when the user enters text into the form and submits it.

We define a handleTextChange function that is called when the user types into the form. Inside the function, we update the text state variable to reflect the new input.

We define a handleSubmit function that is called when the user submits the form. Inside the function, we add the new item to the items state variable, clear the text state variable, and prevent the default form submission behavior.

We then render a form with an input field and a submit button. We use the value and onChange props of the input element to update the text state variable when the user types into the form. We use the onSubmit prop of the form element to call the handleSubmit function when the user submits the form.

Finally, we render the list of items as an ul element with each item as an li element. We use the map method to render each item.
*/
import React, { useState } from 'react';

const AddItemList: React.FC = () => {
  const [items, setItems] = useState<string[]>([]);
  const [text, setText] = useState('');

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setItems([...items, text]);
    setText('');
  };

  return (
    <div className='w-full md:w-1/2 lg:w-1/3 mx-auto'>
      <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
        <label className='text-gray-700 font-semibold'>
          Add item:
          <input
            type='text'
            value={text}
            onChange={handleTextChange}
            className='border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </label>
        <button
          type='submit'
          className='bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
        >
          Add
        </button>
      </form>
      <ul className='mt-4'>
        {items.map((item) => (
          <li key={item} className='bg-gray-200 p-2 rounded-md my-2'>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddItemList;
