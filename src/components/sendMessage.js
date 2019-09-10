import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "../actions";
import "./sendMessage.css";

class SendMessage extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    if (localStorage.getItem("userName") !== null) {
      this.props.set_username(localStorage.getItem("userName"));
    }
  }

  componentDidUpdate() {
    if (this.props.userName !== "") {
      localStorage.setItem("userName", this.props.userName);
    }
  }

  render() {
    const {
      send_button,
      userName,
      name_change,
      message_change,
      messageInput
    } = this.props;
    const handleSubmit = e => {
      e.preventDefault();
      send_button();
    };

    return (
      <form onSubmit={handleSubmit} className="input-group mb-3">
        <input
          type="textarea"
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
          <button className="btn btn-info" type="submit" id="button-addon2">
            Send
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    messageInput: state.messageInput,
    userName: state.userName
  };
};

export default connect(
  mapStateToProps,
  actions
)(SendMessage);

SendMessage.propTypes = {
  submitMessage: PropTypes.func,
  send_button: PropTypes.func,
  userName: PropTypes.string,
  name_change: PropTypes.func,
  message_change: PropTypes.func,
  messageInput: PropTypes.string,
  set_username: PropTypes.func
};
