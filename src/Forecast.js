import React, {useState} from "react";
import axios from "axios";
import WeatherForecastDaily from "./WeatherForecastDaily";

export default function Forecast(props) {
let [loaded,setloaded] = useState(false);
let [forecast, setForecast] = useState();

  function showForecast(response){
    console.log(response.data)
    setloaded(true);
    setForecast(
     response.data.daily,
    )
  }
  
if (loaded){
  return (
  <div className="forecast">

  <div className="card">
    <div className="card-body">
      <h2>Forecast</h2>
      <div className="row">
        {forecast.map(function (dailyForecast,index){
        if(index < 5){
        return(
          <div className="col" key={index}>
          <WeatherForecastDaily data={dailyForecast}/>
          </div>
        );
        } else{ return null;}
        })}
     
      
      
      
      </div>
    </div>

</div>
</div>
);
} else{  

  let lon = props.coord.lon;
  let lat = props.coord.lat;
  let units = "metric"
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/onecall?"
  let apiKey ="c8735bb7e8e2f8d8a38c7501f3cd47d3";
  let apiUrl = `${apiEndpoint}lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`
  axios.get(apiUrl).then(showForecast);
  return null;
  }
}

