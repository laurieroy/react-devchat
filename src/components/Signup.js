/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

function Signup(props) {
  const [user, setUser] = useState({
    username: "",
    password: "",
    passwordConfirmation: "",
  });

  const history = useHistory()

  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username: user.username, password: user.password, password_confirmation: user.passwordConfirmation}),
    })
    .then(response => response.json())
    .then(response => {
      if (!response.errors){
        props.setUser(response)
         history.push("/")
       } else {
         alert(response.errors)
       }
     })
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password Confirmation:
          <input
            type="text"
            className={
              user.password === user.passwordConfirmation ? "match" : "no-match"
            }
            name="passwordConfirmation"
            value={user.passwordConfirmation}
            onChange={handleChange}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
      <br />
      <NavLink to="/Login">Or Login!</NavLink>
    </>
  );
}

export default Signup;
