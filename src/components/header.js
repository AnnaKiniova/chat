import React from 'react';
import PropTypes from 'prop-types';
import './header.css'

class Header extends React.Component {

  render() {
    return(
      <div className = 'header'>
        <div className = 'header-item'>
          Name
        </div>
        <div className = 'header-item'>Status
          <span style={this.statusStyle}>
          { this.props.data ? 'online' : 'offline'}
          </span>
        </div>
        <div className = 'header-item'>date { (new Date()).toString() }</div>
      </div>
    )
  }
}

Header.propTypes = {
  data : PropTypes.bool
}

export default Header;
