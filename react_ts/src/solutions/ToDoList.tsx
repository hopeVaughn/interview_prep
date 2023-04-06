/*
In this solution, we define a functional component called TodoList that contains two state variables, items and text. We use these state variables to store the list of todo items and the text input from the user.

We define three helper functions, handleTextChange, handleAddItem, and handleRemoveItem. handleTextChange is called when the user types into the input field. handleAddItem is called when the user clicks the "Add" button. handleRemoveItem is called when the user clicks the "X" button next to a todo item.

We use the useState hook to update the items and text state variables when the user adds or removes a todo item.
*/
import React, { useState } from 'react';

interface TodoItem {
  id: number;
  text: string;
}

const ToDoList: React.FC = () => {
  const [items, setItems] = useState<TodoItem[]>([]);
  const [text, setText] = useState('');

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleAddItem = () => {
    const newItem: TodoItem = {
      id: items.length + 1,
      text: text,
    };
    setItems([...items, newItem]);
    setText('');
  };

  const handleRemoveItem = (id: number) => {
    const filteredItems = items.filter((item) => item.id !== id);
    setItems(filteredItems);
  };

  return (
    <div className='max-w-md mx-auto'>
      <h1 className='text-2xl font-bold mb-4'>Todo List</h1>
      <div className='mb-4 flex'>
        <input
          className='border border-gray-400 p-2 w-full rounded-l'
          type='text'
          value={text}
          onChange={handleTextChange}
        />
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r'
          onClick={handleAddItem}
        >
          Add
        </button>
      </div>
      <ul className='list-disc pl-4'>
        {items.map((item) => (
          <li key={item.id} className='mb-2'>
            <span>{item.text}</span>
            <button
              className='ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded'
              onClick={() => handleRemoveItem(item.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
