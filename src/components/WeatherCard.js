import React from 'react';

function WeatherCard({ weather, icon }) {
  return (
    <div className="row">
      <div className="card z-depth-3 col l8 offset-l2">
        <div className="card-content">
          <span className="card-title">
            The weather in {weather.name}, {weather.sys.country} is{' '}
            {weather.weather[0].description}
          </span>
          {<img src={icon} alt={weather.weather[0].description} />}
          <p>The temperature is {Math.floor(weather.main.temp)}°C</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
