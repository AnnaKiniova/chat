import * as actions from "./actions";
import store from "./store";

const url = "ws://st-chat.shas.tel";
const webSocket = new WebSocket(url);

webSocket.onopen = () => {
  store.dispatch(actions.set_websocket());
};

webSocket.onmessage = e => {
  const message = JSON.parse(e.data);
  store.dispatch(actions.recieve_message(message));
};

webSocket.onclose = () => {
  store.dispatch(actions.unset_websocket());
};

export const submitMessage = () => {
  const message = {
    from: store.getState().userName,
    message: store.getState().messageInput
  };
  console.log(message);
  webSocket.send(JSON.stringify(message));
};
