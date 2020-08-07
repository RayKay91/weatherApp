import React, { useState } from 'react';
import Search from './components/Search';
import WeatherCard from './components/WeatherCard';
import Loading from './components/Loading';
import ErrorCard from './components/ErrorCard';
import axios from 'axios';

function App() {
  const [weather, setWeather] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [icon, setIcon] = useState('');
  const [location, setLocation] = useState('');
  const [statusCode, setStatusCode] = useState(0);

  const getWeather = async (location) => {
    if (location) {
      setIsLoading(true);

      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
        );

        const icon = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
        setStatusCode(response.data.cod);
        setIsLoading(false);

        setIcon(icon);
        setWeather(response.data);
        setIsLoading(false);
      } catch {
        setStatusCode(404);
        setIsLoading(false);
        setLocation(location);
      }
    }
  };

  return (
    <div className="row">
      <div className="container center col s12 m8 l6 offset-m2 offset-l3">
        <div className="section"></div>
        <h2>Welcome to the Weather Checker</h2>
        <h5>Search for the current weather in any city around the world.</h5>
        <div className="section"></div>
        <Search handleSearch={getWeather} />
        <div className="section">
          {isLoading ? <Loading /> : null}
          {statusCode === 404 ? <ErrorCard location={location} /> : null}
          {weather && statusCode === 200 ? (
            <WeatherCard icon={icon} weather={weather} />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
