import React, { useState } from 'react';
import { Counter } from './components/counter/Counter';
import { Login } from './components/login/Login';
import './App.css';
import BaseComponent from './components/base/BaseComponent';

function App() {
  const [authentication, setAuthentication] = useState(true);
  let element;
  if (!authentication) {
    element = <Login />
  } else {
    element = <BaseComponent />
  }

  return (
    <div className="App">
      <header className="App-header">
        {element}
      </header>
    </div>
  );
}

export default App;
