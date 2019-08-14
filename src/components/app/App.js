import React from "react";

import MessageList from "../messageList";
import SendMessage from "../sendMessage";
import Header from "../header";

import "./App.css";

class App extends React.Component {
  state = {
    isOnline: false,
    messages: []
    // name: '',
    // message: ''
  };

  componentDidMount() {}

  addMessage = message => {
    this.setState(state => ({ messages: [...message, ...state.messages] }));
    // console.log(this.state)
  };

  submitMessage = mess => {
    console.log(mess);
    const message = { from: this.state.name, message: mess };

    this.webSocket.send(JSON.stringify(message));
    // console.log(JSON.stringify(message));
  };

  render() {
    return (
      <div className="App">
        <Header data={this.state.isOnline} />
        <SendMessage onItemAdded={this.submitMessage} />
        <MessageList data={this.state.messages} />
      </div>
    );
  }
}

export default App;
