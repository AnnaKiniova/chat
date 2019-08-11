import React from 'react';

import RenderMessage from '../renderMessage'
import './App.css';
import SendMessage from '../sendMessage'
import Header from '../header'

function App() {
  return (

    <div className="App">
      {/* <header className="App-header">
      </header> */}
      < Header />
      < RenderMessage />
      < SendMessage />
    </div>
  );
}

export default App;
