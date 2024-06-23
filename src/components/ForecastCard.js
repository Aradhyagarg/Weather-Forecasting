import React from 'react';
import './SearchBar.css';
const ForecastCard = ({ day }) => {
    return (
      <div className="forecast-card">
        <h3>{day.weekday}</h3>
        <img src={day.iconUrl} alt="weather icon" />
        <p>High: {day.high}°F</p>
        <p>Low: {day.low}°F</p>
      </div>
    );
  };
  
  export default ForecastCard;