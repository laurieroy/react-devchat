/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
// import {useState} from 'react'
import Message from '../components/Message'

function MessageList(props){
    // const [counter, setCounter] = useState(0);
    // const handleClick = () => setCounter(counter + 1);

        return <ol>
            {/* <button onClick={handleClick}>{counter}</button> */}
            {props.messages.map((m) => <Message key={m.id} message = {m} />)} 
        </ol>
    
    
}

export default MessageList;
