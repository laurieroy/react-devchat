/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

// eslint-disable-next-line no-unused-vars
function Login(props) {
  const [user, setUser] = useState({ username: '', password: '' });
  const history = useHistory()
  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch('http://localhost:3000/sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    .then(response => response.json())
    .then(response => {
      if (!response.errors){
        props.setUser(response)
         history.push('/')
       } else {
         alert(response.errors)
       }
     })
  };

  return (
    <>
      <h1>Login!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type='text'
            name='username'
            value={user.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type='password'
            name='password'
            value={user.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <input type='submit' value='Submit' />
      </form>
      <br />
      <NavLink to='/signup'>Or Sign Up!</NavLink>
    </>
  );
}

export default Login;
