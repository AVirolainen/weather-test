import React, { useState, useEffect } from 'react';
import axios from 'axios';

import WeatherInfo from './components/WeatherInfo/WeatherInfo';
import WeatherGraph from './components/WeatherGraph/WeatherGraph';
import dropIcon from './icons/drop.png';

import './App.css';

function App() {
  const [weatherInfo, setWeatherInfo] = useState();
  const [city, setCity] = useState('');

  const handleWeatherInfo = () => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=128378d60a303830a83da8b153076707`)
      .then((response) => {
        setWeatherInfo(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="container">
      <div className="header">
        <img src={dropIcon} alt="drop" />
        <div className="headerName">Weather-App</div>
      </div>
      <div className="inputWrapper">
        <div className="inputContainer">
          <div className="cityNameContainer">
            <div className="cityName">Назва міста: </div>
            <input className="cityInput" onChange={(event) => handleCityChange(event)}></input>
          </div>
          <button className="cityButton" onClick={handleWeatherInfo}>
            Шукати
          </button>
        </div>
      </div>
      {weatherInfo ? (
        <div className="infoWrapper">
          <WeatherInfo weatherInfo={weatherInfo} />
          <WeatherGraph />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
