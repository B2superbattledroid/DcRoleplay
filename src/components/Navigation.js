import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const location = useLocation();

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <Link to="/" className="nav-logo">
            <h1>Golden Age</h1>
            <p>DC Roleplay</p>
          </Link>
        </div>
        
        <div className="nav-links">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Timeline
          </Link>
          <Link 
            to="/comic" 
            className={`nav-link ${location.pathname === '/comic' ? 'active' : ''}`}
          >
            ASSE Comic
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation; 