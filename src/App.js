import React from 'react';
import './App.css';
import Timeline from './components/Timeline';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Golden Age</h1>
        <p>DC Roleplay Timeline</p>
      </header>
      <main>
        <Timeline />
      </main>
    </div>
  );
}

export default App; 