import React from 'react';
import RenderMessage from '../renderMessage'

import './App.css';
import SendMessage from '../sendMessage'

function App() {
  return (

    <div className="App">
      {/* <header className="App-header">
      </header> */}

      < RenderMessage />
      < SendMessage />
    </div>
  );
}

export default App;
