/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import MessageForm from './components/MessageForm';
import MessageList from './containers/MessageList';

class App extends Component {
  // title=""
  // subtitle = "A place for devs to get help, offer advice and chill"
  state = { 
    messages: [
        {user: "Freddy Kreuger", message: "Starring in a new movie where I murder coders. Calling it Freddy vs. JSON", id: uuidv4()},
        {user: "Jason Voorhees", message: "I don't get it.", id: uuidv4()},
        {user: "Michael Myers", message: "I only kill cool teens.", id: uuidv4()},
        {user: "Girl from the Ring", message: "Watch this cool video", id: uuidv4()},
    ]
}
addMsg = (newMessage) =>  {
  newMessage = {...newMessage, id: uuidv4()}
  this.setState({messages: [...this.state.messages, newMessage]})
}

  render(){
    return <main>
      <h1>Welcome to devChat</h1>
      <h3>A place for devs to meet up, get help, offer advice and chill</h3> 
      <MessageList messages={ this.state.messages } addMsg={ this.addMsg } />
      <MessageForm addMessage={ this.addMsg } />
    </main>
  }


}

export default App;
