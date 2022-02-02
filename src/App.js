/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import { Component } from 'react';

import MessageForm from './components/MessageForm';
import MessageList from './containers/MessageList';

class App extends Component {
  // title=""
  // subtitle = "A place for devs to get help, offer advice and chill"



  render(){
    return <main>
      <h1>Welcome to devChat</h1>
      <h3>A place for devs to meet up, get help, offer advice and chill</h3> 
      <MessageList  />
      <MessageForm />
    </main>
  }


}

export default App;
