/*
In this solution, we define a functional component called UserTable that takes an array of users as its props. Inside the component, we define a sortBy state variable that keeps track of the column to sort by, and a sortOrder state variable that keeps track of the sort order (ascending or descending). We also define a handleSort function that updates the state variables when a column header is clicked.

We then sort the users array using the sortBy and sortOrder state variables, and render the sorted users in a table. Each column header has an onClick handler
*/

import React, { useState } from 'react';

interface User {
  name: string;
  age: number;
  gender: 'male' | 'female';
}

const UserTable: React.FC<{ users: User[] }> = ({ users }) => {
  const [sortBy, setSortBy] = useState<'name' | 'age' | 'gender'>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleSort = (column: 'name' | 'age' | 'gender') => {
    if (column === sortBy) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  const sortedUsers = users.slice().sort((a, b) => {
    const order = sortOrder === 'asc' ? 1 : -1;
    if (sortBy === 'name') {
      return order * a.name.localeCompare(b.name);
    } else if (sortBy === 'age') {
      return order * (a.age - b.age);
    } else {
      return order * a.gender.localeCompare(b.gender);
    }
  });

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => handleSort('name')}>Name</th>
          <th onClick={() => handleSort('age')}>Age</th>
          <th onClick={() => handleSort('gender')}>Gender</th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((user) => (
          <tr key={user.name}>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.gender}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
