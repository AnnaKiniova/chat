import { submitMessage } from "./websocket";
export const message_change = e => {
  return {
    type: "CHNG",
    payload: e.target.value
  };
};

export const name_change = e => ({
  type: "USER_NAME_CHANGE",
  payload: e.target.value
});

export const set_username = (name) => ({
  type: "USER_NAME_CHANGE",
  payload: name
});

export const send_button = () => {
  submitMessage();
  return {
    type: "SEND_BUTTON"
  };
};

export const recieve_message = message => ({
  type: "RECIEVE_MESSAGE",
  message: message
});

export const set_websocket = () => ({
  type: "SET_WEBSOCKET"
});

export const unset_websocket = () => ({
  type: "UNSET_WEBSOCKET"
});
