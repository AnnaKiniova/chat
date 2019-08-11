import React from 'react';
import Websocket from 'react-websocket';

 class ConnectionPort extends React.Component {

  renderMessage(data) {
    let messages = JSON.parse(data);
    console.log(messages);
  }

  render() {
    return(
      <div>
        <Websocket url='ws://st-chat.shas.tel'
          onMessage={this.renderMessage.bind(this)}
        />
      </div>
    );
  }
}

export default ConnectionPort;
