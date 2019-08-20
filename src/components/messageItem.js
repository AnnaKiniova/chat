import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import "./messageItem.css";

const MessageItem = props => {
  return (
    <div className="alert alert-primary message-item-card">
      <div className="message-item-time">
        {" "}
        {moment(props.data.time).format("MMMM Do YYYY, h:mm:ss a")}
      </div>
      <div className="message-item-from">
        from <span> {props.data.from}</span>
      </div>
      <div className="message-item-message">{props.data.message}</div>
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
