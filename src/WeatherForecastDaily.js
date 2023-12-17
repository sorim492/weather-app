import React from "react";

export default function WheatherForecastDaily(props){
    return(
    <div>
        <h2>{props.data.dt}</h2>
        <span>{Math.round(props.data.temp.max)}°C {" | "}</span>
        <span>{Math.round(props.data.temp.min)}°C</span>
    </div>
    )
}