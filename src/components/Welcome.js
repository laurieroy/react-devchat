/* eslint-disable react/react-in-jsx-scope */
import { Link } from "react-router-dom";

function Welcome({ username }) {
  const notLoggedIn = () => (
    <>
      <h1>Welcome to devChat</h1>
      <h3>A place for devs to meet up, get help, offer advice and chill</h3>
      <p>
        <Link to="/login">Login</Link> or <Link to="/signup">Signup</Link> to
        continue.
      </p>
    </>
  );

  const loggedIn = () => (
    <>
      <h1>Welcome to devChat, {username}!</h1>
      <h3>A place for devs to meet up, get help, offer advice and chill</h3>
      <p>Select a channel form the Sidebar to get started</p>
    </>
  );

  return username ? loggedIn() : notLoggedIn();
}

export default Welcome;
