import React, {useState} from "react";
import axios from "axios";

export default function Current(){
    let [cWeather, setcWeather] = useState({ready:false})

    function showcurrentTemperature(response){
        console.log(response)
        setcWeather({
            ready: true,
            temp: response.data.main.temp,
            city: response.data.name,
        })
    }

    function showPosition(position){
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        let units = "metric";
        let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
        let apiKey ="de2c40e370d58e257faf07ba4ea95840";
        let apiUrl = `${apiEndpoint}?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;
        axios.get(apiUrl).then(showcurrentTemperature);
    }

    function currentButton(){
        navigator.geolocation.getCurrentPosition(showPosition);
    }

    if(cWeather.ready){
    return(
        <div>
            <div className="currentButton">
                <button onClick={currentButton}>Current Location</button>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="col-6"> 
                            <h2 className="weather-city">{cWeather.city}</h2>
                        </div>
                        <div className="col-6">      
                        <span>  
                            <h4 className="weather-city">Temperature: {Math.round(cWeather.temp)}°C</h4>
                        </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}else{
    return(
        <div className="currentButton">
            <button onClick={currentButton}>Current Location</button>
        </div>
    )
}
}