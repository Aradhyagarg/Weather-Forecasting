import React, { useEffect, useState } from 'react';
import WeatherService from './WeatherService';
import SearchBar from './SearchBar';
import ForecastCard from './ForecastCard';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThermometerHalf, faTint, faWind } from '@fortawesome/free-solid-svg-icons';

const WeatherDisplay = () => {
  const [city, setCity] = useState('London');
  const weatherData = WeatherService(city);
  const [forecast, setForecast] = useState([]);

  const handleSearch = (searchedCity) => {
    setCity(searchedCity);
  };

  const kelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(0);
  };

  return (
    <div className="container">
      <SearchBar onSearch={handleSearch} />
      {weatherData ? (
        <div>
          <h1>Weather in {weatherData.name}</h1>
          <div className="weather-details">
            <p>
              <FontAwesomeIcon icon={faThermometerHalf} /> Temperature:{' '}
              {kelvinToCelsius(weatherData.main.temp)}°C
            </p>
            <p>
              <FontAwesomeIcon icon={faTint} /> Humidity: {weatherData.main.humidity}%
            </p>
            <p>
              <FontAwesomeIcon icon={faWind} /> Wind Speed: {weatherData.wind.speed} mph
            </p>
          </div>
          <div className="forecast-container">
            {forecast.map((day, index) => (
              <ForecastCard key={index} day={day} />
            ))}
          </div>
        </div>
      ) : (
        <p className="loading-message">Loading weather data...</p>
      )}
    </div>
  );
};

export default WeatherDisplay;