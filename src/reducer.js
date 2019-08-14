const Initialstate ={
  messageInput: '',
  userName: 'test',
  // messages: []
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
        console.log('---'+ state.messageInput)
      return Object.assign({}, state, {
        messageInput: ''
      });
    default:
      return state;
  }
};

export default reducer;
