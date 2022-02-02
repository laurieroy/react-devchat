/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
function Login(props) {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("do something with me!", user);
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
        <input type="submit" value="Submit" />
      </form>
      <br />
      <NavLink to="/signup">Or Sign Up!</NavLink>
    </>
  );
}

export default Login;
