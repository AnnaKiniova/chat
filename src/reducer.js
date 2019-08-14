const Initialstate ={
  messageInput: '',
  userName: 'test'
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

    case 'DEC':
      return state - 1;

    default:
      return state;
  }
};

export default reducer;
