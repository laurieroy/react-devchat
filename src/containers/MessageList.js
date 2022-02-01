import React, { Component }  from 'react';
import { v4 as uuidv4 } from 'uuid';

import Message from '../components/Message'

class MessageList extends Component {
    state = { 
        messages: [
            {user: "Freddy Kreuger", message: "Starring in a new movie where I murder coders. Calling it Freddy vs. JSON", id: uuidv4()},
            {user: "Jason Voorhees", message: "I don't get it.", id: uuidv4()},
            {user: "Michael Myers", message: "I only kill cool teens.", id: uuidv4()},
            {user: "Girl from the Ring", message: "Watch this cool video", id: uuidv4()},
        ]
    }

    addMsg = () =>  {
        this.setState({messages: [...this.state.messages, {user: "god", message: "lol", id: uuidv4() }]})
    }
    render() {
        return <ol>
            {this.state.messages.map((m) => <Message key={m.id} message = {m} />)} 
            <button onClick={this.addMsg}>Add message</button>
        </ol>
    
    }
}

export default MessageList;
