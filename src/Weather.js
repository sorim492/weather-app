import React, { useState } from "react";
import axios from "axios";
import FormatedDate from './FormatedDate';

export default function Weather() {
  let [city, setCity] = useState(" ");

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey ="de2c40e370d58e257faf07ba4ea95840";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
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

  let [temperature, setTemperature] = useState(weather.temperature);

  function convertToFahrenheit(event) {
    event.preventDefault();
    let fTemperature = (temperature * 9) / 5 + 32;
    return setTemperature(Math.round(fTemperature));
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setTemperature(weather.temperature);
  }

  let form = (
    <form onSubmit={handleSubmit} className="search">
      <input type="search" autoFocus="on" onChange={updateCity} placeholder="Type a city..." />
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
                            <h3>City: {weather.city}</h3>
                            <h4>Country: {weather.country}</h4>
                            <FormatedDate date={weather.date}/>
                            <h4 className="text-capitalize">Description: {weather.description}</h4>
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
                            <h2>{Math.round(weather.temperature)}</h2>
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
