import React from 'react';

import MessageList from '../messageList'
import SendMessage from '../sendMessage'
import Header from '../header'

import './App.css';

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

    this.webSocket.onmessage = e => {
      const message = JSON.parse(e.data);
      this.addMessage(message);
    }

    this.webSocket.onclose = () => {
      console.log('offline');
      this.setState({
        isOnline: false
      })
    }
  }

  addMessage = message => {
    this.setState(state => ({ messages: [...message, ...state.messages]
    }))
    // console.log(this.state)
  };
  submitMessage = messageString => {

    const message = { name: this.state.name, message: messageString }
    this.ws.send(JSON.stringify(message))
    this.addMessage(message)
  }


  render() {
    return (

      <div className="App">
        {/* <header className="App-header">
        </header> */}
        < Header data={this.state.isOnline}/>
        < SendMessage
        // onChange={e => this.setState({ name: e.target.value })}
        />
        < MessageList data={this.state.messages}/>
      </div>
    );
  }
}

export default App;
