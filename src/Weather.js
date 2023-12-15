import React, { useState } from "react";
import axios from "axios";
import Main from "./Main";
import Forecast from "./Forecast";


export default function Weather(props) {
  let [weather, setWeather] = useState({ ready: false});
  let [city, setCity] = useState(props.city);

  function showTemperature(response) {
    setWeather({
      ready: true,
      city: response.data.name,
      coord: response.data.coord,
      date: response.data.dt,
      country: response.data.sys.country,  
      temperature: response.data.main.temp,
      feels: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey ="de2c40e370d58e257faf07ba4ea95840";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(showTemperature);
  }

  let form = (
    <form onSubmit={handleSubmit} className="search">
      <input type="search" autoFocus="on" onChange={updateCity} placeholder="Type a city..." />
      <input type="submit" value="search" />
    </form>
  );

  if (weather.ready){
  return (
    <div className="container">
      {form}
      <br/>
      <Main data={weather}/>
      <Forecast coord={weather.coord}/>
    </div>
  );
  } else {
    search();
    return "Loading..."
  }
}
