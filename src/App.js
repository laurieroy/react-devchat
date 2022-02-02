/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import "./App.css";
import { Component } from "react";
import { Switch, Route } from "react-router-dom";

import ChannelList from "./containers/ChannelList";
import Login from "./components/Login";
import MessageList from "./containers/MessageList";
import Signup from "./components/Signup";
import Welcome from "./components/Welcome";

class App extends Component {
  render() {
    return (
      <>
        <ChannelList />
        <main>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/channel/:id" component={MessageList} />
            <Route exact path="/" component={Welcome} />
          </Switch>
        </main>
      </>
    );
  }
}

export default App;
