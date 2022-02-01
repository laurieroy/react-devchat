import { Component } from "react"

import Message from '../components/Message'


class MessageList extends Component () {
    state = { messages: [
        {user: "Freddy Kreuger", message: "Starring in a new movie where I murder coders. Calling it Freddy vs. JSON"},
        {user: "Jason Voorhees", message: "I don't get it."},
        {user: "Michael Myers", message: "I only kill cool teens."},
        {user: "Girl from the Ring", message: "Watch this cool video"},
      ]}
      render(){

   
        return 
            <ul>
                {this.messages.map((m, i )=> <Message key={i} message = {m} />)}
                
            </ul>
    
       }
}

export default MessageList;
