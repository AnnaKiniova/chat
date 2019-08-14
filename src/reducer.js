const Initialstate ={
  messageInput: '',
  userName: '',
  messages: [],
  isOnline: false
}

const reducer = (state = Initialstate, action) => {

  switch (action.type) {
    case 'CHNG':
      return Object.assign({}, state, {
        messageInput: action.payload
      });

    case 'USER_CHANGE':
      return Object.assign({}, state, {
        userName: action.payload
      });

    case 'SEND_BUTTON':
      return Object.assign({}, state, {
        messageInput: ''
      });

    case 'RECIEVE_MESSAGE':
      return Object.assign({}, state, {
        messages: [...action.message, ...state.messages]
      });

    case 'SET_WEBSOCKET':
        console.log('online');
        return Object.assign({}, state, {
          isOnline: true
        });

      case 'UNSET_WEBSOCKET':
        console.log('offline');
      return Object.assign({}, state, {
        isOnline: false
      });

    default:
      return state;
  }
};

export default reducer;
