import React from 'react';
import Websocket from 'react-websocket';

export default class ConnectionPort extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 90
    };
  }

  handleData(data) {
    console.log(data);
    // let result = JSON.parse(data);
    // this.setState({count: this.state.count + result.movement});
  }

  render() {
    return (
      <div>
        Count: <strong>{this.state.count}</strong>

        <Websocket url='ws://st-chat.shas.tel'
          onMessage={this.handleData.bind(this)}/>
      </div>
    );
  }
}
