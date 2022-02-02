/* eslint-disable react/react-in-jsx-scope */
import { Component } from 'react';
import Channel from '../components/Channel'

class ChannelList extends Component {
  state = {
    channels: []
  }

  render(){
    return (
      <aside>
        {this.state.channels.map(channel => <h1>Hi from channel map</h1> )}
      </aside>
    )
  }
}

export default ChannelList