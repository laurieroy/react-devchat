/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
// import {useState} from 'react'
import { Component } from 'react';
import Message from '../components/Message'

class MessageList extends Component {
    // const [counter, setCounter] = useState(0);
    // const handleClick = () => setCounter(counter + 1);
    state = {
        messages: []
    }

    render(){
        return <ol>
        {/* <button onClick={handleClick}>{counter}</button> */}
        {this.state.messages.map((m) => <Message key={m.id} message = {m} />)} 
    </ol>
    }
    
    
}

export default MessageList;
