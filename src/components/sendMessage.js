import React from 'react';
import PropTypes from 'prop-types';

import "./sendMessage.css"

class SendMessage extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);

  }


  state = {
    label: ''
  };
  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    });
  };


  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    });
  };



  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: ''
    });
  };





  handleChange(event) {
    this.setState({message: event.target.value});
    console.log(event.target.value);
  }
  onNameChange(event) {
    this.setState({from: event.target.value});
  }



  render() {
  return (
    <form onSubmit={this.onSubmit} className="input-group mb-3">
      <input type="text" placeholder="enter your nickname" name="send-message-name" className="message-name"
       onChange={this.onNameChange}
      />
      <input type="text" placeholder="enter your message here" name="send-message-text" className="form-control"  aria-describedby="button-addon2"
       onChange={this.onLabelChange}
       value={this.state.label}
      />
      <div className="input-group-append">
        <button className="btn btn-info" type="submit" id="button-addon2"
        >Send</button>
      </div>
    </form>
  )
}
}

SendMessage.propTypes = {
  submitMessage: PropTypes.func
}


export default SendMessage;


