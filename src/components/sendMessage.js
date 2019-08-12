import React from 'react';

const SendMessage = () => {
  return (
    <div className="input-group mb-3">
      <input type="text" className="form-control" placeholder="enter your message here" aria-describedby="button-addon2" />
      <div className="input-group-append">
        <button className="btn btn-info" type="button" id="button-addon2">Send</button>
      </div>
      </div>
  )
};





export default SendMessage;


