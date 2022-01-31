function Message(props) {
    const {user, message} = props
    return (
    <li><strong>{user}</strong>: {message}<button>{0}</button>
    </li>)
}

export default Message