/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import { Component } from 'react';

import ChannelList from './containers/ChannelList';
import MessageForm from './components/MessageForm';
import MessageList from './containers/MessageList';
import Welcome from './components/Welcome';

class App extends Component {
  // title=""
  // subtitle = "A place for devs to get help, offer advice and chill"
  state = {
    channelId: null,
  }


  render(){
    return <main>
      
      {this.state.channelId ? <MessageList /> : <Welcome />}
      {this.state.channelId && <MessageForm />}
    </main>
  }


}

export default App;
