import React from 'react';
// import ConnectionPort from './ws';
import Websocket from 'react-websocket';

class RenderMessage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      messages: []
    };
  }
  componentDidMount(){
    //ConnectionPort();
  }

  renderMessage(data) {

    let messages = JSON.parse(data);
    this.setState({count: this.state.count,
      messages: messages});
      console.log(this.state.messages);
  }


  render() {
    return(
    <>
      <Websocket url='ws://st-chat.shas.tel'
        onMessage={this.renderMessage.bind(this)}>
      </Websocket>

      {this.state.messages.map((item, i) => {
         console.log(item);
          return (
          <div key={i}>{item.message}
          </div>)
        }
        )
      }

    </>
    )
  }
}

export default RenderMessage;
