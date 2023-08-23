import React, { useState, useEffect } from 'react';

import './WeatherInfo.css';

function WeatherInfo(props) {
  const { weatherInfo } = props;

  console.log(weatherInfo);

  const parseTemperature = (data) => {
    return (data.main.temp - 273.15).toFixed(1) + ' C';
  };

  const parseHumidity = (data) => {
    return data.main.humidity + ' %';
  };

  const parseWindSpeed = (data) => {
    return data.wind.speed + ' м/с';
  };

  const parseWeatherImage = (data) => {
    return 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
  };

  return (
    <div className="weatherInfo">
      <div className="weatherHeader">
        <img src={parseWeatherImage(weatherInfo)} alt="weather" className="weatherIcon" />
        <div>{weatherInfo.name}</div>
      </div>
      <div className="weatherItemInfo">Температура: {parseTemperature(weatherInfo)}</div>
      <div className="weatherItemInfo">Вологість: {parseHumidity(weatherInfo)}</div>
      <div className="weatherItemInfo">Швидкість вітру: {parseWindSpeed(weatherInfo)}</div>
    </div>
  );
}

export default WeatherInfo;
