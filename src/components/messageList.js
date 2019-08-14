import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import MessageItem from "./messageItem";
import "./messageList.css";
import * as actions from "../actions";

class MessageList extends React.Component {
  render() {
    return (
      <div className="message-list-wrap">
        {this.props.messages.map(item => {
          return (
            <div key={item.id}>
              <MessageItem data={item} />
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: state.messages
  };
};

export default connect(
  mapStateToProps,
  actions
)(MessageList);

MessageList.propTypes = {
  data: PropTypes.array,
  messages: PropTypes.array
};
