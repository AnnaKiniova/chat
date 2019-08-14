
export const message_change = (e) => {
  return {
    type: 'CHNG',
    payload: e.target.value
  }
};

export const name_change = (e) => (
  {
    type: 'USER_CHANGE',
    payload: e.target.value
 });

export const send_button = (e) => {
  return {
    type: 'SEND_BUTTON'
  };
};
