import React from "react";
import FormatedDate from './FormatedDate';
import WeatherTemp from "./WeatherTemp";

function Main(props) {
  return (
    <div className="main">
      <div className="principal">
        <div className="row">
            <div className="col-7">
                <div className="card">
                    <div className="card-body">
                        <div className="city">
                            <h3>City: {props.data.city}</h3>
                            <br/>
                            <h4>Country: {props.data.country}</h4>
                            <br/>
                            <FormatedDate date={props.data.date}/>
                            <br/>
                            <h4 className="text-capitalize">Description: <br/> {props.data.description}</h4>
                        </div>
                    </div>
                </div> 
            </div>
            <div className="col-5">
                <div className="card">
                    <div className="card-body">
                        <span className="data">
                            <img src={props.data.icon} alt={props.data.description} />
                            <br/>
                            <WeatherTemp celsius={props.data.temperature}
                            feel={props.data.feels}
                            wind={props.data.wind}/>
                            <h4>Humidity: {props.data.humidity}%</h4>
                        </span>
                    </div>
                </div>
            </div>
        </div>
      </div>
  </div>
  );
}
export default Main;
