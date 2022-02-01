import { Component } from "react"

class Message extends Component {
	state = { likes: 0 }

	onClick = (e) => {
		this.setState({ likes: this.state.likes + 1 })
	}

	render(){
		const {user, message} = this.props.message

		return (
			<li><strong>{user}</strong>: {message}<button onClick={this.onClick}>{this.state.likes} Likes</button>
			</li>		
		)
		
	}
}

export default Message