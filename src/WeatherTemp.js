import React, {useState} from "react";

export default function WeatherTemp(props){
    let [unit, setUnit] = useState("celsius");

    function showFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function showCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }
    let faherenheit = (props.celsius * 9) / 5 + 32;

    if (unit==="celsius"){
    return(
        <div className="weatherTemp">
            <h2>{Math.round(props.celsius)}</h2>
            <span  className="active">
                {" "}
                °C |
            </span>
            <a href="/" onClick={showFahrenheit}>
                {" "}
                ºF
            </a>
        </div>
    )
    } else {
        return (
            <div className="weatherTemp">
            <h2>{Math.round(faherenheit)}</h2>
            <span className="active">
                {" "}
                ºF |
            </span>
            <a href="/" onClick={showCelsius}>
                {" "}
               °C 
            </a>                          
        </div>
        )
    }
}



