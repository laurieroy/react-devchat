import Message from '../components/Message'
import messages from '../assets/messages'

function MessageList() {
    return (<>
    <ul>
        {messages.map((m, i) => <Message key={i} {...m} />)}
        
    </ul>
    
    </>)
}

export default MessageList;
