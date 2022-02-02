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
    const { changeChannel, state: { channelId }} = this
    
    return <>
      <ChannelList channelId={channelId} changeChannel={changeChannel} />
      <main>
        {channelId ? <MessageList channelId={channelId} /> : <Welcome />}
        {channelId && <MessageForm channelId={channelId} />}
      </main>
    </>
  }


}

export default App;
