import React from 'react';
import PropTypes from 'prop-types';

class RenderMessage extends React.Component {
  render() {
    return(
      <div>
        {this.props.data.map((item, i) => {
            console.log(item);
            return (
            <div key={i}>{item.message}
            </div>)
          }
        )}
      </div>
    )
  }
}

RenderMessage.propTypes = {
  data:  PropTypes.array
}

export default RenderMessage;
