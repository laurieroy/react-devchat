/* eslint-disable react/prop-types */
import React, { Component }  from 'react';
import LikeButton from "./LikeButton"

class Message extends Component {
	state = { likes: 0 }

	onClick = () => {
		this.setState({ likes: this.state.likes + 1 })
	}

	render() {
		const {user, message} = this.props.message

		return (
			<li>
				<strong>{user}</strong>:&nbsp;
				<span>{message}</span>&nbsp;
				<LikeButton likes={this.state.likes} onLikeClick={this.onClick} />
			</li>		
		)
		
	}
}

export default Message