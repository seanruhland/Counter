import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button'

function App() {
  return (
    <div className="App">
      <Button increment={1}/>
    </div>
  );
}

export default App;
