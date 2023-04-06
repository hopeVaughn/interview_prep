/*
In this solution, we define a functional component called ItemList that takes an array of items as its props. Inside the component, we define a query state variable that keeps track of the user's input in the search bar. We then filter the items array based on the query state variable, and render the filtered items in a list. If there are no matching items, we display a message instead.
*/
import React, { useState } from 'react';

const ItemList: React.FC<{ items: string[] }> = ({ items }) => {
  const [query, setQuery] = useState('');

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type='text'
        placeholder='Search items'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {filteredItems.length === 0 ? (
        <p>No matching items found</p>
      ) : (
        <ul>
          {filteredItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemList;
