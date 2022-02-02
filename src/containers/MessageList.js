/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
// import {useState} from 'react'
import { Component } from 'react';

import Message from '../components/Message'

class MessageList extends Component {
    // const [counter, setCounter] = useState(0);
    // const handleClick = () => setCounter(counter + 1);
    state = {
        id: null,
        interval: null,
        messages: [],
        name: ""
    }

    componentDidMount() {
        this.getMessages()
        this.setState({interval: setInterval(this.getMessages, 5000)})
    }

    componentDidUpdate(prevProps, prevState){
        if (prevProps.channelId !== this.props.channelId) {
          this.getMessages()
        }
      }

      componentWillUnmount() {
          clearInterval(this.state.interval)
      }

    getMessages = () => {
        console.log("getting messages")
        fetch(`http://localhost:3000/channels/${this.props.channelId}`)
            .then(res => res.json())
            .then(channel => this.setState({...channel}))
    }

    render(){
        const { messages, name } = this.state 

        return <>
            <h1>{name}</h1>
            <ol>
                {/* <button onClick={handleClick}>{counter}</button> */}
                {messages.map((m) => <Message key={m.id} message = {m} />)} 
            </ol>
        </>
    }
    
    
}

export default MessageList;
