import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [city, setCity] = useState(" ");

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=de2c40e370d58e257faf07ba4ea95840&units=metric`;
    axios.get(url).then(showTemperature);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let [weather, setWeather] = useState({});

  function showTemperature(response) {
    console.log(response.data);
    setWeather({
      temperature: response.data.main.temp,
      feels: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  let form = (
    <form onSubmit={handleSubmit} className="search">
      <input type="search" onChange={updateCity} placeholder="Type a city..." />
      <input type="submit" value="search" />
    </form>
  );

  return (
    <div>
      {form}
      <h4>{city}</h4>
      <h4>{Math.round(weather.temperature)}</h4>
      <h4>Feels like: {weather.feels}</h4>
      <h4>{weather.description}</h4>
      <h4>{weather.humidity} %</h4>
      <h4>{weather.wind} km/h</h4>
      <img src={weather.icon} alt={weather.description} />
    </div>
  );
}
