/*
In this solution, we define a functional component called ItemList that takes an array of items as its props. Inside the component, we define a query state variable that keeps track of the user's input in the search bar. We then filter the items array based on the query state variable, and render the filtered items in a list. If there are no matching items, we display a message instead.
*/
import React, { useState } from 'react';

interface ItemListProps {
  items: string[];
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  const [query, setQuery] = useState('');

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
      <input
        type='text'
        placeholder='Search items'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
      />
      {filteredItems.length === 0 ? (
        <p className='mt-4 text-gray-600'>No matching items found</p>
      ) : (
        <ul className='mt-4 space-y-2'>
          {filteredItems.map((item) => (
            <li key={item} className='p-2 bg-gray-100 rounded-md'>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemList;
