/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { Component } from 'react';

class MessageForm extends Component {
  state = { 
    username: "",
    message: "",
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit(event) {
    event.preventDefault();

    fetch(`http://localhost:3000/channels/${this.props.channelId}/messages`, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    })

    this.setState({message: "", username: ""})
  }

  render(){
    const {message, username} = this.state

    return (
      <form className="message-form" onSubmit={this.onSubmit}>
        <label>
          User:
          <input type="text" name="username" onChange={this.onChange} value={username} />
        </label>
        <br/>
        <label>
          Message:
          <input type="text" name="message" onChange={this.onChange} value={message} />
        </label>
        <input type="submit" value="Submit" />
      </form>
  )
  }
}
export default MessageForm