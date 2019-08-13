import React from "react";
import PropTypes from "prop-types";

import "./messageItem.css";

const MessageItem = props => {
  return (
    <div className="alert alert-primary message-item-card">
      <div className="message-item-header">
        <span className="message-item-time">
          sent on {props.data.time}</span>
        <span className="message-item-from">
          author {props.data.from}</span>
      </div>
      <div className="message-item-message">
        {props.data.message}
      </div>
    </div>
  );
};

MessageItem.propTypes = {
  data: PropTypes.object,
  time: PropTypes.string,
  from: PropTypes.string,
  message: PropTypes.string
};

export default MessageItem;
