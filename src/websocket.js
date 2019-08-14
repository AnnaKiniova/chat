import * as actions from './actions';
import store from './store'

const url = 'ws://st-chat.shas.tel';
const webSocket = new WebSocket(url);


webSocket.onopen = () => {
  // this.setState({
  //   isOnline: true
  // })
  // console.log('online')
}

webSocket.onmessage = (e) => {
  const message = JSON.parse(e.data);
  store.dispatch(actions.recieve_message(message));
  //
  // this.addMessage(message);
}

webSocket.onclose = () => {
  // console.log('offline');
  // this.setState({
  //   isOnline: false
  // })
}
