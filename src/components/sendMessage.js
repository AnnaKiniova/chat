import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';
import "./sendMessage.css"
import { send } from 'q';



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
    const {messageInput, userName,message_change, name_change, send_button} = this.props;
    const handleSubmit = (e) => {
      e.preventDefault();
      send_button();
   }

  return (
    <form onSubmit={handleSubmit} className="input-group mb-3">
      <input
        type="text"
        placeholder="enter your nickname"
        name="send-message-name"
        className="message-name"
        onChange={name_change}
        value={userName}
      />
      <input
        type="text"
        placeholder="enter your message here"
        name="send-message-text"
        className="form-control"
        aria-describedby="button-addon2"
        onChange={message_change}
        value={messageInput}
      />
      <div className="input-group-append">
        <button
          className="btn btn-info"
          type="submit"
          id="button-addon2"
        >
          Send
        </button>
      </div>
    </form>
  )
}
}

const mapStateToProps = (state) => {
  return {
    messageInput: state.messageInput,
    userName: state.userName,
  };
};

export default connect(mapStateToProps, actions)(SendMessage);

SendMessage.propTypes = {
  submitMessage: PropTypes.func
}

