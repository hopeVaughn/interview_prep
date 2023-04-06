import React, { useState } from 'react';
/*
In this solution, we define a functional component called LoginForm that contains two state variables, username and password, which are initially set to empty strings. We define a handleSubmit function that logs the values of the username and password state variables to the console when the form is submitted. We use the useState hook to update the username and password state variables whenever the user types into the corresponding input fields.

We then render a form with two input fields, one for the username and one for the password. We use the onSubmit prop of the form element to call the handleSubmit function when the form is submitted.
*/
const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('username:', username);
    console.log('password:', password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default LoginForm;
