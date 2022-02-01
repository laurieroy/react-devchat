/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

import Message from '../components/Message'

function MessageList(props){

        return <ol>
            {props.messages.map((m) => <Message key={m.id} message = {m} />)} 
            <button onClick={props.addMsg}>Add message</button>
        </ol>
    
    
}

export default MessageList;
