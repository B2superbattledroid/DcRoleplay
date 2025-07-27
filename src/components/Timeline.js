import React from 'react';
import { Chrono } from 'react-chrono';
import './Timeline.css';
import { timelineData } from '../data/timelineData';

const Timeline = () => {
  // Convert our data format to react-chrono format
  const chronoItems = timelineData.events.map((event, index) => ({
    title: event.year.toString(),
    cardTitle: event.title || `${event.year} - Event`,
    cardSubtitle: event.subtitle || (event.isHighlighted ? 'Special Event' : 'Historical Event'),
    cardDetailedText: event.description,
    media: event.image ? {
      type: "IMAGE",
      source: {
        url: event.image,
        caption: event.title
      }
    } : undefined
  }));

  return (
    <div className="timeline-container">
      <Chrono
        items={chronoItems}
        mode="VERTICAL_ALTERNATING"
        cardHeight={200}
        cardWidth={400}
        theme={{
          primary: "#ffd700",
          secondary: "#ff8c00",
          cardBgColor: "#1a1a2e",
          cardForeColor: "#ffffff",
          titleColor: "#ffd700",
          titleColorActive: "#ff4500"
        }}
        hideControls={false}
        disableClickOnCircle={false}
        cardPositionVertical="LEFT_AND_RIGHT"
        useReadMore={false}
        enableOutline={true}
        outlineColor="#ffd700"
        scrollable={{ scrollbar: true }}
        slideShow={true}
        slideShowDuration={8000}
        slideShowType="slide_from_sides" 
        classNames={{
          card: 'custom-card',
          cardMedia: 'custom-card-media',
          cardSubTitle: 'custom-card-subtitle',
          cardTitle: 'custom-card-title',
          cardDetailedText: 'custom-card-text',
          timeline: 'custom-timeline-scrollable'
        }}
      />
    </div>
  );
};

export default Timeline; 