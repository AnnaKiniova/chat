import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {

  render() {
    return(
      <div className = 'header'>
        <div>
          Name
        </div>
        <div>Status
          <span style={this.statusStyle}>
          { this.props.data ? 'online' : 'offline'}
          </span>
        </div>
        <div>date { (new Date()).toString() }</div>
      </div>
    )
  }
}

Header.propTypes = {
  data : PropTypes.bool
}

export default Header;
