import React, { useState } from 'react';
import './ASSEComic.css';

function ASSEComic() {
  const [currentPage, setCurrentPage] = useState(0);
  
  const comicPages = [
    '/images/ASSEvol1/AmericanSocietyofSuperEvilCover.png',
    '/images/ASSEvol1/AmericanSocietyofSuperEvil.png',
    '/images/ASSEvol1/AmericanSocietyofSuperEvil2.png',
    '/images/ASSEvol1/AmericanSocietyofSuperEvil3.png',
    '/images/ASSEvol1/AmericanSocietyofSuperEvil4.png',
    '/images/ASSEvol1/AmericanSocietyofSuperEvil5.png',
    '/images/ASSEvol1/AmericanSocietyofSuperEvil6.png',
    '/images/ASSEvol1/AmericanSocietyofSuperEvil7.png',
    '/images/ASSEvol1/AmericanSocietyofSuperEvil8.png',
    '/images/ASSEvol1/AmericanSocietyofSuperEvil9.png'
  ];

  const goToNextPage = () => {
    if (currentPage < comicPages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  return (
    <div className="comic-container">
      <div className="comic-header">
        <h1>ASSE Vol. 1</h1>
        <p>American Society of Super Evil</p>
      </div>
      
      <div className="comic-reader">
        <div className="comic-navigation">
          <button 
            onClick={goToPreviousPage} 
            disabled={currentPage === 0}
            className="nav-button prev-button"
          >
            ← Previous
          </button>
          
          <div className="page-indicator">
            Page {currentPage + 1} of {comicPages.length}
          </div>
          
          <button 
            onClick={goToNextPage} 
            disabled={currentPage === comicPages.length - 1}
            className="nav-button next-button"
          >
            Next →
          </button>
        </div>
        
        <div className="comic-page-container">
          <img 
            src={comicPages[currentPage]} 
            alt={`ASSE Comic Page ${currentPage + 1}`}
            className="comic-page"
            onClick={goToNextPage}
            style={{ cursor: 'pointer' }}
          />
        </div>
        
        <div className="page-thumbnails">
          {comicPages.map((page, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`thumbnail-button ${currentPage === index ? 'active' : ''}`}
            >
              <img 
                src={page} 
                alt={`Page ${index + 1}`}
                className="thumbnail"
              />
              <span className="thumbnail-number">{index + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ASSEComic; 