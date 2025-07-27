import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Timeline from './components/Timeline';
import ASSEComic from './components/ASSEComic';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Timeline />} />
            <Route path="/comic" element={<ASSEComic />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; 