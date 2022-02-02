/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import { Component } from 'react';

import ChannelList from './containers/ChannelList';
import MessageForm from './components/MessageForm';
import MessageList from './containers/MessageList';
import Welcome from './components/Welcome';

class App extends Component {
  state = {
    channelId: null,
  }

  changeChannel = (id) => this.setState({ channelId: id })

  render(){
    return <>
    <ChannelList changeChannel={this.changeChannel} />
      <main>
        {this.state.channelId ? <MessageList /> : <Welcome />}
        {this.state.channelId && <MessageForm />}
      </main>
    </>
  }


}

export default App;
