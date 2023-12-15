import React from "react";
import axios from "axios";

export default function Forecast(props) {

  function showForecast(response){
    console.log(response.data)

  }
  
    let lon = props.coord.lon;
    let lat = props.coord.lat;
    let units = "metric"
    let apiEndpoint = "https://api.openweathermap.org/data/2.5/onecall?"
    let apiKey ="c8735bb7e8e2f8d8a38c7501f3cd47d3";
    let apiUrl = `${apiEndpoint}lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`
    axios.get(apiUrl).then(showForecast);


  return (
    <div className="forecast">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h2>Forecast</h2>
            <div className="row">
            <div className="col">
            <h2>Mon</h2>
            <img src="#" alt="#" />
            <h4>Cloudy</h4>
            <span>10°C {" | "}</span>
            <span>5°C</span>
            </div>
            <div className="col">
            <h2>Tue</h2>
            <img src="#" alt="#" />
            <h4>Cloudy</h4>
            <span>10°C {" | "}</span>
            <span>5°C</span>
            </div>
            <div className="col">
            <h2>Wed</h2>
            <img src="#" alt="#" />
            <h4>Cloudy</h4>
            <span>10°C {" | "}</span>
            <span>5°C</span>
            </div>
            <div className="col">
            <h2>Thu</h2>
            <img src="#" alt="#" />
            <h4>Cloudy</h4>
            <span>10°C {" | "}</span>
            <span>5°C</span>
            </div>
            <div className="col">
            <h2>Fri</h2>
            <img src="#" alt="#" />
            <h4>Cloudy</h4>
            <span>10°C {" | "}</span>
            <span>5°C</span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
