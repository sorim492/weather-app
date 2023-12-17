import React from "react";

export default function WheatherForecastDaily(props){
    function day(){
        let days=["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let date = new Date(props.data.dt * 1000);
        let day = days[date.getDay()];
        
        return day;
    }
    console.log(props.data.weather[0].main)

    return(
    <div>
        <h2>{day()}</h2>
        <h3>{props.data.weather[0].main}</h3>
        <span>{Math.round(props.data.temp.max)}°C {" | "}</span>
        <span>{Math.round(props.data.temp.min)}°C</span>
    </div>
    )
}