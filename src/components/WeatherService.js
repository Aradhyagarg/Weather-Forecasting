import axios from 'axios';
import { useState, useEffect } from 'react';

const WeatherService = (city) => {
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = 'f027efe1c25d729ac6cec42ab474c419';
  const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

  useEffect(() => {
    if (city) {
      const fetchWeatherData = async () => {
        try {
          const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}`);
          setWeatherData(response.data);
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      };

      fetchWeatherData();
    }
  }, [city]);

  return weatherData;
};

export default WeatherService;