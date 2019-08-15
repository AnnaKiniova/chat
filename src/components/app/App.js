import React from "react";

import MessageList from "../messageList";
import SendMessage from "../sendMessage";
import Header from "../header";

import "./App.css";
import "../visibility";

class App extends React.Component {
  state = {
    isOnline: false,
    messages: []
  };

  addMessage = message => {
    this.setState(state => ({ messages: [...message, ...state.messages] }));
  };

  submitMessage = mess => {
    console.log(mess);
    const message = { from: this.state.name, message: mess };

    this.webSocket.send(JSON.stringify(message));
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
