import React from 'react';

import RenderMessage from '../renderMessage'
import './App.css';
import SendMessage from '../sendMessage'
import Header from '../header'

class App extends React.Component {
  state = {
    isOnline : false,
    messages : []
  }
  url = 'ws://st-chat.shas.tel';
  webSocket = new WebSocket(this.url);

  componentDidMount() {
    this.webSocket.onopen = () => {
      this.setState({
        isOnline: true
      })
      console.log('online')
    }

    this.webSocket.onmessage = evt => {
      const message = JSON.parse(evt.data);
      this.addMessage(message);
    }

    this.webSocket.onclose = () => {
      console.log('offline');
      this.setState({
        isOnline: false
      })
    }
  }

  addMessage = message =>
    this.setState(state => ({ messages: [...message] }))

  render() {
    return (

      <div className="App">
        {/* <header className="App-header">
        </header> */}
        < Header data={this.state.isOnline}/>
        < SendMessage />
        < RenderMessage data={this.state.messages}/>

      </div>
    );
  }
}

export default App;
