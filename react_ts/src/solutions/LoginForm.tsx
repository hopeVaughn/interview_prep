/*
In this solution, we define a functional component called LoginForm that contains two state variables, username and password, which are initially set to empty strings. We define a handleSubmit function that logs the values of the username and password state variables to the console when the form is submitted. We use the useState hook to update the username and password state variables whenever the user types into the corresponding input fields.

We then render a form with two input fields, one for the username and one for the password. We use the onSubmit prop of the form element to call the handleSubmit function when the form is submitted.
*/
import React, { useState } from 'react';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('username:', username);
    console.log('password:', password);
  };

  return (
    <form onSubmit={handleSubmit} className='w-full max-w-sm mx-auto space-y-4'>
      <div>
        <label htmlFor='username' className='block mb-1'>
          Username:
        </label>
        <input
          type='text'
          id='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
        />
      </div>
      <div>
        <label htmlFor='password' className='block mb-1'>
          Password:
        </label>
        <input
          type='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
        />
      </div>
      <div className='text-center'>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
