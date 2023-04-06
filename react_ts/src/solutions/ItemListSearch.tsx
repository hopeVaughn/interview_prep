/*
In this solution, we define a functional component called ItemList that contains two state variables, searchQuery and items. We use the useState hook to update the searchQuery and items state variables when the user types a search query or when the list of items changes.

We define a filteredItems variable that contains only the items that match the search query. We use the filter method to create this variable by checking if each item in the items array includes the search query (case-insensitive).

We then render a search input and a list of filtered items. We use the value and onChange props of the input element to update the searchQuery state variable when the user types into the search bar. We use the map method to render each filtered item as an li element.
*/

import React, { useState } from 'react';

const ItemList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [items, setItems] = useState(['apple', 'banana', 'cherry', 'date']);

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type='text'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
