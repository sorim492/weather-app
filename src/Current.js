import React, {useState} from "react";
import axios from "axios";

export default function Current(){
    let [cWeather, setcWeather] = useState({ready:false})

    function showcurrentTemperature(response){
        console.log(response)
        setcWeather({
            ready: true,
            temp: response.data.main.temp,
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

    return(
        <div>
            <div className="currentButton">
                <button onClick={currentButton}>Current Location</button>
                <br/>
                <h4>Temp: {Math.round(cWeather.temp)}</h4>
             </div>
            
        </div>
    )
}