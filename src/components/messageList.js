import React from 'react';
import PropTypes from 'prop-types';

import MessageItem from './messageItem'

class MessageList extends React.Component {
  render() {
    return(
      <div>
        {this.props.data.map((item, i) => {
            console.log(i);
            return (
            <div key={i}>
              < MessageItem data={item} />
              {console.log(item)}
            </div>)
          }
        )}
      </div>
    )
  }
}

MessageList.propTypes = {
  data:  PropTypes.array
}

export default MessageList;
