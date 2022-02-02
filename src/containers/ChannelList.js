/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
import { Component } from 'react';
import Channel from '../components/Channel'

class ChannelList extends Component {
  state = {
    channels: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/channels")
      .then(res => res.json())
      .then(channels => this.setState({channels}))
  }

  render(){
    return (
      <aside>
        {this.state.channels.map(channel => <Channel key={channel.id} {...channel} /> )}
      </aside>
    )
  }
}

export default ChannelList