import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  let [temperature, setTemperature] = useState();

  function showTemperature(response) {
    setTemperature(Math.round(response.data.main.temp));
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=de2c40e370d58e257faf07ba4ea95840&units=metric`;
  axios.get(url).then(showTemperature);

  return (
    <div>
      <h2>{temperature}</h2>
    </div>
  );
}
