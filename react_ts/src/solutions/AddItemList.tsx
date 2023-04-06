/*
In this solution, we define a functional component called ItemList that contains two state variables, items and text. We use the useState hook to update these state variables when the user enters text into the form and submits it.

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
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Add item:
          <input type='text' value={text} onChange={handleTextChange} />
        </label>
        <button type='submit'>Add</button>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default AddItemList;
