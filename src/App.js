/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import ChannelList from './containers/ChannelList';
import Login from './components/Login';
import MessageList from './containers/MessageList';
import Signup from './components/Signup';
import Welcome from './components/Welcome';

class App extends Component {
  state = {
    user: {
      username: '',
      id: null
    }
  }

  setUser = ({user, token}) => {
    this.setState({ user })
    localStorage.token = token
  }

  componentDidMount() {
    localStorage.token && fetch('http://localhost:3000/autologin', {
      headers: {'Authorization': localStorage.token}
    })
    .then(res => res.json())
    .then(res => {
      if (res.user) {
        this.setUser(res)
      } else {
        localStorage.clear()
      }
    })
  }

  render() {
    const {id, username} = this.state.user

    return (
      <>
        <ChannelList />
        <main>
          <Switch>
            <Route path='/login'><Login setUser={this.setUser}/></Route>
            <Route path='/signup'><Signup setUser={this.setUser}/></Route>
            <Route path='/channel/:id' render={(routeProps) => <MessageList {...routeProps} id={id} />} />
            <Route exact path='/' render={()=> <Welcome username={username} /> }/>
          </Switch>
        </main>
      </>
    );
  }
}

export default App;
