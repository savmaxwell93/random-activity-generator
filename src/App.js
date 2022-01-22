import React from 'react';
import './App.css';
import RandomSearch from './components/randomSearch';
import TypeSearch from './components/typeSearch';
import Results from './components/results';

function App() {
  return (
    <div className="App">
      <h1>Random Activity Generator</h1>
      <RandomSearch/>
      <TypeSearch/>
      <Results/>
    </div>
  );
}

export default App;