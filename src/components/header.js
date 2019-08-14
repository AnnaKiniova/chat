import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './header.css'


class Header extends React.Component {

  render() {
    return(
      <div className = 'header'>
        <div className = 'header-item'>
          Name
        </div>
        <div className = 'header-item'>Status
          <span className={ this.props.isOnline ? 'online' : 'offline'}>
          { this.props.isOnline ? 'online' : 'offline'}
          </span>
        </div>
        <div className = 'header-item'>date { (new Date()).toString() }</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isOnline: state.isOnline,
  };
};

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  isOnline : PropTypes.bool
}
