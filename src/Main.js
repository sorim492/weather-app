import React from "react";
import FormatedDate from './FormatedDate';

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
                            <h2>{Math.round(props.data.temperature)}</h2>
                            <a href="/"  className="active">
                                {" "}
                                °C |
                            </a>
                            <a href="/">
                                {" "}
                                ºF
                            </a>
                            <h4>Feels like: {Math.round(props.data.feels)} °C</h4>
                            <h4>Humidity: {props.data.humidity} %</h4>
                            <h4>Wind: {props.data.wind} km/hr</h4>
                        </span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    <div className="currentButton">
      <button>Current Location</button>
    </div>
  </div>
  );
}
export default Main;
