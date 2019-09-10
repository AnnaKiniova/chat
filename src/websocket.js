import * as actions from "./actions";
import store from "./store";
import { notifyMe } from "./components/notification";
let webSocket = null;

const establishConnection = () => {
  const url = "ws://st-chat.shas.tel";
  webSocket = new WebSocket(url);

  webSocket.onopen = () => {
    const { undeliveredMessages } = store.getState();
    if (undeliveredMessages.length > 0) {
      undeliveredMessages.map(item => {
        webSocket.send(JSON.stringify(item));
      });
    }
    store.dispatch(actions.set_websocket());
    store.dispatch(actions.deliver_after_offline());
  };

  webSocket.onmessage = e => {
    const message = JSON.parse(e.data);
    store.dispatch(actions.recieve_message(message));
    const { isHidden } = store.getState();
    console.log(message);

    if (isHidden) {
      notifyMe(message[0].message);
    }
  };

  webSocket.onclose = () => {
    store.dispatch(actions.unset_websocket());
    setTimeout(() => {
      establishConnection();
    }, 1000);
  };

  webSocket.onerror = () => {
    webSocket.close();
  };
};

establishConnection();

export const submitMessage = () => {
  const { userName, messageInput, isOnline } = store.getState();

  const message = {
    from: userName,
    message: messageInput
  };
  if (isOnline) {
    webSocket.send(JSON.stringify(message));
  } else {
    store.dispatch(actions.send_offline(message));
  }
};
