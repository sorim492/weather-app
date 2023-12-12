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
      city: response.data.name,
      country: response.data.sys.country,  
      temperature: response.data.main.temp,
      feels: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  let [temperature, setTemperature] = useState(weather.temperature);

  function convertToFahrenheit(event) {
    event.preventDefault();
    let fTemperature = (weather.temperature * 9) / 5 + 32;
    return setTemperature(Math.round(fTemperature));
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setTemperature(weather.temperature);
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
      <br/>
    <div className="principal">
        <div className="row">
            <div className="col-7">
                <div className="card">
                    <div className="card-body">
                        <div className="city">
                            <h3>{weather.city}</h3>
                            <h4>{weather.country}</h4>
                            <h4>{weather.description}</h4>
                        </div>
                    </div>
                </div> 
            </div>
            <div className="col-5">
                <div className="card">
                    <div className="card-body">
                        <span className="data">
                            <img src={weather.icon} alt={weather.description} />
                            <br/>
                            <h2>{Math.round(temperature)}</h2>
                            <a href="/" onClick={convertToCelsius} className="active">
                                {" "}
                                °C |
                            </a>
                            <a href="/" onClick={convertToFahrenheit}>
                                {" "}
                                ºF
                            </a>
                            <h4>Feels like: {Math.round(weather.feels)} °C</h4>
                            <h4>Humidity: {weather.humidity} %</h4>
                            <h4>Wind: {weather.wind} km/hr</h4>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}
