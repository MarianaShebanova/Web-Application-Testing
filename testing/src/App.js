import React, { useState } from 'react';
import './App.css';
import Display from './Display';
import Dashboard from './Dashboard';


function App() {
  const [strikes, setStrike] = useState(0);
  const [balls, setBall] = useState(0);

  if (strikes === 3 || balls === 4) {
    setStrike(0);
    setBall(0);
  }
  
  return (
    <div className="App">
      <Display balls={balls} strikes={strikes}/>
      <Dashboard setStrike={setStrike} setBall={setBall} strikes={strikes} balls={balls} />
    </div>
  );
}

export default App;
