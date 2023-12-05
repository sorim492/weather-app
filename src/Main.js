import React, { useState } from "react";
import Weather from "./Weather";

function Main(props) {
  let [temperature, setTemperature] = useState(props.temperature);

  function convertToFahrenheit(event) {
    event.preventDefault();
    let fTemperature = (props.temperature * 9) / 5 + 32;
    return setTemperature(Math.round(fTemperature));
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setTemperature(props.temperature);
  }

  return (
    <div className="main">
      <div className="principal">
        <div className="row">
          <div className="col-7">
            <div className="card">
              <div className="card-body">
                <div className="city">
                  <h1>{props.city}</h1>
                  <h4>{props.country}</h4>
                  <h2>
                    Last updated: <br />
                    <span>{props.time}</span>
                  </h2>
                  <h3>{props.description}</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-5">
            <div className="card">
              <div className="card-body">
                <span className="data">
                  <img src="" alt={props.description} />
                  <Weather city="paris" />
                  <h2 className="tempetature">{temperature}</h2>
                  <a href="/" onClick={convertToCelsius} className="active">
                    {" "}
                    °C |
                  </a>
                  <a href="/" onClick={convertToFahrenheit}>
                    {" "}
                    ºF
                  </a>
                  <p>
                    Feels like: <span> 20 </span>°C
                    <br />
                    Wind: <span> 11.2 </span> km/hr
                    <br />
                    Humidity: <span> 20 </span>%
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="currentButton">
        <button>Current Location</button>
      </div>
    </div>
  );
}
export default Main;
