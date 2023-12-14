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
    let feelsFaherenheit = (props.feel * 9) / 5 + 32;
    let wmph = (props.wind * 0.621);

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
            <h4>Feels like: {Math.round(props.feel)} °C</h4>
            <h4>Wind: {props.wind} km/hr</h4>
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
            <h4>Feels like: {Math.round(feelsFaherenheit)} °F</h4>
            <h4>Wind: {Math.round(wmph)} mph</h4>
        </div>
        )
    }
}



