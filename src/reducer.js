const Initialstate = {
  messageInput: "",
  userName: "",
  messages: [],
  isOnline: false,
  undeliveredMessages: []
};

const reducer = (state = Initialstate, action) => {
  switch (action.type) {
    case "CHNG":
      return Object.assign({}, state, {
        messageInput: action.payload
      });

    case "USER_NAME_CHANGE":
      return Object.assign({}, state, {
        userName: action.payload
      });

    case "SEND_BUTTON":
      return Object.assign({}, state, {
        messageInput: ""
      });

    case "SEND_OFFLINE":
      return Object.assign({}, state, {
        undeliveredMessages: [action.payload, ...state.undeliveredMessages]
      });

    case "DELIVER_AFTER_OFFLINE":
      return Object.assign({}, state, {
        undeliveredMessages: []
      });

    case "RECIEVE_MESSAGE":
      return Object.assign({}, state, {
        messages: [...action.message, ...state.messages]
      });

    case "SET_WEBSOCKET":
      console.log("online");
      return Object.assign({}, state, {
        isOnline: true
      });

    case "UNSET_WEBSOCKET":
      console.log("offline");
      return Object.assign({}, state, {
        isOnline: false,
        messages: []
      });




    default:
      return state;
  }
};

export default reducer;
