/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { Component } from 'react';

class MessageForm extends Component {
  state = { 
    user: "",
    message: "",
}

handleChange(event) {
  this.setState({value: event.target.value});
}

handleSubmit(event) {
  event.preventDefault();

  this.setState({message: "", user: ""})
}

onChange = (e) => {
  this.setState({[e.target.name]: e.target.value})
}

  render(){
    const {message, user} = this.state

    return (
      <form className="message-form" onSubmit={this.onSubmit}>
        <label>
          User:
          <input type="text" name="user" onChange={this.onChange} value={user} />
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